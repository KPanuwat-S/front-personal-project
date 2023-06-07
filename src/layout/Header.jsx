import { Link, NavLink, Navigate } from "react-router-dom";
import Search from "../components/Search";

function Header() {
  return (
    <div className="flex justify-between items-center mt-4 mb-4 w-[1280px] m-auto">
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
          <svg
            viewBox="0 0 1024 1024"
            fill="#000000"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            stroke-width="45.056"
            className="w-5"
            role="button"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M800.8 952c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56z m-448 0c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56zM344 792c-42.4 0-79.2-33.6-84-76l-54.4-382.4-31.2-178.4c-2.4-19.2-19.2-35.2-37.6-35.2H96c-13.6 0-24-10.4-24-24s10.4-24 24-24h40.8c42.4 0 80 33.6 85.6 76l31.2 178.4 54.4 383.2C309.6 728 326.4 744 344 744h520c13.6 0 24 10.4 24 24s-10.4 24-24 24H344z m40-128c-12.8 0-23.2-9.6-24-22.4-0.8-6.4 1.6-12.8 5.6-17.6s10.4-8 16-8l434.4-32c19.2 0 36-15.2 38.4-33.6l50.4-288c1.6-13.6-2.4-28-10.4-36.8-5.6-6.4-12.8-9.6-21.6-9.6H320c-13.6 0-24-10.4-24-24s10.4-24 24-24h554.4c22.4 0 42.4 9.6 57.6 25.6 16.8 19.2 24.8 47.2 21.6 75.2l-50.4 288c-4.8 41.6-42.4 74.4-84 74.4l-432 32c-1.6 0.8-2.4 0.8-3.2 0.8z"
                fill=""
              ></path>
            </g>
          </svg>
        </Link>
        <Link to="/authenticate">
          {" "}
          <i class="fa-regular fa-user text-xl" role="button"></i>
        </Link>
      </div>
    </div>
  );
}

export default Header;
