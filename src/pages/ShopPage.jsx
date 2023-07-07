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
  useSelector
  useEffect(() => {
    dispatch(fetchProductAsync()).unwrap();
    return () => {
      // dispatch(removeProductAsync()).unwrap();
    };
  }, []);
  const fetchedData = useSelector((state) => state.product.products);

  const displayProduct = fetchedData?.[0]?.map((el) => (
    <ProductCard productInfo={el} />
  ));
  // {displayProduct}
  return (
    <div className="mt-[120px] flex gap-10">
      {fetchedData.length > 0 && displayProduct}
    </div>
  );
}

export default ShopPage;
