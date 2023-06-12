import React, { useEffect, useState } from "react";
import ProductCard from "../features/productCatalog/ProductCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  fetchProductAsync,
  removeProductAsync,
} from "../features/productCatalog/slice/productSlice";

function ShopPage() {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductAsync()).unwrap();
    return () => {
      dispatch(removeProductAsync()).unwrap();
    };
  }, []);
  const fetchedData = useSelector((state) => state.product.products);

  const displayProduct = fetchedData.map((el) => (
    <ProductCard productInfo={el} />
  ));
  // {displayProduct}
  return <div className="mt-[120px]">{displayProduct}</div>;
}

export default ShopPage;
