import { Outlet } from "react-router-dom";
import ManBlazer from "../pages/ManPage/ManBlazer";
import ManJacket from "../pages/ManPage/ManJacket";
import ManJeans from "../pages/ManPage/ManJeans";
import ManShirts from "../pages/ManPage/ManShirts";
import ManShorts from "../pages/ManPage/ManShorts";
import ManTShirts from "../pages/ManPage/ManTShirts";
import ManTrousers from "../pages/ManPage/ManTrousers";
import ManViewAll from "../pages/ManPage/ManViewAll";
import ManPage from "../pages/ManPage";
import Header from "../layout/Header";
export function ManRoute() {
  return (
    <>
      <Header />
      <ManPage />
      <Outlet />
    </>
  );
}

export const manRouteChildren = [
  { path: "manViewAll", element: <ManViewAll /> },
  { path: "manTShirts", element: <ManTShirts /> },
  { path: "manShirts", element: <ManShirts /> },
  { path: "manTrousers", element: <ManTrousers /> },
  { path: "manJeans", element: <ManJeans /> },
  { path: "manShorts", element: <ManShorts /> },
  { path: "manBlazer", element: <ManBlazer /> },
  { path: "manJacket", element: <ManJacket /> },
];
