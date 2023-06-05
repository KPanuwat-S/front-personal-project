import ProductCard from "./ProductCard";

import src from "../../assets/HomePagePics/01-male-shirt-black-01.jpeg";
function ProductGroup() {
  return (
    <div className="grid grid-cols-4 place-items-center">
      <ProductCard src={src} />
      <ProductCard src={src} />
      <ProductCard src={src} />
      <ProductCard src={src} />
    </div>
  );
}

export default ProductGroup;
