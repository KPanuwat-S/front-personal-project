import React from "react";
import Button from "./Button";
import createSizes from "../utils/createSizes";
import createColor from "../utils/createColor";
import { useDispatch } from "react-redux";
import { addItemToCartAsync } from "../features/productCatalog/slice/cartSlice";

function CartForm({ data, setOpen }) {
  const dispatch = useDispatch();
  const { name, price, size, img, quantity, gender, color } = data;
  console.log(data);
  const dataHandler = (e) => {
    e.preventDefault();
    const newData = { ...itemData, [e.target.name]: e.target.value };
    setItemData(newData);
  };
  const sizeText = createSizes(size);
  const colorVText = createColor(color);
  const style = {
    backgroundColor: colorVText,
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
            <div className="flex gap-2">
              <span className="text-gray-400 font-light">COLOR: </span>{" "}
              {colorStyle}
            </div>
            <div>
              <span className="text-gray-400 font-light">QUANTITY: </span>{" "}
              {quantity}
            </div>
            <div>
              <span className="text-gray-400 font-light">PRIZE: </span>
              {price * quantity}
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
          <Button
            text="ADD TO CART"
            width="px-5"
            onClick={() => {
              setOpen(false);
              dispatch(addItemToCartAsync(data));
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default CartForm;
