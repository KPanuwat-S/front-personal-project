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
} from "../features/productCatalog/slice/cartSlice";
import { v4 as uuidv4 } from "uuid";
function CartEditItem({ id, setOpen }) {
  // Handle Modal
  // const [open, setOpen] = useState(false);

  // Get Data of Edited Item
  const dispatch = useDispatch();
  const data = localStorageService.getCartItems();
  const editData = data.find((el) => el.id == id);

  // Get Data Set of Model
  const detailsData = useSelector((state) => state.product.details);
  const detailsDataTransformed = detailsData?.[0];

  // Retrieve Value of Data
  const { name, price, size, img, quantity, gender, color } = editData;
  const [editDataFinal, setEditDataFinal] = useState(editData);
  const [editPrice, seteditPrice] = useState(price);
  const [editQuantity, setEditQuantity] = useState(quantity);

  // Size from DB
  const sizes = detailsDataTransformed?.[0]["sizes"].map((el) => el);

  // Size from Front End
  const [editSize, setEditSize] = useState(size);
  const [editColor, setEditColor] = useState(color);
  // const sizeText = createSizes(size);
  const colorVText = createColor(color);

  // Handle Color
  const style = {
    backgroundColor: colorVText,
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
  }, [editSize, editColor, editPrice, detailsDataTransformed, editQuantity]);
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
    const color = detailsDataTransformed?.[`${element}`].colorId;
    setPic(element);
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
          value=""
          className="h-5 w-5 border"
          style={style}
          role="button"
          onClick={pictureChangeHandler}
        ></div>
      </div>
    );
  });

  const payload = { id: id, data: editDataFinal };

  // UI
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <img
            className="w-[150px]"
            src={detailsDataTransformed?.[`${editPic}`].imgs?.[0]}
            // src={img}
            alt=""
          />
          <div className="flex flex-col">
            <div className="text-gray-600 mb-5">{name.toUpperCase()}</div>
            <div>
              <span className="text-gray-400 font-light">SIZE: </span>{" "}
              <select name="size" id="size">
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
            onClick={() => {
              setOpen(false);
              dispatch(editItemCart(payload));
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
