import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../features/auth/slice/auth-slice";

export default function Dropdown() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [open, setOpen] = useState(false);
  const dropdownEl = useRef(); //return obj {current: value}
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative" ref={dropdownEl}>
      {/* ref = {current: document.querySelector('.relative')} */}
      <div
        role="button"
        onClick={() => {
          setOpen(!open);
        }}
      ></div>
      {open && (
        <div className="absolute bg-white w-96 right-0 translate-y-1 border rounded-xl shadow-lg p-2">
          <Link
            to="/profile"
            onClick={() => {
              setOpen(false);
            }}
          >
            <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-xl">
              <div>
                <div className="font-semibold">test</div>
                <div className="text-gray-500 text-sm">See your profile</div>
              </div>
            </div>{" "}
          </Link>
          <hr className="border-1 border-gray-300 m-2" />
          <div
            onClick={() => {
              dispatch(logout());
            }}
            role="button"
            className="flex gap-4 items-center p-2 hover:bg-gray-100 rounded-lg"
          >
            <div className="rounded-full bg-gray-300 h-9 w-9 flex items-center justify-center">
              <i class="fa-solid fa-right-from-bracket"></i>
            </div>
            <span className="text-sm font-bold">Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
}
