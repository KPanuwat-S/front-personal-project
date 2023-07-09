import React, { useEffect, useState } from "react";
import ProductCard from "../features/productCatalog/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import CartForm from "../components/CartForm";
import CartItem from "../components/CartItem";
import EmpytCartPage from "./EmptyCartPage";
import CartOrder from "./CartOrder";
import {
  removeFromCart,
  fetchCartItemsAsync,
  deleteItemCartAsync,
} from "../features/productCatalog/slice/cartSlice";
import * as localStorageService from "../utils/localStorage";
import Loading from "../components/Loading";

function CartPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cart.loading);
  const [fetch, setFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchCartItemsAsync());
    console.log("set fetch running");
  }, [fetch]);

  const cartState = useSelector((state) => state.cart.cartItems);

  const deleteItemHandler = (id) => {
    dispatch(removeFromCart(id));
    dispatch(deleteItemCartAsync(id));
  };

  const [cartItems, setCartItems] = useState(cartState);
  useEffect(() => {
    if (cartState !== null) setCartItems(cartState);
  }, [cartState]);

  console.log("cartItems", cartItems);
  const displayProduct = cartItems.map((el) => (
    <CartItem
      fetch={fetch}
      setFetch={setFetch}
      data={el}
      deleteItemHandler={deleteItemHandler}
    />
  ));
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const user = useSelector((state) => state.auth.user);

  if (isLoading) return <Loading></Loading>;
  if (user) {
    return displayProduct?.length > 0 ? (
      <div className="flex justify-between gap-20 mt-[120px]">
        <div className="flex-1 flex-col gap-5">
          {cartItems && displayProduct}
        </div>
        <div className="">
          <CartOrder />
        </div>
      </div>
    ) : isLoading ? (
      <Loading></Loading>
    ) : (
      <EmpytCartPage
        linkTo="/shop"
        btnMessage="GO TO SHOP"
        description="No item in your cart"
      />
    );
  }
  return (
    <EmpytCartPage
      linkTo="/authenticate"
      btnMessage="Login"
      description="Login to Get Your Cart"
    />
  );
}

export default CartPage;
