import React, { useEffect, useState } from "react";
import PageName from "../components/PageName";
import { useSelector } from "react-redux";
import UserInformationBox from "../components/UserInformationBox";
import { getAccessToken } from "../utils/localStorage";

function MyProfilePage() {
  const user = useSelector((state) => state.auth.user);
  const name = user.firstName + " " + user.lastName;

  return (
    <div className="mt-[120px] ">
      <PageName text="My Profile" />
      <p className="mt-4 text-gray-400 font-bold text-xl">{user.firstName}</p>
      <div className="flex justtify-between items-start gap-[60px] mt-10">
        <div className="flex-1">
          <UserInformationBox text="General Information">
            <div className="flex flex-col gap-5">
              <p className="flex gap-5">
                <span className="font-semibold text-gray-700">Name</span> {name}
              </p>
              <p className="flex gap-5">
                <span className="font-semibold text-gray-700">Email</span>{" "}
                {user.email}
              </p>
              <p className="flex gap-5">
                <span className="font-semibold text-gray-700">
                  Phone Number
                </span>{" "}
                {user.phoneNumber}
              </p>
            </div>
          </UserInformationBox>
          <UserInformationBox text="Address Information" />
          <UserInformationBox text="Payment Information" />
        </div>
        <div className="flex-1">
          <h2 className="text-l font-semibold">My Purchase</h2>
        </div>
      </div>
    </div>
  );
}

export default MyProfilePage;
