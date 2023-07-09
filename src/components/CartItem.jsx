import React, { useEffect, useState } from "react";
import Button from "./Button";
import createSizes from "../utils/createSizes";
import createColor from "../utils/createColor";
import { useDispatch } from "react-redux";
import { addItemToCartAsync } from "../features/productCatalog/slice/cartSlice";
import QuantityInput from "./QuantityInput";
import Modal from "./Modal";
import CartEditItem from "./CartEditItem";
import { fetchProductDetailAsync } from "../features/productCatalog/slice/productSlice";

function CartItem({ data, deleteItemHandler, fetch, setFetch }) {
  const dispatch = useDispatch();
  const { id, name, price, size, imgs, quantity, productModelId, color } = data;

  console.log("data", data);
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
  const [open, setOpen] = useState(false);
  const colorStyle = (
    <div>
      <div className="h-4 w-4 border" style={style}></div>
    </div>
  );
  useEffect(() => {
    dispatch(fetchProductDetailAsync(productModelId));
    console.log("running");
  }, [open]);

  console.log("color", color);

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <img className="w-[150px]" src={imgs[0]} alt="" />
          <div className="flex flex-col">
            <div className="text-gray-600 mb-5">{name?.toUpperCase()}</div>
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
                <i class="fa-regular fa-pen-to-square text-gray-500 text-sm "></i>
                <p className="text-gray-500 font-light text-sm hover:text-gray-800 hover:underline">
                  EDIT
                </p>
              </div>
              <div>
                {" "}
                <Modal
                  open={open}
                  title="EDIT ITEM"
                  width={35}
                  onClose={() => {
                    setOpen(false);
                  }}
                >
                  <CartEditItem
                    setOpen={setOpen}
                    id={id}
                    productModelId={productModelId}
                    fetch={fetch}
                    setFetch={setFetch}
                  ></CartEditItem>
                </Modal>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  deleteItemHandler(id);
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5 mb-5" />
    </div>
  );
}

export default CartItem;
