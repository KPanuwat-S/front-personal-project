import React, { useState } from "react";
import Button from "./Button";
import createSizes from "../utils/createSizes";
import createColor from "../utils/createColor";
import { useDispatch } from "react-redux";
import { addItemToCartAsync } from "../features/productCatalog/slice/cartSlice";
import QuantityInput from "./QuantityInput";
import Modal from "./Modal";
// Modal;
function CartItem({ data }) {
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
  const [open, setOpen] = useState(false);
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
                  EDIT
                  {/* <CartForm data={selectedProduct} setOpen={setOpen}></CartForm> */}
                </Modal>
              </div>
              <div>DELETE</div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
}

export default CartItem;
