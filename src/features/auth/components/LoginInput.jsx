import Input from "../../../components/Input";
import createClasses from "../../../utils/createClasses";

function LoginInput({
  inputTag,
  type,
  placeHolder,
  name,
  isInValid,
  value,
  onChange,
}) {
  // const defaultProperty =
  //   "bg-gray-200 px-4 py-2 w-full rounded-xl focus:outline-none focus:bg-gray-300";
  // const className = createClasses(
  //   defaultProperty,
  //   isInValid ? "border border-red-500 focus:ring-red-300" : ""
  // );
  // console.log(className);
  // return (
  //   <div>
  //     <p>{inputTag}</p>
  //     <input
  //       name={name}
  //       type={type}
  //       placeholder={placeHolder}
  //       className={className}
  //       onChange={onChange}
  //       value={value}
  //     />
  //   </div>
  // );
  return (
    <Input
      isInValid={isInValid}
      inputTag={inputTag}
      name={name}
      type={type}
      placeholder={placeHolder}
      onChange={onChange}
      value={value}
    />
  );
}

export default LoginInput;
