import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/slice/authSlice";
export default function Dropdown() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  console.log();
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
    <div className="relative z-50" ref={dropdownEl}>
      {/* ref = {current: document.querySelector('.relative')} */}
      <div
        role="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <i class="fa-regular fa-user text-xl" role="button"></i>

        {open && (
          <div className="absolute bg-white w-60 right-0 translate-y-1 border rounded-xl shadow-lg p-2">
            <Link to="/myProfile">
              {" "}
              <div className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-xl">
                <div className="flex gap-2">
                  <i class="fa-regular fa-user text-gray-500"></i>
                  <div className="text-gray-700 text-sm">My profile</div>
                </div>
              </div>
            </Link>

            <hr className="border-1 border-gray-300 m-2" />
            {/* <Link to="/authenticate"> */}
            {/* <Navigate to="/authenticate"> */}
            <div
              className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded-xl"
              onClick={() => {
                // navigate("/authenticate");
                dispatch(logout());
              }}
            >
              <div className="flex gap-2">
                <i class="fa-solid fa-arrow-right-from-bracket text-gray-500"></i>
                <div className="text-gray-700 text-sm">Log Out</div>
              </div>
            </div>
            {/* </Navigate> */}
            {/* </Link> */}
            {/* </Link> */}
            {/* <div
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
          </div> */}
          </div>
        )}
      </div>
    </div>
  );
}
