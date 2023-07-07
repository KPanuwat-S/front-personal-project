import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DropDown from "../layout/DropDown";
function AuthenticateIcon() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("authenticate icon");
  return isAuthenticated ? (
    // <Link to="/myProfile">
    <>
      {" "}
      {/* <i class="fa-regular fa-user text-xl" role="button"></i> */}
      <div>
        <DropDown />
      </div>
    </>
  ) : (
    // </Link>
    <Link to="/authenticate">
      <i class="fa-regular fa-user text-xl" role="button"></i>
    </Link>
  );
}

export default AuthenticateIcon;
