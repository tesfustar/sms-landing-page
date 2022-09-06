import LandingPage from "./Pages/LandingPage/LandingPage";
import Footer from "./Pages/Footer/Footer";
import NavBar from "./Pages/NavBar/NavBar";
import Information from "./Pages/LandingPage/components/Information";
import { MessengerChat } from "react-messenger-chat-plugin";
import { useAuth } from "./context/auth";
import { useQuery } from "react-query";
import axios from "axios";
import MessengerCustomerChat from "react-messenger-customer-chat";
function App() {
  const { user, token, logout } = useAuth();
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
      onError: (res) => {
        if (res?.response?.status == 401) {
          logout();
        }
      },
    }
  );

  return (
    <div>
      <LandingPage />
      {/* <MessengerChat
    pageId="1620237028224966"
    language="en_US"
    themeColor={"#000000"}
    bottomSpacing={300}
    loggedInGreeting="loggedInGreeting"
    loggedOutGreeting="loggedOutGreeting"
    greetingDialogDisplay={"show"}
    debugMode={true}
    onMessengerShow={() => {
      console.log("onMessengerShow");
    }}
    onMessengerHide={() => {
      console.log("onMessengerHide");
    }}
    onMessengerDialogShow={() => {
      console.log("onMessengerDialogShow");
    }}
    onMessengerDialogHide={() => {
      console.log("onMessengerDialogHide");
    }}
    onMessengerMounted={() => {
      console.log("onMessengerMounted");
    }}
    onMessengerLoad={() => {
      console.log("onMessengerLoad");
    }}
  />, */}
      <MessengerCustomerChat
        pageId="1620237028224966"
        appId="2290456134441224"
      />
      ,
    </div>
  );
}

export default App;
