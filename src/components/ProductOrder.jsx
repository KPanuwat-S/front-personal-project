import React, { useState } from "react";
import Button from "./Button";
import createSizes from "../utils/createSizes";
import createColor from "../utils/createColor";
import { useDispatch } from "react-redux";
import { addItemToCartAsync } from "../features/productCatalog/slice/cartSlice";
import QuantityInput from "./QuantityInput";
import Modal from "./Modal";
import CartEditItem from "./CartEditItem";

function ProductOrder({ data }) {
  const dispatch = useDispatch();
  const {
    id,
    name,
    price,
    sizeId,
    img,
    quantity,
    genderId,
    colorId,
    createdAt,
  } = data;

  const sizeText = createSizes(sizeId);
  const colorVText = createColor(colorId);
  const style = {
    backgroundColor: colorVText,
  };
  const [open, setOpen] = useState(false);
  const colorStyle = (
    <div>
      <div className="h-4 w-4 border" style={style}></div>
    </div>
  );

  return (
    <div className="mt-5">
      <div className="flex flex-col gap-5 ">
        <div className="flex gap-5">
          <img className="w-[90px]" src={img} alt="" />
          <div className="flex text-xs flex-col">
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
          <div className="flex flex-1 justify-between items-center">
            <div className=""></div>
            <div className="items-center">
              {/* <QuantityInput price={price} getQuantity={getQuantity} /> */}
            </div>
            <div className="">
              <div
                onClick={() => {
                  setOpen(true);
                }}
                role="button"
                className="flex gap-2 items-center"
              >
                <p className="text-yellow-500 font-light text-sm hover:text-yellow-700 hover:underline">
                  {new Date(createdAt).toDateString()}
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
}

export default ProductOrder;
