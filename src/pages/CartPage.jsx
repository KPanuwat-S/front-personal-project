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
  removeFromCart,
} from "../features/productCatalog/slice/cartSlice";
import * as localStorageService from "../utils/localStorage";

function CartPage() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartProducts);
  // const cartItems = localStorageService.getCartItems();
  console.log("cart items", cartItems);
  const deleteItemHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const displayProduct = cartItems?.map((el) => (
    <CartItem data={el} deleteItemHandler={deleteItemHandler} />
  ));

  const user = useSelector((state) => state.auth.user);
  if (user)
    return displayProduct?.length > 0 ? (
      <div className="flex justify-between gap-20 mt-[120px]">
        <div className="flex-1 flex-col gap-5">
          {cartItems && displayProduct}
        </div>
        <div className="">
          <CartOrder />
        </div>
      </div>
    ) : (
      <EmpytCartPage
        linkTo="/shop"
        btnMessage="GO TO SHOP"
        description="No item in your cart"
      />
    );
  return (
    <EmpytCartPage
      linkTo="/authenticate"
      btnMessage="Login"
      description="Login to Get Your Cart"
    />
  );
}

export default CartPage;
