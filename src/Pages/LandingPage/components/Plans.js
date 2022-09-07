import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BiHelpCircle } from "react-icons/bi";
import { useAuth } from "../../../context/auth";
import { useHomeContext } from "../../../context/HomeContext";
import { planData } from "./Data";
import RegisterModal from "./RegisterModal";
import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Plans = () => {
  const { setPlanId, setIsModalOpen } = useHomeContext();
  const { user, token } = useAuth();
  const navigate = useNavigate()
  //Function
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };
  const profileData = useQuery(
    ["profileDataApi"],
    async () =>
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}profile`, {
        headers,
      }),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: !!token,
      onSuccess: (res) => {
        console.log(res?.data);
      },
    }
  );
  console.log(profileData?.data?.data?.data);


  const handleOpen=()=>{
    window.open('http://sms-dashboard.smsethiopia.com')

  }
  const handleClick = (item) => {
    if (profileData?.data?.data?.data?.company_id && profileData?.data?.data?.data?.company?.approved  === false) {
      navigate('/pending')
    } else if(profileData?.data?.data?.data?.company_id && profileData?.data?.data?.data?.company?.approved  === true){
        window.open('http://sms-dashboard.smsethiopia.com')
    }else  {
      setPlanId(item.planId);
      setIsModalOpen(true);
    }
  };
  function Head() {
    return (
      <Stack textAlign={"center"} alignItems={"center"} spacing={4}>
        <Heading color={"#17203F"}>Choose a plan</Heading>
        <Text w={"75%"} color={"#17203F"}>
          We have diverse payment options, both prepaid and postpaid, you can
          choose a package that fits your need and get started quick!
        </Text>
      </Stack>
    );
  }

  return (
    <div className="">
      <Head />
      <div className="max-w-5xl mx-auto p-3 grid grid-cols-1 items-start justify-start md:grid-cols-2 lg:grid-cols-4 gap-3">
        {planData.slice(0, 1).map((item) => (
          <div
            key={item.id}
            className="bg-[#17203F] relative py-20 flex-grow h-full p-4 rounded-lg flex flex-col items-center justify-center"
          >
            <div className="w-full text-center flex flex-col space-y-2">
              <h1 className="font-normal text-[#E9E9E9] text-xl md:text-2xl">
                {item.header}
              </h1>
              <h2 className="font-bold text-[#E9E9E9] text-xl md:text-3xl">
                {item.type}
              </h2>
              <p className="text-light text-sm text-[#E9E9E9]">
                {item.description}
              </p>
            </div>
            <div className="w-full py-2">
              {item.privilages.map((item) => (
                <div
                  key={item.id}
                  className="flex w-full items-center justify-between border-y-[0.2px] border-[#E9E9E9]/60 py-1 my-2"
                >
                  <p className="text-light text-[13px] text-[#E9E9E9]">
                    {item.title}
                  </p>
                  <BiHelpCircle className="text-[#E9E9E9]" />
                </div>
              ))}
            </div>
            <div className=" md:px-5 absolute bottom-5 w-full">
              <button onClick={handleOpen}
                className="w-full bg-[#F1C22E] p-2 text-white hover:scale-[1.02] duration-300
                 rounded-full hover:shadow-xl"
              >
                {item.btn}
              </button>
            </div>
          </div>
        ))}
        {planData.slice(1, 3).map((item) => (
          <div
            key={item.id}
            className="bg-[#DCE1F1] relative py-20 flex-grow h-full p-4 rounded-lg flex flex-col items-center justify-start"
          >
            <div className="w-full text-center flex flex-col space-y-2">
              <h1 className="font-normal text-[#17203F] text-xl md:text-2xl">
                {item.header}
              </h1>
              <h2 className="font-bold text-[#17203F] text-xl md:text-3xl">
                {item.type}
              </h2>
              <p className="text-light text-sm">{item.description}</p>
            </div>
            <div className="w-full py-2">
              {item.privilages.map((item) => (
                <div
                  key={item.id}
                  className="flex w-full items-center justify-between border-y-[0.2px] border-[#17203F]/60 py-1 my-2"
                >
                  <p className="text-light text-[13px]">{item.title}</p>
                  <BiHelpCircle />
                </div>
              ))}
            </div>
            <div className="w-full px-5 absolute bottom-5  hover:scale-[1.02] duration-300">
              {!user && !token ? (
                <RegisterModal>
                  <button
                    onClick={() => setPlanId(item.planId)}
                    className="w-full bg-[#17203F] p-2 text-white rounded-full"
                  >
                    {item.btn}
                  </button>
                </RegisterModal>
              ) : (
                <button
                  onClick={()=>handleClick(item)}
                  className="w-full bg-[#17203F] p-2 text-white rounded-full"
                >
                  {item.btn}
                </button>
              )}
            </div>
          </div>
        ))}
        {planData.slice(3, 4).map((item) => (
          <div
            key={item.id}
            className="bg-[#DCE1F1] relative py-20 flex-grow h-full p-4 rounded-lg flex flex-col items-center justify-start"
          >
            <div className="w-full text-center flex flex-col space-y-2">
              <h1 className="font-normal text-[#17203F] text-xl md:text-2xl">
                {item.header}
              </h1>
              <h2 className="font-bold text-[#17203F] text-xl md:text-3xl">
                {item.type}
              </h2>
              <p className="text-light text-sm">{item.description}</p>
            </div>
            <div className="w-full py-2">
              {item.privilages.map((item) => (
                <div
                  key={item.id}
                  className="flex w-full items-center justify-between border-y-[0.2px] border-[#17203F]/60 py-1 my-2"
                >
                  <p className="text-light text-[13px]">{item.title}</p>
                  <BiHelpCircle />
                </div>
              ))}
            </div>
            <div className="w-full px-5 absolute bottom-5  hover:scale-[1.02] duration-300">
              <button className="w-full bg-[#17203F] p-2 text-white rounded-full">
                <a href={"tel:+251 9520105"}>{item.btn}</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
