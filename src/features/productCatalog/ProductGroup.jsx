import ProductCard from "./ProductCard";

import pic1 from "../../assets/HomePagePics/01-male-shirt-black-01.jpeg";
import pic2 from "../../assets/HomePagePics/01-male-shirt-black-05.jpeg";
function ProductGroup() {
  const src = [pic1, pic2];
  return (
    <div className="grid grid-cols-4 place-items-center">
      {/* <ProductCard src={src} />
      <ProductCard src={src} />
      <ProductCard src={src} />
      <ProductCard src={src} /> */}
    </div>
  );
}

export default ProductGroup;
