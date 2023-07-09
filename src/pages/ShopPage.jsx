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
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
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
  if (loading) return <Loading></Loading>;
  return (
    <div className="mt-[120px] flex gap-10">
      {fetchedData.length > 0 && displayProduct}
    </div>
  );
}

export default ShopPage;
