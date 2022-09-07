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
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useMutation } from "react-query";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useValidPhone from "../../../hooks/useValidPhone";
import { useHomeContext } from "../../../context/HomeContext";
import { useAuth } from "../../../context/auth";
const ForgotPassword = ({setForgotPassword}) => {
  const [phone, setPhone, PhoneError] = useValidPhone();
  const [hasPhone, sethasPhone] = useState(false);
  const [hasCode, sethasCode] = useState(false);
  const [code, setCode] = useState("");
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmpassword, setConfirmpassword] = useState("");
  useEffect(() => {
    if ([...code].length == 6) {
      otpForgotSubmitHandler();
    }
  }, [code]);

  const handlShowPasword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handlShowConfirmPasword = () => {
    setShowConfirmPassword((prevConfirmpassword) => !prevConfirmpassword);
  };
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const forgotPasswordHandler = () => {
    if (!hasPhone) {
      if (!phone) {
        toast({
          title: "please enter phone number.",
          status: "warning",
          duration: 1800,
          isClosable: true,
        });
        return;
      }

      otpMutationSubmitHandler();
    } else {
      if (!hasCode) {
        if ([...code].length != 6) {
          toast({
            title: "Verification Code must 6 digits",
            status: "warning",
            duration: 1800,
            isClosable: true,
          });
          return;
        }

        otpForgotSubmitHandler();
      } else {
        if (!password || !confirmpassword) {
          toast({
            title: "please insert password.",
            status: "warning",
            duration: 1800,
            isClosable: true,
          });
          return;
        }
        if (password !== confirmpassword) {
          toast({
            title: "password does not match",
            status: "warning",
            duration: 1800,
            isClosable: true,
          });
          return;
        }
        changePasswordSubmitHandler();
      }
    }
  };
  const forgotPasswordMutation = useMutation(
    async (newData) =>
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}forgot-password`,
        newData,
        {
          headers,
        }
      ),
    {
      retry: false,
    }
  );

  const otpMutationSubmitHandler = async () => {
    try {
      forgotPasswordMutation.mutate(
        { phone: "251".concat(phone), type: "user" },
        {
          onSuccess: (responseData) => {
            sethasPhone(true);
            // console.log(responseData);
            toast({
              title: "otp is send to your phone",
              status: "success",
              duration: 1800,
              isClosable: true,
            });
          },
          onError: (err) => {
            console.log(err);
            toast({
              title: "error",
              description:
                forgotPasswordMutation?.error?.response?.data?.message,
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

  const forgotOtpMutation = useMutation(
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
  const otpForgotSubmitHandler = async () => {
    try {
      forgotOtpMutation.mutate(
        {
          phone: "251".concat(phone),
          otp: code,
          type: "user",
        },
        {
          onSuccess: (responseData) => {
            // console.log(responseData);
            sethasCode(true);
            toast({
              title: "success",
              status: "success",
              duration: 1800,
              isClosable: true,
            });
          },
          onError: (err) => {
            console.log(err);
            toast({
              title: "error",
              description: forgotOtpMutation?.error?.response?.data?.message,
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
  const changePasswordMutation = useMutation(
    async (newData) =>
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}new-password`,
        newData,
        {
          headers,
        }
      ),
    {
      retry: false,
    }
  );
  const changePasswordSubmitHandler = async () => {
    try {
      changePasswordMutation.mutate(
        {
          phone: "251".concat(phone),
          password: password,
          password_confirmation: confirmpassword,
          type: "user",
        },
        {
          onSuccess: (responseData) => {
            // console.log(responseData);
            setForgotPassword(false)
            toast({
              title: "password has been succssfully changed",
              status: "success",
              duration: 1800,
              isClosable: true,
            });
            
          },
          onError: (err) => {
            console.log(changePasswordMutation?.error?.response?.data?.message);
            toast({
              title: "error",
              description:
                changePasswordMutation?.error?.response?.data?.message,
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

  function Header() {
    return (
      <>
        {!hasPhone ? (
          <h1 className="font-medium text-[#16213F] text-center">
            Enter your email and we'll send you instructions to reset your
            password
          </h1>
        ) : hasCode ? (
          <h1 className="font-medium text-[#16213F] text-center">
            Enter Your New Password
          </h1>
        ) : (
          <h1 className="font-medium text-[#16213F] text-center">
            Enter the OTP code that we have sent to you.
          </h1>
        )}
      </>
    );
  }
  return (
    <VStack width={"100%"}>
      {Header()}
      {/* input part */}
      {!hasPhone ? (
        <VStack width={"100%"}>
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
          <Button bg={"#F1C22E"} width={"100%"} onClick={forgotPasswordHandler}>
            {forgotPasswordMutation.isLoading ? (
              <Spinner size={"sm"} />
            ) : (
              "Send"
            )}
          </Button>
        </VStack>
      ) : !hasCode ? (
        <VStack width={"100%"}>
          <HStack>
            <PinInput placeholder="" value={code} onChange={(e) => setCode(e)}>
              <PinInputField bg={"white"} />
              <PinInputField bg={"white"} />
              <PinInputField bg={"white"} />
              <PinInputField bg={"white"} />
              <PinInputField bg={"white"} />
              <PinInputField bg={"white"} />
            </PinInput>
          </HStack>
          <Button bg={"#F1C22E"} width={"100%"} onClick={forgotPasswordHandler}>
            {forgotPasswordMutation.isLoading ? (
              <Spinner size={"sm"} />
            ) : (
              "Verify"
            )}
          </Button>
        </VStack>
      ) : (
        <VStack width={"100%"}>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={!showPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handlShowPasword}>
                {showPassword ? (
                  <AiFillEyeInvisible size={22} color="#0891b2" />
                ) : (
                  <AiFillEye size={22} color="#0891b2" />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
          {/* confirmpassword */}
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={!showConfirmPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              value={confirmpassword}
              onChange={(e)=>setConfirmpassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handlShowConfirmPasword}>
                {showConfirmPassword ? (
                  <AiFillEyeInvisible size={22} color="#0891b2" />
                ) : (
                  <AiFillEye size={22} color="#0891b2" />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button bg={"#F1C22E"} width={"100%"} onClick={forgotPasswordHandler}>
            {changePasswordMutation.isLoading ? (
              <Spinner size={"sm"} />
            ) : (
              "Verify"
            )}
          </Button>
        </VStack>
      )}
    </VStack>
  );
};

export default ForgotPassword;
