import { Link } from "react-router-dom";
import Button from "./Button";
const boldProperty = "font-bold";
function CTA({ text, ctaText = "SHOP", primary = true, bold = undefined }) {
  return (
    <div className="text-center">
      {text && (
        <h1 className="text-5xl mb-6">
          {text} <span className={boldProperty}>{bold}</span>
        </h1>
      )}
      <Link to="/shop">
        <button className="rounded-xl px-10 py-2 text-white bg-gray-800 hover:bg-gray-700 ease-in-out duration-300">
          SHOP
        </button>
      </Link>
    </div>
  );
}

export default CTA;
