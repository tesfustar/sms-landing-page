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
  import React, { useState } from "react";
import * as Yup from "yup";
import { useMutation } from "react-query";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useValidPhone from "../../../hooks/useValidPhone";
import { useHomeContext } from "../../../context/HomeContext";
import { useAuth } from "../../../context/auth";
const Login = ({onClose,forgotPassword, setForgotPassword}) => {
    const {login} =useAuth()
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useValidPhone();
    const [showPassword, setShowPassword] = useState(true);
    const toast = useToast();
    const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
    const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      const LoginHandler=()=>{
        if(!phone){
            toast({
                title: "please enter phone number.",
                status: "warning",
                duration: 1800,
                isClosable: true,
              });
              return; 
        }
        if(!password){
            toast({
                title: "please enter password.",
                status: "warning",
                duration: 1800,
                isClosable: true,
              });
              return; 
        }
        LoginSubmitHandler()
      }
      const loginMutation = useMutation(
        async (newData) =>
          await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}user-login`,
            newData,
            {
              headers,
            }
          ),
        {
          retry: false,
        }
      );
    
      const LoginSubmitHandler = async (values) => {
        try {
          loginMutation.mutate(
            { phone: "251".concat(phone), password },
            {
              onSuccess: (responseData) => {
                toast({
                  title: "Success",
                  status: "success",
                  duration: 1800,
                  isClosable: true,
                });
                console.log(
                  "Data: ,",
                  responseData?.data?.data?.token,
                  responseData?.data?.data
                );
                login(responseData?.data?.data?.token, responseData?.data?.data);
                onClose();
              },
              onError: (err) => {
                console.log(err);
                toast({
                  title: "error",
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
    <>
    <VStack>
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
          <Text onClick={()=>setForgotPassword(!forgotPassword)}
          textAlign={"end"} alignSelf={'end'} cursor={'pointer'}
          fontSize={15} fontWeight={'medium'}>Forgot Password ?</Text>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={!showPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
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
          <Button size="md" bg={'#F1C22E'} width={"100%"}  onClick={LoginHandler}>
            {loginMutation.isLoading ? <Spinner size={'sm'}/> : "Sign In"}
          </Button>
    </VStack>
    </>
  )
}

export default Login