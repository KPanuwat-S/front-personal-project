import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import ProductOrder from "./ProductOrder";

function MyPurchase() {
  const cartItems = useSelector((state) => state.cart.orderProducts);
  console.log(cartItems);
  console.log("cart items", cartItems);
  const displayProduct = cartItems?.map((el) => <ProductOrder data={el} />);
  return (
    <div>
      <p className="font-bold"> MyPurchase</p>
      <div className="mt-5">{displayProduct}</div>
    </div>
  );
}

export default MyPurchase;
