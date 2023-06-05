import { useState } from "react";

function Search() {
  const [value, setValue] = useState();
  const [icon, setIcon] = useState(true);
  const inputHandler = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setIcon(false);
  };
  return (
    <div className="relative">
      <input
        type="text"
        className="w-[150px] h-[30px] bg-gray-200 rounded-xl"
        onChange={inputHandler}
        value={value}
        onClick={clickHandler}
      />
      {icon && (
        <i class="fa-solid fa-magnifying-glass absolute top-2 left-2 text-gray-400"></i>
      )}
    </div>
  );
}

export default Search;
