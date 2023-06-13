import React from "react";
import Button from "./Button";
import createSizes from "../utils/createSizes";

function CartForm({ data }) {
  const { name, price, size, img, quantity, gender } = data;
  console.log(data);
  const dataHandler = (e) => {
    e.preventDefault();
    const newData = { ...itemData, [e.target.name]: e.target.value };
    setItemData(newData);
  };
  const sizeText = createSizes(size);
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <img className="w-[100px]" src={img} alt="" />
          <div className="flex flex-col">
            <div className="flex-1">{name.toUpperCase()}</div>
            <div>SIZE: {sizeText}</div>
            <div>QUANTITY: {quantity}</div>
          </div>
        </div>
        <div className="">
          <Button
            text="ADD TO CART ITEM"
            onClick={() => {
              setOpen(false);
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default CartForm;
