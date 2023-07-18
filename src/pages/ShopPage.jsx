import React, { useEffect, useState } from "react";
import ProductCard from "../features/productCatalog/ProductCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  fetchProductAsync,
  removeProductAsync,
} from "../features/productCatalog/slice/productSlice";
import Loading from "../components/Loading";

function ShopPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  useEffect(() => {
    dispatch(removeProductAsync()).unwrap();
    dispatch(fetchProductAsync()).unwrap();
  }, []);
  const fetchedData = useSelector((state) => state.product.products);

  console.log("fetchData", fetchedData);
  const displayProduct = fetchedData?.[0]?.map((el) => {
    console.log("el", el);
    return <ProductCard productInfo={el} />;
  });

  if (loading) return <Loading></Loading>;
  return (
    <div className="mt-[120px] grid grid-cols-4 gap-20 mb-[120px]">
      {fetchedData.length > 0 && displayProduct}
    </div>
  );
}

export default ShopPage;
