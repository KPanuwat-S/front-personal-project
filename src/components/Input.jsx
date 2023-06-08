import createClasses from "../utils/createClasses";

function Input(props) {
  const { inputTag, isInValid, ...property } = props;
  const defaultProperty =
    "bg-gray-100 px-4 py-2 w-full rounded-xl focus:outline-none focus:bg-gray-200";
  const className = createClasses(
    defaultProperty,
    isInValid ? "border border-red-500 focus:ring-red-300" : ""
  );
  // console.log("hi");
  return (
    <div>
      {/* <input
        name={name}
        type={type}
        placeholder={placeHolder}
        className={className}
        onChange={onChange}
        value={value}
      /> */}

      <p>{inputTag}</p>
      <input {...property} className={className} />
    </div>
  );
}

export default Input;
