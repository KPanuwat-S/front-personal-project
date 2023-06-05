import ColorDot from "./components/ColorDot";
import Pirce from "./components/Pirce";

function ProductCard({ src }) {
  return (
    <div>
      <div className="w-[227px] relative">
        <img src={src} alt="product-picture" />
      </div>
      <div>
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
