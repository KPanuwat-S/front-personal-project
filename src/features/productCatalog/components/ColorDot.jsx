import createClasses from "../../../utils/createClasses";

function ColorDot({ color }) {
  const defaultColorDot = "w-2 h-2 rounded-full ";
  const colorDotProperty = createClasses(defaultColorDot, color);

  return <div className={colorDotProperty}></div>;
}

export default ColorDot;
