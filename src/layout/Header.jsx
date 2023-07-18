import { Link, NavLink, Navigate } from "react-router-dom";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import DropDown from "./DropDown";
import CartIcon from "../components/CartIcon";
import AuthenticateIcon from "../components/AuthenticateIcon";

function Header() {
  // const hasItems = useSelector((state) => state.cart.hasItems);
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="flex justify-between items-center p-3 w-[1280px] m-auto sticky top-0 z-50 bg-white  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 ">
      <div className="flex-1">
        <NavLink to="/">
          <h1 className="font-bold text-3xl">UrbanChic.</h1>
        </NavLink>
      </div>
      <div className="flex gap-10 font-light ">
        <NavLink to="/bestPrice">BEST PRICE</NavLink>
        <NavLink to="/newIn">NEW IN</NavLink>
        <NavLink to="/woman">WOMAN</NavLink>
        <NavLink to="/man">MAN</NavLink>
        <NavLink to="/shop">SHOP</NavLink>
      </div>

      <div className="flex items-center justify-center flex-1">
        <Search />
      </div>
      <div className="flex gap-3 items-center justify-center">
        <Link to="/wishList">
          <i class="fa-regular fa-heart text-xl" role="button"></i>
        </Link>
        <Link to="/cart">
          <CartIcon />
        </Link>

        <AuthenticateIcon />
      </div>
    </div>
  );
}

export default Header;
