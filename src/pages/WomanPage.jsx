import { useEffect, useState } from "react";
import {
  fetchProductByGenderAsync,
  fetchProductByGenderWithQueryAsync,
  removeProductAsync,
} from "../features/productCatalog/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../features/productCatalog/ProductCard";

function WomanPage() {
  const [current, setCurrent] = useState(0);

  const category = [
    { id: 0, text: "View All" },
    { id: 8, text: "T-Shirts" },
    { id: 9, text: "Shirts" },
    { id: 10, text: "Trousers" },
    { id: 11, text: "Jeans" },
    { id: 12, text: "Shorts" },
    { id: 13, text: "Blazer" },
    { id: 14, text: "Dress" },
  ];
  const dispatch = useDispatch();

  const clickHandler = (el) => {
    setCurrent(el.id);
    const query = { categoryId: el.id };
    const input = { genderId: 2, query };
    dispatch(removeProductAsync()).unwrap();
    if (el.id == 0) {
      dispatch(fetchProductByGenderAsync(2)).unwrap();
    } else {
      dispatch(fetchProductByGenderWithQueryAsync(input)).unwrap();
    }
  };
  const navigation = category.map((el, index) => {
    return (
      <div className="flex justify-evenly w-[120px] gap-5 mt-5" key={el.id}>
        {el.id === current ? (
          <div
            className=" font-light flex items-center justify-center px-2 bg-gray-400 text-white rounded-xl"
            role="button"
            onClick={() => {
              clickHandler(el);
            }}
          >
            {el.text}
          </div>
        ) : (
          <div
            className=" font-light"
            role="button"
            onClick={() => {
              clickHandler(el);
            }}
          >
            {el.text}
          </div>
        )}
      </div>
    );
  });

  useEffect(() => {
    dispatch(removeProductAsync()).unwrap();
    dispatch(fetchProductByGenderAsync(2)).unwrap();
  }, []);
  const fetchedData = useSelector((state) => state.product.maleProducts);
  const displayProduct = fetchedData?.map((el) => (
    <ProductCard productInfo={el} />
  ));
  return (
    <div>
      <div className="flex">{navigation}</div>
      <div className="mt-[80px] grid grid-cols-4 gap-20 mb-[120px]">
        {fetchedData.length > 0 && displayProduct}
      </div>
    </div>
  );
}

export default WomanPage;
