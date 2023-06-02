import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Header from "../layout/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
