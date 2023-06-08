import { useState } from "react";
import ColorDot from "./components/ColorDot";
import Pirce from "./components/Pirce";

function ProductCard({ src }) {
  const [heart, setHeart] = useState(false);
  return (
    <div>
      <div className="w-[227px] relative">
        <img src={src} alt="product-picture" />

        {heart ? (
          <i
            class="fa-solid fa-heart text-red-500 absolute top-3 right-3"
            onClick={() => {
              setHeart(!heart);
            }}
            role="button"
          ></i>
        ) : (
          <i
            class="fa-regular fa-heart absolute top-3 right-3 hover:text-red-500"
            onClick={() => {
              setHeart(!heart);
            }}
            role="button"
          />
        )}
      </div>
      <div className="mt-2">
        <p className="text-sm font-sm text-gray-700">TEXTURED VISCOSE SHIRT</p>
        <Pirce price={30} />
      </div>
      <div className="flex gap-1 mt-2">
        <ColorDot color="bg-red-500" />
        <ColorDot color="bg-blue-500" />
        <ColorDot color="bg-gray-500" />
        <ColorDot color="bg-black-500" />
      </div>
    </div>
  );
}

export default ProductCard;
