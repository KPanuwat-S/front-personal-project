import React, { useEffect } from "react";
import ProductCard from "../features/productCatalog/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import CartForm from "../components/CartForm";
import CartItem from "../components/CartItem";
import EmpytCartPage from "./EmptyCartPage";
import CartOrder from "./CartOrder";

function CartPage() {
  // const dispatch = useDispatch()
  // useEffect(() => {

  // }, [])
  const cartItems = useSelector((state) => state.cart.cartProducts);
  console.log;
  // console.log(
  //   "CartItem",
  //   useSelector((state) => state.cart.cartProducts)
  // );

  const displayProduct = cartItems.map((el) => <CartItem data={el} />);

  return cartItems.length > 0 ? (
    <div className="flex justify-between gap-20 mt-[120px]">
      <div className="flex-1 flex-col gap-5">{cartItems && displayProduct}</div>
      <div className="">
        <CartOrder />
      </div>
    </div>
  ) : (
    <EmpytCartPage />
  );
}

export default CartPage;
