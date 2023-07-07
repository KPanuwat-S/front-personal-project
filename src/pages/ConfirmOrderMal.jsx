import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { confirmCart } from "../features/productCatalog/slice/cartSlice";

function ConfirmOrderModal({ price, unit, onClose }) {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const confirmHandler = () => {
    onClose();
    dispatch(confirmCart());
  };

  return (
    <div className="">
      <div className="">
        <p className="text-center"></p>
        <p>
          <span className="font-bold text-gray-500">ITEMS ORDERED: </span>
          {unit}
        </p>
        <p>
          <span className="font-bold text-gray-500">TOTAL PRICED:</span> {price}
        </p>
        <div className="text-center mt-10">
          {" "}
          <Link to="/successPayment">
            {" "}
            <button
              className="text-white w-[150px] bg-gray-800 hover:bg-gray-700 ease-in-out duration-300 rounded-xl px-10 py-2"
              onClick={confirmHandler}
            >
              CONFIRM
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ConfirmOrderModal;
