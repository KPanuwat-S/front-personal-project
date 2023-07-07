import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// const user = useSelector((state) => state.auth.user);
// const cartItems = useSelector((state) => state.cart.cartProducts);
function SuccessPayment() {
  return (
    <div className="mx-auto w-1/2">
      <section className="rounded-3xl shadow-2xl">
        <div className="p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-500">
            Your order is on the way
          </p>

          <h2 className="mt-6 text-3xl font-bold">
            Thanks for your purchase, we're getting it ready!
          </h2>

          <Link to="/myProfile">
            {" "}
            <a
              className="mt-8 inline-block w-full rounded-full bg-gray-800 py-4 text-sm font-bold text-white shadow-xl"
              href=""
            >
              Track Order
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SuccessPayment;
