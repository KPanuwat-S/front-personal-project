import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "../layout/Header";
import { ManRoute, manRouteChildren } from "./ManRoute";
// import { WomanRoute, womanRouteChildren } from "./WomanRoute";
import { navigationRouteChildren } from "./NavigationRoute";
import NotFound from "../pages/NotFound";
// ManJeans

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: navigationRouteChildren,
    errorElement: <NotFound />,
  },

  {
    path: "/",
    element: <ManRoute />,
    children: manRouteChildren,
  },

  // { path: "/", element: <WomanRoute />, children: womanRouteChildren },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
