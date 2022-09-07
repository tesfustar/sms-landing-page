import {
  Button,
  HStack,
  Input,
  Select,
  useToast,
  VStack,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Checkbox,
  FormErrorMessage,
  Text,
  FormControl,
  Spinner,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import React, { useState ,useEffect} from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useValidPhone from "../../../hooks/useValidPhone";
import { useHomeContext } from "../../../context/HomeContext";
import { useAuth } from "../../../context/auth";
import { useNavigate } from "react-router-dom";
const Register = ({ onClose }) => {
  const navigate=useNavigate()
  const { isModalOpen, setIsModalOpen } = useHomeContext();
  const { login } = useAuth();
  const [phone, setPhone] = useValidPhone();
  const [showPassword, setShowPassword] = useState(true);
  const [isAgreed, setIsAgreed] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [Code, setCode] = useState("");
  const [hasPhone, sethasPhone] = useState(false);
  const toast = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  //functions
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
    useEffect(() => {
      if ([...Code].length == 6) {
        otpMutationSubmitHandler();
      }
    }, [Code]);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const LoginHandler = () => {
    if (!hasPhone) {
      if (!phone) {
        toast({
          title: "Please Enter you phonenumber.",
          status: "warning",
          duration: 1800,
          isClosable: true,
        });
        return;
      }
      if (
        formData.firstName == "" ||
        formData.lastName == "" ||
        formData.password == ""
      ) {
        toast({
          title: "Please fill the fields.",
          status: "warning",
          duration: 1800,
          isClosable: true,
        });
        return;
      }
      if (formData.password.length < 6) {
        toast({
          title: "password should be at least 6 character.",
          status: "warning",
          duration: 1800,
          isClosable: true,
        });
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "password don't match.",
          status: "warning",
          duration: 1800,
          isClosable: true,
        });
        return;
      }
      if (!isAgreed) {
        toast({
          title: "Please Agree with the terms.",
          status: "warning",
          duration: 1800,
          isClosable: true,
        });
        return;
      }

      subscriberLoginSubmitHandler();
    } else {
      otpMutationSubmitHandler();
    }
  };
  const loginMutation = useMutation(
    async (newData) =>
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}company/sign-up`,
        newData,
        {
          headers,
        }
      ),
    {
      retry: false,
    }
  );

  const subscriberLoginSubmitHandler = async (values) => {
    try {
      loginMutation.mutate(
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: "251".concat(phone),
          password: formData.password,
          password_confirmation: formData.confirmPassword,
        },
        {
          onSuccess: (responseData) => {
            toast({
              title: "Success",
              status: "success",
              duration: 1800,
              isClosable: true,
            });
            sethasPhone(true);
            console.log(
              "Data: ,",
              responseData?.data?.data?.token,
              responseData?.data?.data
            );
          },
          onError: (err) => {
            console.log(err);
            toast({
              title: "Subscribe",
              description: loginMutation?.error?.response?.data?.message,
              status: "error",
              duration: 1800,
              isClosable: true,
            });
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const otpMutation = useMutation(
    async (newData) =>
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}verify-otp`,
        newData,
        {
          headers,
        }
      ),
    {
      retry: false,
    }
  );

  const otpMutationSubmitHandler = async (values) => {
    try {
      otpMutation.mutate(
        {
          phone: "251".concat(phone),
          otp: Code,
          type: "user",
        },
        {
          onSuccess: (responseData) => {
            toast({
              title: "successful",
              description: "regestration complete",
              status: "info",
              duration: 2500,
              isClosable: true,
            });
            login(responseData?.data?.data?.token, responseData?.data?.data);
            onClose();
          },
          onError: (err) => {
            console.log(err);
            toast({
              title: "Subscribe",
              description: loginMutation?.error?.response?.data?.message,
              status: "error",
              duration: 1800,
              isClosable: true,
            });
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <VStack>
      {!hasPhone ? (
        <VStack alignItems={"flex-start"}>
          <InputGroup>
            <InputLeftAddon children="+251" fontWeight={"medium"} />
            <Input
              type="tel"
              placeholder="900-00-00"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </InputGroup>
          <HStack>
            <Input
              type="text"
              placeholder="first Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="lasr Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </HStack>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={!showPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                {showPassword ? (
                  <AiFillEyeInvisible size={22} color="#0891b2" />
                ) : (
                  <AiFillEye size={22} color="#0891b2" />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={!showConfirmPassword ? "text" : "password"}
              placeholder="confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowConfirmPassword}>
                {showConfirmPassword ? (
                  <AiFillEyeInvisible size={22} color="#0891b2" />
                ) : (
                  <AiFillEye size={22} color="#0891b2" />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
          <HStack>
            <Checkbox
              name="agree"
              isChecked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
            />
            <Text fontSize={15} cursor={'pointer'} fontWeight={"medium"} onClick={()=>navigate('/termsCondition')}>
              {" "}
              I agree with privacy policy & terms
            </Text>
          </HStack>
          <Button
            size="md"
            bg={"#F1C22E"}
            width={"100%"}
            onClick={LoginHandler}
          >
            {loginMutation.isLoading ? <Spinner size={"sm"} /> : "Sign Up"}
          </Button>
        </VStack>
      ) : (
        <VStack w={'100%'}>
          <HStack>
            <PinInput placeholder="" value={Code} onChange={(e) => setCode(e)}>
              <PinInputField bg={"white"} />
              <PinInputField bg={"white"} />
              <PinInputField bg={"white"} />
              <PinInputField bg={"white"} />
              <PinInputField bg={"white"} />
              <PinInputField bg={"white"} />
            </PinInput>
          </HStack>
          <Button
            size="md"
            bg={'#F1C22E'} width={"100%"}
            type="submit"
            onClick={LoginHandler}
          >
            {otpMutation.isLoading ? <Spinner size={"sm"} /> : "Verify"}
          </Button>
        </VStack>
      )}
    </VStack>
  );
};

export default Register;
