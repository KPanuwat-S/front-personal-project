import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import ProductOrder from "./ProductOrder";
import { getOrderAsync } from "../features/productCatalog/slice/cartSlice";

function MyPurchase() {
  const orderItems = useSelector((state) => state.cart.order);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderAsync());
  }, []);
  console.log("orderItems", orderItems);
  const displayProduct = orderItems?.map((el) => <ProductOrder data={el} />);
  return (
    <div>
      <p className="font-bold mb-5 "> My Purchase</p>
      {orderItems.length > 0 ? (
        <div className="mt-5 h-[400px] overflow-y-auto">{displayProduct}</div>
      ) : (
        <div className="flex gap-5 items-center justify-center rounded-xl bg-gray-100 h-[400px]">
          <i class="fa-solid fa-shirt text-gray-400 fa-2xl"></i>
          <p className="text-gray-500 text-center">No order history</p>
        </div>
      )}
    </div>
  );
}

export default MyPurchase;
