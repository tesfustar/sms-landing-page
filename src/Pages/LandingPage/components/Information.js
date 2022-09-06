import { useToast, Button, Input, Spinner } from "@chakra-ui/react";
import React, { Fragment, useCallback, useMemo, useState } from "react";
import { useAuth } from "../../../context/auth";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { useHomeContext } from "../../../context/HomeContext";
import { useDropzone } from "react-dropzone";
import { HiDocumentText } from "react-icons/hi";
const Information = () => {
  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#9EA8C5",
    borderStyle: "dashed",
    // backgroundColor: '#F3F3F3',
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const focusedStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "crimson",
  };
  const toast = useToast();
  const { token } = useAuth();
  const { planId ,setIsOpen} = useHomeContext();
  const [logoFile, setLogoFile] = useState(null)
  const [logo, setLogo] = useState()
  const [showDetail, setShowDetail] = useState(false)
  const [licence, setLicence] = useState()
  const [typeId, setTypeId] = useState(null);
  const [licenceFile, setLicenceFile] = useState([]);
  const [identificationFile, setIdentificationFile] = useState([]);
  const [identification, setIdentification] = useState()
  const [formData, setFormData] = useState({
    name: "",
    alias: "",
    tinNumber: "",
    email: "",
    phone: "",
    city: "",
    subCity: "",
    woreda: "",
    poBox: "",
    address: "",
  });
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log({"logo":logo})
  const {
    getRootProps: getRootLicencedProps,
    getInputProps: getInputLicencedProps,
  } = useDropzone({
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
      "text/*": [".pdf", ".docx"],
    },
    onDrop: (acceptedFile) => {
      setLicenceFile([...acceptedFile]);
      setLicence(URL.createObjectURL([...acceptedFile][0]))
    },
  });

  const {
    getRootProps: getRootidentificationProps,
    getInputProps: getInputIdentificationProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
      "text/*": [".pdf", ".docx"],
    },
    onDrop: (acceptedFile) => {
      setIdentificationFile([...acceptedFile]);
      setIdentification(URL.createObjectURL([...acceptedFile][0]))
    },
  });

  const {
    getRootProps: getRootlogoProps,
    getInputProps: getInputlogoProps,
  } = useDropzone({
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    onDrop: (acceptedFile) => {
      setLogoFile([...acceptedFile]);
      setLogo(URL.createObjectURL([...acceptedFile][0]))
    },
  });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  console.log({"identificationFile":identificationFile[0]})
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };
  const handleSubmit = () => {
    if (
      licenceFile.length == 0 ||
      identificationFile.length == 0 ||
      formData.name == "" ||
      formData.phone == "" ||
      formData.address == "" ||
      formData.alias == "" ||
      formData.city == "" ||
      formData.city == ""
    ) {
      toast({
        // title: "empty field detected",
        description: "please fill the fields and upload file",
        status: "error",
        duration: 1800,
        isClosable: true,
      });
      return;
    }
    handleUploadFile();
  };
  const upgradePlanFileMutation = useMutation(
    async (newData) =>
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}companies`,
        newData,
        {
          headers,
        }
      ),
    {
      retry: false,
    }
  );
  const handleUploadFile = async () => {
    try {
      let logoData = new FormData();
      logoData.append("license", licenceFile[0]);
      logoData.append("id_card", identificationFile[0]);
      logoFile && logoData.append("logo", logoFile[0]);
      logoData.append("name", formData.name);
      logoData.append("alias", formData.alias);
      logoData.append("phone", formData.phone);
      logoData.append("email", formData.email);
      logoData.append("city", formData.city);
      logoData.append("subcity", formData.subCity);
      logoData.append("woreda", formData.woreda);
      logoData.append("po_box", formData.poBox);
      logoData.append("address", formData.address);
      logoData.append("tin_number", formData.tinNumber);
      logoData.append("plan_id", planId);
      upgradePlanFileMutation.mutate(logoData, {
        onSuccess: (responseData) => {
          console.log("Data: ,", responseData);
          toast({
            title: "Success",
            status: "success",
            duration: 1800,
            isClosable: true,
          });
          setIsOpen(false)
        },
        onError: (err) => {
          console.log(err);
          toast({
            title: "Subscribe",
            description: upgradePlanFileMutation?.error?.response?.data?.message,
            status: "error",
            duration: 1800,
            isClosable: true,
          });
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className=" flex flex-col items-start space-y-2  w-full">
          <h1 className="text-[#16213F]  font-medium text-lg">
            Upload Business Licence
          </h1>
          <span className="text-sm">(required)</span>
          <div
            {...getRootLicencedProps({ style })}
            className="bg-[#F3F3F3]  flex flex-col items-center space-y-1 w-full"
          >
            <input
              {...getInputLicencedProps()}
              type="file"
              // onChange={onChange}
              id="input"
            />
            <p className="text-[#959DB1] text-sm">File must be in jpg, jpeg, png, pdf</p>
            {!licence ? <HiDocumentText size={90} /> : <img src={licence} alt="" className="max-h-36 max-w-20"/>}

            <h1 className="text-[#16213F] font-bold ">Drag & Drop File</h1>
            <p className="text-[#2C7FFB]  font-medium text-sm">
              or Browse on Your Device
            </p>
          </div>
          {/* <div className="w-full flex flex-col items-center justify-center">
            {licenceFileList}
          </div> */}
        </div>
        {/* pasport other */}
        <div
          className=" flex flex-col items-start space-y-2   w-full"
        >
          <h1 className="text-[#16213F]  font-bold ">
            Upload owner identification
          </h1>
          <p className="text-gray-500 text-[13px]    ">
            (passport, ID, Deiving Licence)
          </p>
          <div
            {...getRootidentificationProps({ style })}
            className="bg-[#F3F3F3] dark:bg-[#2c3345]/50 flex flex-col items-center space-y-1 w-full"
          >
            <input
              {...getInputIdentificationProps()}
              type="file"
              // onChange={onChange}
              id="input"
            />
            <p className="text-[#959DB1] text-sm">File must be in jpg, jpeg, png, pdf</p>
            {!identification ? <HiDocumentText size={90} /> : <img src={identification} alt="" className="max-h-36 max-w-20"/>}
            <h1 className="text-[#16213F] font-bold ">Drag & Drop File</h1>
            <p className="text-[#2C7FFB]  font-medium text-sm">
              or Browse on Your Device
            </p>
          </div>
          {/* <div className="w-full flex flex-col items-center justify-center">
            {identificationFileList}
          </div> */}
        </div>
        {/* company logo */}
        <div className=" flex flex-col items-start space-y-2 bg-main-bg   w-full">
          <h1 className="text-[#16213F]  font-medium ">
            Upload Company Logo 
          </h1>
          <span className="text-sm">(optional)</span>
          <div
            {...getRootlogoProps({ style })}
            className="bg-[#F3F3F3]  flex flex-col items-center space-y-1 w-full "
          >
            <input
              {...getInputlogoProps()}
              type="file"
              // onChange={onChange}
              id="input"
            />
            <p className="text-[#959DB1] text-sm">File must be in jpg, jpeg, png, pdf</p>
           {!logo ? <HiDocumentText size={90} /> : <img src={logo} alt="" className="max-h-36 max-w-20"/>}
            <h1 className="text-[#16213F] font-bold ">Drag & Drop File</h1>
            <p className="text-[#2C7FFB]  font-medium text-sm">
              or Browse on Your Device
            </p>
          </div>
          {/* <div className="w-full flex flex-col items-center justify-center">
            {licenceFileList}
          </div> */}
        </div>
      </div>
      {/* other information */}
      <div
        className=" flex flex-col items-start space-y-2 w-full">
        <h1 className="font-medium text-slate-900 dark:text-gray-300 py-3 capitalize text-xl">
          Other information
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
          <Input
            type="text"
            name="name"
            placeholder="name"
           
            // className="w-full p-2 rounded-md bg-transparent border border-gray-600 text-slate-900 dark:text-gray-300"
            onChange={handleFormChange}
          />
          <div className="flex flex-col items-start">

          <Input
            type="text"
            name="alias"
            placeholder="sender Id"
            onFocus={()=>setShowDetail(true)}
            onBlur={()=>setShowDetail(false)}
            className="w-full p-2 rounded-md bg-transparent border border-gray-600 text-slate-900 dark:text-gray-300"
            onChange={handleFormChange}
            />
{showDetail &&    <p className="text-[13px]">You can also send contents to a subscriber based on a prior enquiry to let them know the product or service is available.</p>
}            </div>
          <Input
            type="number"
            name="tinNumber"
            placeholder="Tin Number"
            className="w-full p-2 rounded-md bg-transparent border border-gray-600 text-slate-900 dark:text-gray-300"
            onChange={handleFormChange}
          />

          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 rounded-md bg-transparent border border-gray-600 text-slate-900 dark:text-gray-300"
            onChange={handleFormChange}
          />
          <Input
            type="number"
            name="phone"
            placeholder="Phone"
            className="w-full p-2 rounded-md bg-transparent border border-gray-600 text-slate-900 dark:text-gray-300"
            onChange={handleFormChange}
          />
          <Input
            type="text"
            name="city"
            placeholder="city"
            className="w-full p-2 rounded-md bg-transparent border border-gray-600 text-slate-900 dark:text-gray-300"
            onChange={handleFormChange}
          />
          <Input
            type="text"
            name="subCity"
            placeholder="subcity"
            className="w-full p-2 rounded-md bg-transparent border border-gray-600 text-slate-900 dark:text-gray-300"
            onChange={handleFormChange}
          />
          <Input
            type="text"
            name="woreda"
            placeholder="woreda"
            className="w-full p-2 rounded-md bg-transparent border border-gray-600 text-slate-900 dark:text-gray-300"
            onChange={handleFormChange}
          />

          <Input
            type="text"
            name="poBox"
            placeholder="Po Box"
            className="w-full p-2 rounded-md bg-transparent border border-gray-600 text-slate-900 dark:text-gray-300"
            onChange={handleFormChange}
          />
          <div className="flex flex-grow w-full ">
            <Input
              type="text"
              name="address"
              placeholder="address"
              className=" w-full flex flex-grow p-2 rounded-md bg-transparent border border-gray-600 text-slate-900 dark:text-gray-300"
              onChange={handleFormChange}
            />
          </div>
        </div>
        <div className="flex items-center justify-center  w-full py-2">
          <Button color={"#17203F"} bg={"#FAC119"} w={200}  onClick={handleSubmit}>
            {upgradePlanFileMutation.isLoading ? <Spinner size={'sm'}/> : 'Submit'}</Button>
        </div>
      </div>
    </div>
  );
};

export default Information;
