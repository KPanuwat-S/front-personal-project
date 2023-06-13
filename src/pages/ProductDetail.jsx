import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductDetailAsync,
  removeProductAsync,
} from "../features/productCatalog/slice/productSlice";
import createSizes from "../utils/createSizes";
import QuantityInput from "../components/QuantityInput";
import Button from "../components/Button";
import Modal from "../components/Modal";
import CartForm from "../components/CartForm";

function ProductDetail() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [pic, setPic] = useState(0);

  useEffect(() => {
    dispatch(removeProductAsync()).unwrap();
    dispatch(fetchProductDetailAsync(id)).unwrap();

    return () => {
      // dispatch(removeProductAsync()).unwrap();
    };
  }, []);
  console.log(id);

  const detailsData = useSelector((state) => state.product.details);
  const detailsDataTransformed = detailsData?.[0];
  console.log("detailData", detailsDataTransformed);
  const defaultPrice = +detailsDataTransformed?.[0].price;
  console.log(defaultPrice);
  const [price, setPrice] = useState(defaultPrice);
  const [quantity, setQuantity] = useState(1);
  const getQuantity = (quantity) => {
    setQuantity(quantity);
    setSelectedProduct((prev) => {
      const data = prev;
      return { ...data, quantity: quantity };
    });
  };
  let name = detailsDataTransformed?.[0].name;

  const [selectedProduct, setSelectedProduct] = useState({
    name: name,
    // name: "name",
    size: detailsDataTransformed?.[0]["sizes"][0],
    quantity: quantity,
    color: detailsDataTransformed?.[0].colorId,
    price: defaultPrice,
    img: detailsDataTransformed?.[0].imgs?.[0],
  });

  useEffect(() => {
    setSelectedProduct({
      name: name,
      // name: "name",
      size: detailsDataTransformed?.[0]["sizes"][0],
      quantity: quantity,
      color: detailsDataTransformed?.[0].colorId,
      price: defaultPrice,
      img: detailsDataTransformed?.[0].imgs?.[0],
    });
  }, [detailsData]);

  let size = detailsDataTransformed?.[0]["sizes"].map((el) => {
    return (
      <div className="flex gap-2">
        <input
          type="radio"
          value={el}
          name="size"
          id={el}
          className="peer"
          onClick={(e) => {
            setSelectedProduct((prev) => {
              const data = prev;
              return { ...data, size: e.target.value };
            });
          }}
        />
        <div className="peer-checked:bg-gray-100 rounded-xl">
          <label
            htmlFor={el}
            className=" w-[120px] px-3 py-2 hover:bg-gray-100 rounded-xl block text-gray-600 font-light"
            role="button"
          >
            {createSizes(el)}
          </label>
        </div>
      </div>
    );
  });

  const pictureChangeHandler = (e) => {
    e.preventDefault();
    const element = detailsDataTransformed.findIndex(
      (el) => el.colorId == e.target.id
    );

    const color = detailsDataTransformed?.[`${element}`].colorId;

    setPic(element);
    setSelectedProduct((prev) => {
      const data = prev;
      return {
        ...data,
        color: color,
        img: detailsDataTransformed?.[`${element}`].imgs?.[0],
      };
    });
  };

  const colors = detailsDataTransformed?.map((el, index) => {
    const color = el.colorId == 1 ? "black" : "white";
    // setSelectedProduct((prev) => {
    //   const data = prev;
    //   return { ...data, color: color };
    // });
    const style = {
      backgroundColor: color,
    };
    console.log(typeof price);
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

  const display = detailsData?.length > 0 && (
    <div className="flex w-3/4 mx-auto mt-[90px] justify-between gap-[60px]">
      <div className="grid grid-cols-2 gap-5">
        <div className="">
          <img
            className="w-[550px] col-span-1 "
            src={detailsDataTransformed?.[`${pic}`].imgs?.[1]}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="overflow-hidden">
            <img
              className="w-[150px]   "
              src={detailsDataTransformed?.[`${pic}`].imgs?.[0]}
              alt=""
            />
          </div>
          <div className="overflow-hidden">
            <img
              className="w-[150px]"
              src={detailsDataTransformed?.[`${pic}`].imgs?.[2]}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-[450px]">
        <p>{name.toUpperCase()}</p>
        <hr />
        <p className="text-gray-500 font-light">COLOR</p>
        <div className="flex gap-4">{colors}</div>
        <hr />
        <p className="text-gray-500 font-light">SIZE</p>
        <div>{size}</div>
        <hr />
        <div className="flex items-center justify-center">
          <QuantityInput price={price} getQuantity={getQuantity} />
        </div>
        <hr />
        <div className="flex flex-col font-semibold text-gray-500 text-center gap-5">
          ฿​ {defaultPrice}{" "}
          <Button
            text="GO TO CART"
            primary={true}
            onClick={() => {
              setOpen(true);
            }}
          ></Button>
        </div>
        <div>
          <Modal
            open={open}
            title="ADD ITEM"
            width={35}
            onClose={() => {
              setOpen(false);
            }}
          >
            <CartForm data={selectedProduct}></CartForm>
          </Modal>
        </div>
      </div>
    </div>
  );
  return <>{display}</>;
}

export default ProductDetail;
