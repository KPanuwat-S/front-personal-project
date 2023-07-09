import { useState } from "react";
import createClasses from "../utils/createClasses";
import { Link, NavLink, Navigate } from "react-router-dom";
import ManViewAll from "./ManPage/ManViewAll";

function ManPage() {
  const [content, setContent] = useState("/manViewAll");
  const category = [
    { id: 1, href: "/manViewAll", text: "View All" },
    { id: 2, href: "/manTShirts", text: "T-Shirts" },
    { id: 3, href: "/manShirts", text: "Shirts" },
    { id: 4, href: "/manTrousers", text: "Trousers" },
    { id: 5, href: "/manJeans", text: "Jeans" },
    { id: 6, href: "/manShorts", text: "Shorts" },
    { id: 7, href: "/manBlazer", text: "Blazer" },
    { id: 8, href: "/manJacket", text: "Jacket" },
  ];
  const clickHandler = (el) => {
    setContent(el.href);
  };

  const defaultProperty =
    "text-gray-800 hover:underline hover:underline-offset-8 hover:decoration-slate-300 hover:decoration-1";

  const navigation = category.map((el, index) => {
    return (
      <div className="flex justify-evenly w-20 gap-4 mt-5" key={el.id}>
        <div
          className={({ isActive }) => {
            const activeProperty = isActive ? "font-regular" : "font-light ";
            return createClasses(defaultProperty, activeProperty);
          }}
          role="button"
          onClick={() => {
            clickHandler(el);
          }}
        >
          {el.text}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="flex">{navigation}</div>
      <div></div>
      {/* <div className="mt-5">{<Navigate to={content} />}</div> */}
    </div>
  );
}

export default ManPage;
