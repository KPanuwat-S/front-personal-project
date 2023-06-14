import React, { useState } from "react";
import Button from "./Button";
import createSizes from "../utils/createSizes";
import createColor from "../utils/createColor";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCartAsync,
  addItemToLocalStorage,
} from "../features/productCatalog/slice/cartSlice";
import { Link } from "react-router-dom";
import * as localStorageService from "../utils/localStorage/";

function CartForm({ data, setOpen, linkTo }) {
  console.log(data);
  const dispatch = useDispatch();
  const { name, price, size, img, quantity, gender, color, sumPrice } = data;
  // const [sumPrice, setSumPrie] = useState(price * quantity);
  console.log(data);
  const dataHandler = (e) => {
    e.preventDefault();
    const newData = { ...itemData, [e.target.name]: e.target.value };
    setItemData(newData);
  };
  const sizeText = createSizes(size);
  const colorText = createColor(color);
  const style = {
    backgroundColor: colorText,
  };
  const colorStyle = (
    <div>
      <div className="h-4 w-4 border" style={style}></div>
    </div>
  );

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <img className="w-[150px]" src={img} alt="" />
          <div className="flex flex-col">
            <div className="text-gray-600 mb-5">{name.toUpperCase()}</div>
            <div>
              <span className="text-gray-400 font-light">SIZE: </span>{" "}
              {sizeText}
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-gray-400 font-light">COLOR: </span>{" "}
              {colorStyle}
            </div>
            <div>
              <span className="text-gray-400 font-light">QUANTITY: </span>{" "}
              {quantity}
            </div>
            <div>
              <span className="text-gray-400 font-light">PRIZE: </span>
              {sumPrice}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1"></div>
          {/* <Button
            text="ADD TO CART"
            width="px-5"
            onClick={() => {
              setOpen(false);
              dispatch(addItemToCartAsync(data));
            }}
          ></Button> */}
          {/* dispatch(addItemToCartAsync(data)) */}
          <Link to={linkTo}>
            <button
              onClick={() => {
                setOpen(false);
                dispatch(addItemToCartAsync(data));
                dispatch(addItemToLocalStorage());
                // dispatch(fetchItemCartFromStorage());
              }}
              className="px-5 py-2 rounded-xl text-white bg-gray-800 hover:bg-gray-700 ease-in-out duration-300"
            >
              ADD TO CART
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartForm;
