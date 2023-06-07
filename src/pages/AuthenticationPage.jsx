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
          <Button
            width="w-full mt-5"
            text="CREATE NEW ACCOUNT"
            primary={false}
            onClick={() => {
              // console.log("Test");
              // return <Link to="/register" />;
            }}
          />
        </Link>
      </div>
      <div className="w-1/2">
        <Poster src={AuthenPic}></Poster>
      </div>
    </div>
  );
}

export default AuthenticationPage;
