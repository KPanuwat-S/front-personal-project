import { useState } from "react";
import ColorDot from "./components/ColorDot";
import Pirce from "./components/Pirce";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import {
  addToLike,
  removeFromLike,
} from "../../features/productCatalog/slice/cartSlice";
import createColor from "../../utils/createColor";
import {
  fetchProductDetailAsync,
  removeProductAsync,
} from "./slice/productSlice";
function ProductCard({ productInfo }) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when element comes into view
  });

  const animationClasses = inView ? "slideInUp" : "";

  const { id, name, description, discount, price, color, imgs } = productInfo;
  const displayColor = color.map((el) => {
    const color = createColor(el);
    console.log(color);
    let colorProperty;
    if (color == "black" || color == "white") {
      colorProperty = `bg-${color}`;
    } else colorProperty = `bg-${color}-400`;

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
  const dispatch = useDispatch();
  const [heart, setHeart] = useState(false);
  const [picSource, setPicSource] = useState(imgs[0]);
  const likeHandler = () => {
    if (heart) {
      dispatch(removeFromLike(productInfo.id));
      setHeart(false);
      console.log("liked");
    } else {
      dispatch(addToLike(productInfo));
      setHeart(true);
    }
  };
  return (
    <div ref={ref} className={animationClasses}>
      <div className=" relative w-[270px]">
        <Link to={`/products/${id}`}>
          {" "}
          <div
            className="w-full"
            onClick={() => {
              dispatch(removeProductAsync());
              // dispatch(removeProductAsync());
              // dispatch(fetchProductDetailAsync(id));
              // window.location.reload();
            }}
          >
            <img
              src={picSource}
              alt="product-picture"
              onMouseOver={() => {
                setPicSource(imgs[1]);
              }}
              onMouseOut={() => {
                setPicSource(imgs[0]);
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
              likeHandler();
            }}
            role="button"
          ></i>
        ) : (
          <i
            class="fa-regular fa-heart absolute top-3 right-3 hover:text-red-500"
            onClick={() => {
              likeHandler();
            }}
            role="button"
          />
        )}
      </div>
    </div>
  );
}

export default ProductCard;
