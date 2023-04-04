import LandingPage from "./Pages/LandingPage/LandingPage";
import TermsCondition from "./Pages/LandingPage/TermsCondition";
import Pending from "./Pages/LandingPage/Pending";
import Footer from "./Pages/Footer/Footer";
import NavBar from "./Pages/NavBar/NavBar";
import Information from "./Pages/LandingPage/components/Information";
import Docs from "./Pages/LandingPage/Docs";
import { MessengerChat } from "react-messenger-chat-plugin";
import { useAuth } from "./context/auth";
import { useQuery } from "react-query";
import axios from "axios";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
    <>
    <Routes>
    <Route path="*" element={<Navigate to="/home" />} />
    <Route path="/home" element={<LandingPage />} />
    <Route path="/termsCondition" element={<TermsCondition />} />
    <Route path="/pending" element={<Pending />} />
    <Route path="/docs" element={<Docs />} />
      {/* <LandingPage /> */}
    </Routes>
      <MessengerCustomerChat
        pageId="1620237028224966"
        appId="2290456134441224"
      />
    </>
  );
}

export default App;
