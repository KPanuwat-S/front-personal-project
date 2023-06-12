import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import pic from "../assets/HomePagePics/01-male-shirt-black-01.jpeg";
import Input from "../components/Input";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductDetailAsync,
  removeProductAsync,
} from "../features/productCatalog/slice/productSlice";
import createSizes from "../utils/createSizes";

function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    dispatch(removeProductAsync()).unwrap();
    dispatch(fetchProductDetailAsync(id)).unwrap();

    return () => {
      dispatch(removeProductAsync()).unwrap();
    };
  }, []);

  const detailsData = useSelector((state) => state.product.details);
  const detailsDataTransformed = detailsData[0];
  let name = detailsDataTransformed?.[0].name;

  let size = detailsDataTransformed?.[0]["sizes"].map((el) => {
    return (
      <div className="flex gap-2">
        <input
          type="radio"
          value={el}
          name="size"
          id={el}
          className="peer invisible"
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

  // const [pic, setPic] = useState("1");
  const [pic, setPic] = useState("1");
  // let img = detailsDataTransformed?.[`${pic}`].imgs;

  const pictureChangeHandler = (e) => {
    e.preventDefault();
    const element = detailsDataTransformed.findIndex(
      (el) => el.colorId == e.target.id
    );
    console.log(element);
    setPic(element);
  };
  const colors = detailsDataTransformed?.map((el, index) => {
    const color = el.colorId == 1 ? "black" : "white";
    // setPic(el.colorId);
    const style = {
      backgroundColor: color,
    };
    return (
      <div>
        <div
          id={el.colorId}
          className="h-5 w-5 border"
          style={style}
          role="button"
          onClick={pictureChangeHandler}
        ></div>
      </div>
    );
  });
  

  return (
    <div className="flex w-3/4 mx-auto mt-[90px] justify-between gap-[60px]">
      <div className="grid grid-cols-2 gap-5">
        <img
          className="w-[550px] col-span-1"
          src={detailsDataTransformed?.[`${pic}`].imgs?.[1]}
          alt=""
        />
        <div className="flex flex-col gap-5">
          <img
            className="w-[150px]"
            src={detailsDataTransformed?.[`${pic}`].imgs?.[0]}
            alt=""
          />
          <img
            className="w-[150px]"
            src={detailsDataTransformed?.[`${pic}`].imgs?.[2]}
            alt=""
          />
        </div>
      </div>
      {detailsData?.length > 0 && (
        <div className="flex flex-col gap-5 flex-1">
          <p>{name.toUpperCase()}</p>
          <hr />
          <p className="text-gray-500 font-light">COLOR</p>
          <div className="flex gap-4">{colors}</div>
          <hr />
          <p className="text-gray-500 font-light">SIZE</p>
          <div>{size}</div>
          <hr />
          <div>{}</div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
