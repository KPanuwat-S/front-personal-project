import React from "react";

function SubmitButton({ text, width }) {
  let defaultProperty =
    "rounded-xl px-10 py-2 text-white bg-gray-800 hover:bg-gray-700 ease-in-out duration-300";
  if (width) defaultProperty += { width };
  return <input className={defaultProperty} type="submit" value={text} />;
}

export default SubmitButton;
