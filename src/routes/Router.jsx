import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Header from "../layout/Header";
import BestPricePage from "../pages/BestPricePage";
import WomanPage from "../pages/WomanPage";
import ManPage from "../pages/ManPage";
import NewInPage from "../pages/NewInPage";
import ShopPage from "../pages/ShopPage";

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
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
