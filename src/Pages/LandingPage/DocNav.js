import React from "react";
import Logo from "../../assets/Logo.png";
import RegisterModal from "./components/RegisterModal";
import { useAuth } from "../../context/auth";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const DocNav = () => {

  const { user, token, logout } = useAuth();
  return (
    <header className="bg-[#16213F] p-3">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div>
            <Link to={'/'}>
          <img src={Logo} alt="" />
            </Link>
        </div>
        <div>
          <RegisterModal>
            <button
              onClick={user && token && logout}
              className="bg-[#F1C22E] text-[#16213F]
                p-2 px-5 rounded-md font-medium"
            >
              {user && token ? "Log out" : "Sign In"}
            </button>
          </RegisterModal>
        </div>
      </div>
    </header>
  );
};

export default DocNav;
