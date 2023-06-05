import createClasses from "../utils/createClasses";

function Button({ text, primary }) {
  const defaultProperty = "rounded-xl px-10 py-2 ";
  const primaryProperty =
    "text-white bg-gray-800 hover:bg-gray-700 ease-in-out duration-300 ";
  const secondaryProperty =
    "text-gray-800 bg-white hover:bg-gray-800 text-white ease-in-out duration-300 ";
  const btnProperty = createClasses(
    defaultProperty,
    primary ? primaryProperty : secondaryProperty
  );

  return (
    <div>
      <button className={btnProperty}>{text}</button>
    </div>
  );
}

export default Button;
