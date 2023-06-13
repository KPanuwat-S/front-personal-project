import React, { useEffect, useState } from "react";

function QuantityInput({ price, getQuantity }) {
  const [value, setValue] = useState(1);

  useEffect(() => {
    getQuantity(value);
  }, [value]);

  const increaseHandler = (e) => {
    e.preventDefault();
    setValue((value) => ++value);
  };
  const decreaseHandler = (e) => {
    e.preventDefault();
    if (value > 1) setValue((value) => value - 1);
  };

  return (
    <div className="items-center justify-center w-1/2">
      <label htmlFor="Quantity" className="sr-only">
        Quantity
      </label>

      <div className="flex items-center border border-gray-200 rounded">
        <button
          type="button"
          className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
          onClick={decreaseHandler}
        >
          -
        </button>

        <input
          type="number"
          id="Quantity"
          value={value}
          min={1}
          className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
        />

        <button
          type="button"
          className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
          onClick={increaseHandler}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityInput;
