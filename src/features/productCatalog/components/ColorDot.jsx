import createClasses from "../../../utils/createClasses";
import createColor from "../../../utils/createColor";

function ColorDot({ color }) {
  const defaultColorDot = "w-2 h-2 rounded-full border border-gray-400";
  console.log("color dot", color);
  // const colorDotProperty = createClasses(defaultColorDot, color);
  const colorText = createColor(color);
  console.log("colortext", colorText);
  const style = {
    backgroundColor: colorText,
  };
  // const colorStyle = (
  //   <div>
  //     <div className="h-2 w-2 border rounded-full" style={style}></div>
  //   </div>
  // );
  return <div className="h-2 w-2 border rounded-full" style={style}></div>;
}

export default ColorDot;
