import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "../layout/Header";
import { ManRoute, manRouteChildren } from "./ManRoute";
import NotFound from "../pages/NotFound";

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
import MyProfilePage from "../pages/MyProfilePage";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import RedirectRoute from "./RedirectRoute";
import EmpytCartPage from "../pages/EmptyCartPage";
// import SuccessPayment from "../pages/SuccessPayment";
import ProtectedRoute from "./ProtectedRoute";
import AddressForm from "../features/register/components/AddressForm";
import SuccessPayment from "../pages/SuccessPayment";

// ManJeans
function Router() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthentcated);
  console.log(isAuthenticated);
  const router = createBrowserRouter([
    {
      path: "/authenticate",
      element: (
        <RedirectRoute>
          <Header />
          <AuthenticationPage />
        </RedirectRoute>
      ),
    },
    {
      path: "/myProfile",
      element: (
        <ProtectedRoute>
          <Header />
          <MyProfilePage></MyProfilePage>
        </ProtectedRoute>
      ),
    },
    {
      path: "/",
      element: (
        // <RedirectRoute>
        <>
          <Header />
          <Outlet />
        </>
        // </RedirectRoute>
      ),
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/bestPrice", element: <BestPricePage /> },
        { path: "/newIn", element: <NewInPage /> },
        { path: "/woman", element: <WomanPage /> },
        { path: "/man", element: <ManPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/shop", element: <ShopPage /> },
        { path: "/wishList", element: <WishListPage /> },
        // { path: "/cart", element: <CartPage /> },
        { path: "/authenticate", element: <AuthenticationPage /> },
        { path: "/myProfile", element: <MyProfilePage /> },
        { path: "/successPayment", element: <SuccessPayment /> },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        { path: "/addressPage", element: <AddressForm /> },
        { path: "/emptyCart", element: <EmpytCartPage /> },
        { path: "/products/:id", element: <ProductDetail /> },
      ],
      errorElement: <NotFound />,
    },

    {
      path: "/",
      element: <ManRoute />,
      children: manRouteChildren,
    },
    // {
    //   path: "/",
    //   element: (
    //     <>
    //       {" "}
    //       <Header />
    //       <CartPage />
    //       <Outlet />
    //     </>
    //   ),
    //   children: [
    //     { path: "/emptyCart", element: <EmpytCartPage /> },
    //     { path: "/shop", element: <ShopPage /> },
    //   ],
    // },
    // {
    //   path: "/myProfile",
    //   element: (
    //     <ProtectedRoute>
    //       <MyProfilePage />
    //     </ProtectedRoute>
    //   ),
    // },

    // { path: "/", element: <WomanRoute />, children: womanRouteChildren },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
