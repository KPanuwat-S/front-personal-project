import { useDispatch, useSelector } from "react-redux";
import * as localStorageService from "../utils/localStorage";
import { Link } from "react-router-dom";
import createSizes from "../utils/createSizes";
import createColor from "../utils/createColor";
import { useEffect, useState } from "react";
import QuantityInput from "./QuantityInput";
import {
  addItemToCartAsync,
  addItemToLocalStorage,
  deleteItemCart,
  deleteItemFromStorage,
  editItemCart,
  editItemFromCart,
} from "../features/productCatalog/slice/cartSlice";
import { v4 as uuidv4 } from "uuid";
function CartEditItem({ id, setOpen }) {
  const data = useSelector((state) => state.cart.cartProducts);
  const detailsData = useSelector((state) => state.product.details);

  // Get Data of Edited Item
  const dispatch = useDispatch();
  const editData = data.find((el) => el.id == id);

  // Get Data Set of Model
  const detailsDataTransformed = detailsData?.[0];
  console.log("detailsData", detailsData);
  console.log("transform", detailsDataTransformed);

  // Retrieve Value of Data
  const { name, price, size, img, quantity, gender, color } = editData;
  const [editDataFinal, setEditDataFinal] = useState(editData);
  const [editPrice, seteditPrice] = useState(price);
  const [editQuantity, setEditQuantity] = useState(quantity);

  console.log("edti data", editData);
  // Size from DB
  console.log("detaildatatransform", detailsDataTransformed);
  const sizes = detailsDataTransformed?.[0]["sizes"].map((el) => el);
  console.log("sizes", sizes);
  // Size from Front End
  const [editSize, setEditSize] = useState(size);
  const [editColor, setEditColor] = useState(color);
  const [editImg, setEditImg] = useState(img);
  // const sizeText = createSizes(size);
  const colorText = createColor(color);

  // Handle Color
  const style = {
    backgroundColor: colorText,
  };
  const colorStyle = (
    <div>
      <div className="h-4 w-4 border" style={style}></div>
    </div>
  );

  useEffect(() => {
    setEditDataFinal((prevData) => {
      return {
        ...prevData,
        size: editSize,
        color: editColor,
        price: editPrice,
        img: detailsDataTransformed?.[`${editPic}`].imgs?.[0],
        quantity: editQuantity,
        sumPrice: price * editQuantity,
      };
    });
  }, [
    editSize,
    img,
    editColor,
    editPrice,
    detailsDataTransformed,
    editQuantity,
  ]);

  console.log("edit data final", editDataFinal);
  console.log("editcolor", editColor);
  // Handle Picture
  const [editPic, setPic] = useState(0);

  const getQuantity = (quantity) => {
    setEditQuantity((prev) => quantity);
  };
  const pictureChangeHandler = (e) => {
    e.preventDefault();
    const element = detailsDataTransformed.findIndex(
      (el) => el.colorId == e.target.id
    );
    setEditColor(detailsDataTransformed?.[`${element}`].colorId);

    setEditImg(detailsDataTransformed?.[`${element}`].imgs?.[0]);

    // setEditColor(e.target.value);
  };
  const colors = detailsDataTransformed?.map((el, index) => {
    const color = el.colorId == 1 ? "black" : "white";
    const style = {
      backgroundColor: color,
    };
    return (
      <div>
        <div
          id={el.colorId}
          name="color"
          value={el.colorId}
          className="h-5 w-5 border"
          style={style}
          role="button"
          onClick={pictureChangeHandler}
        ></div>
      </div>
    );
  });

  const payload = { id: id, data: editDataFinal };
  const editItemCartHandler = () => {
    dispatch(editItemFromCart(payload));
  };
  // UI
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <img
            className="w-[150px]"
            src={editImg}
            // src={detailsDataTransformed?.[`${editPic}`].imgs?.[0]}
            alt=""
          />
          <div className="flex flex-col">
            <div className="text-gray-600 mb-5">{name.toUpperCase()}</div>
            <div>
              <span className="text-gray-400 font-light">SIZE: </span>{" "}
              <select
                name="size"
                id="size"
                onChange={(e) => {
                  console.log("change size is working");
                  console.log("target value size ", e.target.value);
                  setEditSize(+e.target.value);
                }}
              >
                {sizes.map((el) => {
                  const allSizeText = createSizes(el);
                  const selectedSizeText = createSizes(size);
                  if (allSizeText === selectedSizeText) {
                    return <option value={el}>{selectedSizeText}</option>;
                  }
                })}
                {sizes.map((el) => {
                  const allSizeText = createSizes(el);
                  const selectedSizeText = createSizes(size);
                  if (allSizeText !== selectedSizeText) {
                    return <option value={el}>{allSizeText}</option>;
                  }
                })}
              </select>
              {/* {sizeText} */}
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-gray-400 font-light">COLOR: </span> {colors}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 font-light">QUANTITY: </span>{" "}
              <QuantityInput
                preValue={quantity}
                price={editPrice}
                getQuantity={getQuantity}
              />
            </div>

            <div>
              <span className="text-gray-400 font-light">PRIZE: </span>
              {price * editQuantity}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1"></div>

          <button
            type="submit"
            onClick={() => {
              setOpen(false);
              editItemCartHandler();
              // dispatch(editItemCart(payload));
            }}
            className="px-5 py-2 rounded-xl text-white bg-gray-800 hover:bg-gray-700 ease-in-out duration-300"
          >
            CONFIRM
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default CartEditItem;

// dispatch(addItemToCartAsync(data));
//                 dispatch(addItemToLocalStorage())

// useEffect(() => {
//   dispatch(fetchItemCartFromStorage());
// },
