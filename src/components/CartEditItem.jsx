import { useDispatch, useSelector } from "react-redux";

import createSizes from "../utils/createSizes";
import createColor from "../utils/createColor";
import { useEffect, useState } from "react";
import QuantityInput from "./QuantityInput";
import {
  editItemCartAsync,
  fetchCartItemsAsync,
  updateCartItem,
} from "../features/productCatalog/slice/cartSlice";
import Loading from "./Loading";

function CartEditItem({
  id,
  setOpen,
  productModelId,
  fetch,
  setFetch,
  showPrice,
}) {
  const data = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const detailsData = useSelector((state) => state.product.details);
  const loading = useSelector((state) => state.cart.loading);
  // Get Data of Edited Item

  const editData = data.find((el) => el.id == id);

  // Get Data Set of Model
  const detailsDataTransformed = detailsData?.[0];

  // Retrieve Value of Data
  const { name, price, size, imgs, quantity, gender, color } = editData;
  const [editDataFinal, setEditDataFinal] = useState(editData);
  const [editPrice, seteditPrice] = useState(showPrice);
  const [editQuantity, setEditQuantity] = useState(quantity);

  const sizes = detailsDataTransformed?.["sizes"].map((el) => el);

  // Size from Front End
  const [editSize, setEditSize] = useState(size);
  const [editColor, setEditColor] = useState(color);
  const [editImg, setEditImg] = useState(imgs[0]);
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
        img: detailsDataTransformed?.imgs?.[0],
        quantity: editQuantity,
        sumPrice: showPrice * editQuantity,
      };
    });
  }, [
    editSize,
    imgs,
    editColor,
    editPrice,
    detailsDataTransformed,
    editQuantity,
  ]);

  // Handle Picture
  const [editPic, setPic] = useState(0);

  const getQuantity = (quantity) => {
    setEditQuantity((prev) => quantity);
  };
  const pictureChangeHandler = (e) => {
    e.preventDefault();

    const element = detailsData.findIndex((el) => el.colorId == e.target.id);
    setEditColor(detailsData?.[`${element}`].colorId);

    setEditImg(detailsData?.[`${element}`].imgs?.[0]);

    // setEditColor(e.target.value);
  };
  const colors = detailsData?.map((el, index) => {
    const color = createColor(el.colorId);
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

  // const editItemCartHandler = async () => {
  //   await dispatch(editItemCartAsync(payload)).unwrap();
  //   await dispatch(fetchCartItemsAsync()).unwrap();
  // };

  const editItemCartHandler = async () => {
    dispatch(editItemCartAsync(payload));
    dispatch(updateCartItem(editDataFinal));
    window.location.reload();
    setOpen(false);
    setFetch(!fetch);
  };

  // useEffect(() => {
  //   dispatch(fetchCartItemsAsync());
  // }, [fetch]);
  // UI

  if (loading) return <Loading></Loading>;
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
            <div className="flex items-center gap-3 mt-4 mb-4">
              <span className="text-gray-400 font-light">QUANTITY: </span>{" "}
              <QuantityInput
                preValue={quantity}
                price={editPrice}
                getQuantity={getQuantity}
              />
            </div>

            <div>
              <span className="text-gray-400 font-light">PRIZE: </span>
              {showPrice * editQuantity}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1"></div>

          <button
            onClick={editItemCartHandler}
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
