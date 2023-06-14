import React, { useEffect, useState } from "react";
import ProductCard from "../features/productCatalog/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import CartForm from "../components/CartForm";
import CartItem from "../components/CartItem";
import EmpytCartPage from "./EmptyCartPage";
import CartOrder from "./CartOrder";
import {
  fetchItemCartFromStorage,
  addItemToLocalStorage,
  addItemToCartAsync,
  deleteItemCart,
  deleteItemFromStorage,
} from "../features/productCatalog/slice/cartSlice";
import * as localStorageService from "../utils/localStorage";

function CartPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItemCartFromStorage());
  }, [localStorage.getItem("cartItems")]);

  const deleteItemHandler = (id) => {

    dispatch(deleteItemCart(id));
    dispatch(deleteItemFromStorage(id));
  };
  let cartItems = useSelector((state) => state.cart.cartProducts);
  const displayProduct = cartItems?.map((el) => (
    <CartItem data={el} deleteItemHandler={deleteItemHandler} />
  ));
  return displayProduct?.length > 0 ? (
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
