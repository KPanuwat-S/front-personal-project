import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductDetailAsync,
  removeProductAsync,
} from "../features/productCatalog/slice/productSlice";
import createSizes from "../utils/createSizes";
import QuantityInput from "../components/QuantityInput";
import Button from "../components/Button";
import Modal from "../components/Modal";
import CartForm from "../components/CartForm";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { redirectTo } from "../features/auth/slice/authSlice";
import RedirectToLogin from "./RedirectToLogin";

function ProductDetail() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [pic, setPic] = useState(0);
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();

  console.log("id", id);
  useEffect(() => {
    dispatch(removeProductAsync());
    dispatch(fetchProductDetailAsync(id));
    dispatch(redirectTo(location));
    console.log("running---");
  }, []);

  const detailsData = useSelector((state) => state.product.details);
  // fetch from db => call api to find

  const [detailsDataTransformed] = detailsData;

  console.log("detail", detailsDataTransformed);

  const defaultPrice = detailsDataTransformed?.price;
  const [price, setPrice] = useState(defaultPrice);
  const [quantity, setQuantity] = useState(1);
  const getQuantity = (quantity) => {
    setQuantity((prev) => quantity);
    setSelectedProduct((prev) => {
      const data = prev;
      return { ...data, quantity: quantity };
    });
  };
  let name = detailsDataTransformed?.name;

  const [selectedProduct, setSelectedProduct] = useState({
    name: name,
    size: detailsDataTransformed?.sizes[0],
    quantity: quantity,
    color: detailsDataTransformed?.colorId,
    price: defaultPrice,
    img: detailsDataTransformed?.imgs?.[0],
    productModel: id,
    sumPrice: defaultPrice * quantity,
    sizes: detailsDataTransformed?.sizes[0],
  });

  // useEffect(() => {
  //   setSelectedProduct((prev) => {
  //     return {
  //       ...prev,
  //       id: uuidv4(),
  //       name: name,
  //       size: detailsDataTransformed?.[0]["sizes"][0],
  //       quantity: quantity,
  //       color: detailsDataTransformed?.[0].colorId,
  //       price: defaultPrice,
  //       img: detailsDataTransformed?.[0].imgs?.[0],
  //       productModel: id,
  //       sumPrice: defaultPrice * quantity,
  //       sizes: detailsDataTransformed?.[0]["sizes"],
  //     };
  //   });
  // }, [detailsData, quantity]);
  useEffect(() => {
    setSelectedProduct((prev) => {
      return {
        name: name,
        size: selectedProduct.size ?? detailsDataTransformed?.sizes[0],
        quantity: quantity,
        color: detailsDataTransformed?.colorId,
        price: defaultPrice,
        img: detailsDataTransformed?.imgs?.[0],
        // ?? detailsDataTransformed?.imgs?.[0],
        productModel: id,
        sumPrice: defaultPrice * quantity,
      };
    });
  }, [detailsData, quantity]);

  console.log("selected product", selectedProduct);
  let size = detailsDataTransformed?.sizes.map((el) => {
    return (
      <div className="flex gap-2">
        {el == 1 ? (
          <input
            type="radio"
            value={el}
            name="size"
            id={el}
            className="peer"
            defaultChecked
            onClick={(e) => {
              setSelectedProduct((prev) => {
                const data = prev;
                return { ...data, size: e.target.value };
              });
            }}
          />
        ) : (
          <input
            type="radio"
            value={el}
            name="size"
            id={el}
            className="peer"
            onClick={(e) => {
              setSelectedProduct((prev) => {
                const data = prev;
                return { ...data, size: e.target.value };
              });
            }}
          />
        )}
        <div className="peer-checked:bg-gray-100 rounded-xl">
          <label
            htmlFor={el}
            className=" w-[120px] px-3 py-2 hover:bg-gray-100 rounded-xl block text-gray-600 font-light"
            role="button"
          >
            {createSizes(el)}
          </label>
        </div>
      </div>
    );
  });

  const pictureChangeHandler = (e) => {
    e.preventDefault();
    const element = detailsData.findIndex((el) => el.colorId == e.target.id);

    console.log("element", element);
    const color = detailsData?.[`${element}`].colorId;

    setPic(element);
    setSelectedProduct((prev) => {
      const data = prev;
      return {
        ...data,
        color: color,
        img: detailsData?.[`${element}`].imgs?.[0],
      };
    });
  };

  const colors = detailsData?.map((el, index) => {
    const color = el.colorId == 1 ? "black" : "white";
    const style = {
      backgroundColor: color,
    };

    return (
      <div>
        <div
          id={el.colorId}
          name="color"
          value=""
          className="h-5 w-5 border"
          style={style}
          role="button"
          onClick={pictureChangeHandler}
        ></div>
      </div>
    );
  });

  const display = detailsData?.length > 0 && (
    <div className="flex w-3/4 mx-auto mt-[90px] justify-between gap-[60px]">
      <div className="grid grid-cols-2 grid-rows-2 gap-5 overflow-hidden w-[1000px] h-[400px]">
        <div className="">
          <div className="overflow-hidden">
            <img
              className="hover:scale-110"
              src={detailsData?.[`${pic}`].imgs?.[0]}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 col-span-1 row-span-2">
          <div className="overflow-hidden w-[175px]">
            <img
              className="hover:scale-110"
              src={detailsData?.[`${pic}`].imgs?.[1]}
              alt=""
            />
          </div>
          <div className="overflow-hidden w-[175px]">
            <img
              className="hover:scale-110"
              src={detailsData?.[`${pic}`].imgs?.[2]}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-[450px]">
        <p>{name.toUpperCase()}</p>
        <hr />
        <p className="text-gray-500 font-light">COLOR</p>
        <div className="flex gap-4">{colors}</div>
        <hr />
        <p className="text-gray-500 font-light">SIZE</p>
        <div>{size}</div>
        <hr />
        <div className="flex items-center justify-center">
          <QuantityInput price={price} getQuantity={getQuantity} />
        </div>
        <hr />
        <div className="flex flex-col font-semibold text-gray-500 text-center gap-5">
          ฿​ {defaultPrice * quantity}
          <Button
            text="ADD TO CART"
            primary={true}
            onClick={() => {
              setOpen(true);
            }}
          ></Button>
        </div>

        <div>
          {user ? (
            <Modal
              open={open}
              title="CONFIRM CART"
              width={35}
              onClose={() => {
                setOpen(false);
              }}
            >
              <CartForm
                data={selectedProduct}
                id={id}
                setOpen={setOpen}
                linkTo="/cart"
              ></CartForm>
            </Modal>
          ) : (
            <Modal
              open={open}
              title="Login to Your Cart"
              width={35}
              onClose={() => {
                setOpen(false);
              }}
            >
              <Link to="/authenticate">
                <RedirectToLogin></RedirectToLogin>
              </Link>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
  return <>{display}</>;
}

export default ProductDetail;
