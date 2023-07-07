import React, { useEffect, useState } from "react";
import ProductCard from "../features/productCatalog/ProductCard";
import PageName from "../components/PageName";
import { useSelector } from "react-redux";

function WishListPage() {
  const [showProduct, setShowProduct] = useState(<></>);
  const likeProducts = new Set(
    useSelector((state) => state.cart.likedProducts)
  );

  const products = Array.from(likeProducts).map((el) => (
    <ProductCard productInfo={el} />
  ));
  // useEffect(() => {
  //   const products = likeProducts?.map((el) => {

  //   });

  //   setShowProduct(products);
  // }, []);

  return (
    likeProducts && (
      <div className="mt-[120px]">
        <PageName text="My Wish List" />
        <div className="flex gap-10"> {products}</div>
      </div>
    )
  );
}

export default WishListPage;
