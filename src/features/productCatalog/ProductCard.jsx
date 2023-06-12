import { useState } from "react";
import ColorDot from "./components/ColorDot";
import Pirce from "./components/Pirce";
import { Link } from "react-router-dom";

function ProductCard({ productInfo }) {
  const { id, name, description, discount, price, color, imgs } = productInfo;
  const displayColor = color.map((el) => {
    const color = el == "1" ? "black" : "white";
    const colorProperty = `bg-${color}`;
    return <ColorDot color={colorProperty} />;
  });
  // "id": 1,
  // "name": "basic t-shirt",
  // "description": "Loose-fit T-shirt made of compact cotton. Round neck and short sleeves.",
  // "discount": "0",
  // "price": "550",
  // "createdAt": "2023-05-01T00:00:00.000Z",
  // "gender": 1,
  // "category": 1,
  // "color": [
  //     2,
  //     1
  // ]
  const [heart, setHeart] = useState(false);
  const [picSource, setPicSource] = useState(imgs[1]);
  return (
    <div className="relative w-[270px]">
      {" "}
      <Link to={`/products/${id}`}>
        {" "}
        <div className="w-full">
          <img
            src={picSource}
            alt="product-picture"
            onMouseOver={() => {
              setPicSource(imgs[2]);
            }}
            onMouseOut={() => {
              setPicSource(imgs[1]);
            }}
            className="object-cover"
          />
        </div>
        <div className="mt-2">
          <p className="text-sm font-sm text-gray-700">{name}</p>
          <Pirce price={price} />
        </div>
        <div className="flex gap-1 mt-2">{displayColor}</div>
      </Link>
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
  );
}

export default ProductCard;
