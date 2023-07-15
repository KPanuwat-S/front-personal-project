import React, { useEffect, useState } from "react";
import PageName from "../components/PageName";
import { useDispatch, useSelector } from "react-redux";
import UserInformationBox from "../components/UserInformationBox";
import { getAccessToken } from "../utils/localStorage";
import { toast } from "react-toastify";
import MyPurchase from "../components/MyPurchase";
import { getAddressAsync } from "../features/auth/slice/authSlice";
// MyPurchase
function MyProfilePage() {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const name = user.firstName + " " + user.lastName;
  const dispatch = useDispatch();
  const [isEditUser, setIsEditUser] = useState(false);
  const [isEditAddress, setIsEditAddress] = useState(false);
  useEffect(() => {
    dispatch(getAddressAsync());
  }, []);
  const address = useSelector((state) => state.auth.address);
  return (
    <div className="mt-[120px] ">
      <PageName text="My Profile" />
      <p className="mt-4 text-gray-400 font-bold text-xl">
        {user.firstName} {user.lastName}
      </p>
      <div className="flex justtify-between items-start gap-[60px] mt-10">
        <div className="flex-1">
          <div className="mb-6 mt-3">
            <div className="flex items-center">
              <h2 className="text-l font-bold flex-1 mb-3">
                General Information
              </h2>
              <div
                className="flex items-center gap-1 "
                onClick={() => {
                  setIsEditUser(true);
                }}
                role="button"
              >
                <i class="fa-regular fa-pen-to-square flex-1 text-gray-400"></i>
                <p className="text-ligh text-gray-400 hover:underline">edit</p>
              </div>
            </div>
            <div className="bg-gray-50 w-full rounded-xl">
              <div className="p-7">
                {" "}
                <div className="flex flex-col gap-5">
                  <p className="flex gap-5">
                    <span className="font-semibold text-gray-700">Name</span>{" "}
                    {name}
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
              </div>
            </div>
          </div>

          <div className="mb-6 mt-3">
            <div className="flex items-center">
              <h2 className="text-l font-bold flex-1 mb-3">
                Address Information
              </h2>
              <div
                className="flex items-center gap-1 "
                onClick={() => {
                  setIsEditAddress(true);
                  console.log("edit address");
                }}
                role="button"
              >
                <i class="fa-regular fa-pen-to-square flex-1Address Informationgray-400"></i>
                <p className="text-ligh text-gray-400 hover:underline">edit</p>
              </div>
            </div>
            <div className="bg-gray-50 w-full rounded-xl">
              <div className="p-7">
                {" "}
                <div className="flex gap-5 items-center">
                  <p className="font-semibold">Province</p>
                  <p className="">{address?.province}</p>
                </div>
                <div className="flex gap-5 items-center">
                  <p className="font-semibold">City</p>
                  <p>{address?.city}</p>
                </div>
                <div className="flex gap-5 items-center">
                  <p className="font-semibold">District</p>
                  <p> {address?.district}</p>
                </div>
                <div className="flex gap-5 items-center">
                  <p className="font-semibold">ZIP Code</p>
                  <p>{address?.zipCode}</p>
                </div>
                <div className="flex gap-5 items-center">
                  <p className="font-semibold">Address Line:</p>
                  <p>{address?.addressLine}</p>
                </div>
              </div>
            </div>
          </div>

          {/* <UserInformationBox text="Payment Information" /> */}
        </div>
        <div className="flex-1">
          <MyPurchase></MyPurchase>
        </div>
      </div>
    </div>
  );
}

export default MyProfilePage;
