import LandingPage from "./Pages/LandingPage/LandingPage";
import Footer from "./Pages/Footer/Footer";
import NavBar from "./Pages/NavBar/NavBar";
import Information from "./Pages/LandingPage/components/Information";
import { MessengerChat } from "react-messenger-chat-plugin";
function App() {
  return (
    <div>
      {/* <LandingPage /> */}
      <h1>helo</h1>
      <MessengerChat
    pageId="1620237028224966"
    language="sv_SE"
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
  />,
    </div>
  );
}

export default App;
