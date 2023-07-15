import { useEffect, useState } from "react";
import createClasses from "../utils/createClasses";
import { Link, NavLink, Navigate } from "react-router-dom";
import ManViewAll from "./ManPage/ManViewAll";
import ProductCard from "../features/productCatalog/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductByGenderAsync,
  fetchProductByGenderWithQueryAsync,
  removeProductAsync,
} from "../features/productCatalog/slice/productSlice";

function ManPage() {
  const [current, setCurrent] = useState(0);
  const category = [
    { id: 0, href: "/manViewAll", text: "View All" },
    { id: 1, href: "/manTShirts", text: "T-Shirts" },
    { id: 2, href: "/manShirts", text: "Shirts" },
    { id: 3, href: "/manTrousers", text: "Trousers" },
    { id: 4, href: "/manJeans", text: "Jeans" },
    { id: 5, href: "/manShorts", text: "Shorts" },
    { id: 6, href: "/manBlazer", text: "Blazer" },
    { id: 7, href: "/manJacket", text: "Jacket" },
  ];
  const dispatch = useDispatch();

  const clickHandler = (el) => {
    setCurrent(el.id);
    const query = { categoryId: el.id };
    const input = { genderId: 1, query };
    dispatch(removeProductAsync()).unwrap();
    if (el.id == 0) {
      dispatch(fetchProductByGenderAsync(1)).unwrap();
    } else {
      dispatch(fetchProductByGenderWithQueryAsync(input)).unwrap();
    }
  };

  const navigation = category.map((el, index) => {
    return (
      <div className="flex justify-evenly w-[120px] gap-5 mt-5" key={el.id}>
        {el.id === current ? (
          <div
            className=" font-light flex items-center justify-center px-2 bg-gray-400 text-white rounded-xl"
            role="button"
            onClick={() => {
              clickHandler(el);
            }}
          >
            {el.text}
          </div>
        ) : (
          <div
            className=" font-light"
            role="button"
            onClick={() => {
              clickHandler(el);
            }}
          >
            {el.text}
          </div>
        )}
      </div>
    );
  });

  useEffect(() => {
    dispatch(removeProductAsync()).unwrap();
    dispatch(fetchProductByGenderAsync(1)).unwrap();
  }, []);
  const fetchedData = useSelector((state) => state.product.maleProducts);
  const displayProduct = fetchedData?.map((el) => (
    <ProductCard productInfo={el} />
  ));
  return (
    <div>
      <div className="flex">{navigation}</div>
      <div className="mt-[80px] grid grid-cols-4 gap-20 mb-[120px]">
        {fetchedData.length > 0 && displayProduct}
      </div>
    </div>
  );
}

export default ManPage;
