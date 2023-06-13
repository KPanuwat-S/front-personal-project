import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import CartForm from "../components/CartForm";
import { Link } from "react-router-dom";
function CartOrder() {
  const [price, setPrice] = useState(0);
  const [unit, setUnit] = useState(1);
  const [open, setOpen] = useState(false);
  const productsInCart = useSelector((state) => state.cart.cartProducts);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const calPrice = productsInCart.reduce((acc, el) => {
      acc += el.price * el.quantity;
      return acc;
    }, 0);
    const calQuantity = productsInCart.reduce((acc, el) => {
      acc += el.quantity;
      return acc;
    }, 0);
    setPrice((price) => (price = calPrice));
    setUnit((unit) => (unit = calQuantity));
  }, [productsInCart]);

  return (
    <div className="rounded-lg w-[400px] shadow-[0_0_15px_rgb(0_0_0_/0.2)] flex flex-col gap-10 overflow-hidden ">
      <div className="flex flex-col flex-1 px-10 py-10 gap-5">
        <div className="flex gap-5 items-center">
          <span className="font-bold text-gray-400 flex-1">QUANTITY</span>
          <p className="text-xl font-semibold">{unit}</p>
        </div>
        <hr />
        <div className="flex gap-5 items-center">
          <span className="font-bold text-gray-400 flex-1">TOTAL</span>
          <p className="text-xl font-semibold ">{price}</p>
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
            <Link>
              <button>CONFIRM ORDER</button>
            </Link>
          ) : (
            <Link>
              <button>LOGIN TO ORDER</button>
            </Link>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default CartOrder;
