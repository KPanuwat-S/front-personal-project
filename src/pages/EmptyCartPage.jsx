import React from "react";
import Button from "../components/Button";
import { Link, Navigate } from "react-router-dom";

function EmpytCartPage() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <img
        src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-22//w/3024/IMAGE-landscape-fill-9ab89f23-66e2-44af-91b9-e604699f90f6-default_0.jpg?ts=1685551364166"
        alt=""
        className="object-cover w-full h-64"
      />

      <div className="flex items-center justify-center flex-1">
        <div className="max-w-xl px-4 py-8 mx-auto text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
            No Item in Your Cart
          </h1>

          <Link to="/shop">
            {/* <Button primary={true} text="GO TO SHOP" /> */}
            <button className="text-white bg-gray-800 hover:bg-gray-700 ease-in-out duration-300 px-5 py-2 rounded-xl">
              GO TO SHOP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmpytCartPage;
