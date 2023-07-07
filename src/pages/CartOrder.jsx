import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import CartForm from "../components/CartForm";
import { Link } from "react-router-dom";
import * as localStorageService from "../utils/localStorage";
import SuccessPayment from "./ConfirmOrderMal";
import ConfirmOrderModal from "./ConfirmOrderMal";

import {
  calPrice,
  calQuantity,
  removeFromCart,
} from "../features/productCatalog/slice/cartSlice";
import { useLocation } from "react-router-dom";
function CartOrder() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  dispatch(calPrice());
  dispatch(calQuantity());

  const totalPrice = useSelector((state) => state.cart.cartTotalAmount);
  const totalQuantity = useSelector((state) => state.cart.cartTotalQuantity);

  const location = useLocation();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="rounded-lg w-[400px] shadow-[0_0_15px_rgb(0_0_0_/0.2)] flex flex-col gap-10 overflow-hidden ">
      <div className="flex flex-col flex-1 px-10 py-10 gap-5">
        <div className="flex gap-5 items-center">
          <span className="font-bold text-gray-400 flex-1">QUANTITY</span>
          <p className="text-xl font-semibold">{totalQuantity}</p>
        </div>
        <hr />
        <div className="flex gap-5 items-center">
          <span className="font-bold text-gray-400 flex-1">TOTAL</span>
          <p className="text-xl font-semibold ">{totalPrice}</p>
        </div>
        <hr />
      </div>
      <div className="mx-auto mb-5">
        <button
          className="text-white w-[300px] bg-gray-800 hover:bg-gray-700 ease-in-out duration-300 rounded-xl px-10 py-2"
          onClick={() => {
            setOpen(true);
          }}
        >
          CONFIRM ORDER
        </button>
        <Modal
          open={open}
          title="CONFIRM ORDER"
          width={35}
          onClose={() => {
            setOpen(false);
          }}
        >
          {isAuthenticated ? (
            <ConfirmOrderModal
              price={totalPrice}
              unit={totalQuantity}
              onClose={() => {
                setOpen(false);
              }}
            />
          ) : (
            <Link to="/authenticate">
              <div className="text-center">
                <button className="px-5 py-2 rounded-xl text-white bg-gray-800 hover:bg-gray-700 ease-in-out duration-300">
                  LOGIN TO ORDER
                </button>
              </div>
            </Link>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default CartOrder;
