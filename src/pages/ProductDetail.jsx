import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/mockProduct";
import pic from "../assets/HomePagePics/01-male-shirt-black-01.jpeg";
import Input from "../components/Input";
// import pic1 from

function ProductDetail() {
  const { id } = useParams();
  const dataObj = data.find((el) => el.id === +id);
  // use root source of pic for dev process
  const [selectSize, setSelectSize] = useState(false);
  const colors = dataObj.colors.map((el, index) => {
    const style = {
      backgroundColor: el,
    };
    return (
      <>
        <div id={index} className="h-5 w-5" style={style} role="button" />
        {/* <label htmlFor={index} className="h-5 w-5" style={style}></label> */}{" "}
      </>
    );
  });

  const sizes = dataObj.size.map((el, index) => {
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
            {el.toLocaleUpperCase()}
          </label>
        </div>
      </div>
    );
  });
  return (
    <div className="flex w-3/4 mx-auto mt-[90px] justify-between gap-[120px]">
      <div className="flex-1 ">
        <img src={pic} className="" />
      </div>
      <div className="flex-1">
        <p>{dataObj.description}</p>
        <hr className="mt-5 mb-5" />
        <p className="text-gray-400">COLORS</p>
        <div className="flex gap-5 mt-5">{colors}</div>
        <hr className="mt-5 mb-5" />
        <div>
          <p className="text-gray-400">SIZES</p>
          <div className="flex flex-col gap-2 mt-5">{sizes}</div>
        </div>
        <hr className="mt-5 mb-5" />
        <div className="flex">
          <label htmlFor="">Number</label>
          <Input type="number" min={1} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
