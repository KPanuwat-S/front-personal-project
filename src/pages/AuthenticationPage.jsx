import React from "react";
import PageName from "../components/PageName";
import Input from "../features/auth/components/LoginInput";
import Poster from "../components/Poster";
import Button from "../components/Button";
import AuthenPic from "../assets/authen.jpg";
import { Link, Navigate } from "react-router-dom";
import LoginForm from "../features/auth/components/LoginForm";

function AuthenticationPage() {
  return (
    <div className="flex mt-[120px] gap-20 justify-between">
      <div>
        <PageName text="Log in to Your Account" />
        <LoginForm></LoginForm>

        <Link to="/register">
          <button className="w-full mt-5 rounded-xl px-10 py-2 text-gray-900 bg-white border border-black hover:bg-gray-800 hover:text-white ease-out duration-300">
            CREATE NEW ACCOUNT
          </button>
        </Link>
      </div>
      <div className="w-1/2">
        <Poster src={AuthenPic}></Poster>
      </div>
    </div>
  );
}

export default AuthenticationPage;
