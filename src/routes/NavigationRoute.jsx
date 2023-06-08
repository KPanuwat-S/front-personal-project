import React from "react";
import HomePage from "../pages/HomePage";
import BestPricePage from "../pages/BestPricePage";
import NewInPage from "../pages/NewInPage";
import WomanPage from "../pages/WomanPage";
import ManPage from "../pages/ManPage";
import ShopPage from "../pages/ShopPage";
import WishListPage from "../pages/WishListPage";
import CartPage from "../pages/CartPage";
import AuthenticationPage from "../pages/AuthenticationPage";
import RegisterPage from "../pages/RegisterPage";
import ProductDetail from "../pages/ProductDetail";

export const navigationRouteChildren = [
  { path: "/", element: <HomePage /> },
  { path: "/bestPrice", element: <BestPricePage /> },
  { path: "/newIn", element: <NewInPage /> },
  { path: "/woman", element: <WomanPage /> },
  { path: "/man", element: <ManPage /> },
  { path: "/shop", element: <ShopPage /> },
  { path: "/wishList", element: <WishListPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/authenticate", element: <AuthenticationPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/products/:id", element: <ProductDetail /> },
];
