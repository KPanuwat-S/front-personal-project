import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddressAsync } from "../features/auth/slice/authSlice";

function UserInformationBox({ text, onClick, children }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="mb-6 mt-3">
      <div className="flex items-center">
        <h2 className="text-l font-bold flex-1 mb-3">{text}</h2>
        <div
          className="flex items-center gap-1 "
          onClick={() => {
            console.log('click');
          }}
          role="button"
        >
          <i class="fa-regular fa-pen-to-square flex-1 text-gray-400"></i>
          <p className="text-ligh text-gray-400 hover:underline">edit</p>
        </div>
      </div>
      <div className="bg-gray-50 w-full rounded-xl">
        <div className="p-7">{children}</div>
      </div>
    </div>
  );
}

export default UserInformationBox;
