import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Header from "../layout/Header";
import BestPricePage from "../pages/BestPricePage";
import WomanPage from "../pages/WomanPage";
import ManPage from "../pages/ManPage";
import NewInPage from "../pages/NewInPage";
import ShopPage from "../pages/ShopPage";
import WishListPage from "../pages/WishListPage";
import CartPage from "../pages/CartPage";
import AuthenticationPage from "../pages/AuthenticationPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
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
    ],
  },
  // {
  //   path: "/authenticate",
  //   element: (
  //     <>
  //       <AuthenticationPage />
  //       <Outlet />
  //     </>
  //   ),
  //   children: [{ path: "/register", element: <RegisterPage /> }],
  //   //
  // },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
