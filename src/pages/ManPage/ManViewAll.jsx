import React from "react";
import ProductCard from "../../features/productCatalog/ProductCard";

import pic1 from "../../assets/HomePagePics/01-male-shirt-black-01.jpeg";
import pic2 from "../../assets/HomePagePics/01-male-shirt-black-05.jpeg";
function ManViewAll() {
  const src = [pic1, pic2];
  return (
    <div>
      <div className="grid grid-cols-4 place-items-center mt-10 gap-20">
        <ProductCard src={src} id={1} />
        <ProductCard src={src} id={1} />
        <ProductCard src={src} id={1} />
        <ProductCard src={src} id={1} />
        <ProductCard src={src} id={1} />
        <ProductCard src={src} id={1} />
        <ProductCard src={src} id={1} />
        <ProductCard src={src} id={1} />
        <ProductCard src={src} id={1} />
        <ProductCard src={src} id={1} />
        <ProductCard src={src} id={1} />
        <ProductCard src={src} id={1} />
      </div>
    </div>
  );
}

export default ManViewAll;
