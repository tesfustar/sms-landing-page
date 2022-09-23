import React from "react";
import register from "../../assets/regester.svg";
import {
  CopyBlock,
  dracula,
  tomorrowNight,
  tomorrowNightBlue,
} from "react-code-blocks";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DocNav from "./DocNav";
import RegisterModal from "./components/RegisterModal";
import { useAuth } from "../../context/auth";
const Docs = () => {
  const { user, token, logout } = useAuth();
  return (
    <>
      <DocNav />
      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="font-medium text-2xl text-[#16213F]">Sending an SMS</h1>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          <div className="flex flex-col items-start space-y-2">
            <h1 className="font-semibold text-2xl text-[#16213F]">
              <span className="text-[#F1C22E]">Step 1 : </span>Setting Up
            </h1>
            <p className="text-[#16213F] font-medium ">Create an account</p>
            <p className="text-[#16213F] text-sm text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{" "}
            </p>
            {!user && !token && (
              <RegisterModal>
                <button
                  className="w-fit px-10 bg-[#F1C22E] p-2 text-white hover:scale-[1.02] duration-300
            rounded-full hover:shadow-xl"
                >
                  Sign In
                </button>
              </RegisterModal>
            )}
          </div>
          {/* second grid */}
          <div>
            <img src={register} alt="" className="" />
          </div>
        </div>

        {/* step two */}
        <div className="max-w-5xl mx-auto pt-10 grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          <div className="flex flex-col items-start space-y-2">
            <h1 className="font-semibold text-2xl text-[#16213F]">
              <span className="text-[#F1C22E]">Step 2 : </span> Sending Message
            </h1>
            <p className="text-[#16213F] font-medium ">Bulk SMS</p>
            <p className="text-[#16213F] text-sm text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{" "}
            </p>
          </div>
          {/* second grid */}
          <div className="bg-[#16213F] p-3 rounded-md">
            <h1 className="font-medium text-white">Bulk SMS</h1>
            <Tabs variant="enclosed">
              <TabList>
                <Tab color={"white"}>PHP</Tab>
                <Tab color={"white"}>NODE.JS</Tab>
                <Tab color={"white"}>JAVA</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <CopyBlock
                    language="php"
                    text={`// request headers
          {
            "Authorization" : "Bearer {token}",
              "username" : "your-username,
              "password" : "your-password",
            }
          
            // request body
          {
              "content" : "this is test api bulk message",
              "phone" : [
                  2519********,
                  2519********,
              ]
            }`}
                    codeBlock
                    theme={tomorrowNightBlue}
                    showLineNumbers={true}
                  />
                </TabPanel>
                <TabPanel>
                  <p>NODE.JS!</p>
                </TabPanel>
                <TabPanel>
                  <p>java!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
        {/* step -3 */}
        <div className="max-w-5xl mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          <div className="bg-[#16213F] p-3 rounded-md">
            <h1 className="font-medium text-white">OTP</h1>
            <Tabs variant="enclosed">
              <TabList>
                <Tab color={"white"}>PHP</Tab>
                <Tab color={"white"}>NODE.JS</Tab>
                <Tab color={"white"}>JAVA</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <CopyBlock
                    language="php"
                    text={`// request headers
                  // request headers
{
  "Authorization" : "Bearer {token}",
  "password" : "your-password",
  "username" : "your-username,
}

// request body - otp
{
  "content" : "this is test api bulk message",
  "phone" :
  2519********,
  
}`}
                    codeBlock
                    theme={tomorrowNightBlue}
                    showLineNumbers={true}
                  />
                </TabPanel>
                <TabPanel>
                  <p>NODE.JS!</p>
                </TabPanel>
                <TabPanel>
                  <p>java!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
          {/* second grid */}
          <div className="flex flex-col items-start space-y-2">
            <p className="text-[#16213F] font-medium text-2xl">OTP</p>
            <p className="text-[#16213F] text-sm text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{" "}
            </p>
          </div>
        </div>
        {/* Smart sms */}
        <div className="max-w-5xl mx-auto pt-10 grid grid-cols-1  gap-3 items-center">
          <div className="flex flex-col items-start space-y-2">
            <p className="text-[#16213F] font-medium text-2xl">Smart SMS</p>
            <p className="text-[#16213F] text-sm text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{" "}
            </p>
          </div>
          {/* second grid */}
          <div className="bg-[#16213F] p-3 rounded-md">
            <h1 className="font-medium text-white ">Smart SMS</h1>
            <Tabs variant="enclosed">
              <TabList>
                <Tab color={"white"}>PHP</Tab>
                <Tab color={"white"}>NODE.JS</Tab>
                <Tab color={"white"}>JAVA</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <CopyBlock
                    language="php"
                    text={`// request headers
                  // request headers
                  {
                    "Authorization" : "Bearer {token}",
                    "username" : "your-username,
                    "password" : "your-password",
                  }
                  
// request body - otp
{
  "content" : "this is test api bulk message",
  "phone" :
  2519********,
 
}`}
                    codeBlock
                    theme={tomorrowNightBlue}
                    showLineNumbers={true}
                  />
                </TabPanel>
                <TabPanel>
                  <p>NODE.JS!</p>
                </TabPanel>
                <TabPanel>
                  <p>java!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Docs;
