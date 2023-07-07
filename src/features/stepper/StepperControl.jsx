// import React from "react";
// import Button from "../../components/Button";
// import { Link } from "react-router-dom";

// function StepperControl({ handleClick, currentStep, steps }) {
//   return (
//     <div className="flex justify-center gap-10 mx-auto w-2/3 mt-10 mb-8">
//       {/* back button */}
//       {currentStep === 0 ? (
//         <Link to="/authenticate">
//           {" "}
//           <button
//             onClick={() => {
//               handleClick();
//             }}
//             className="text-gray-900 bg-white border border-black hover:bg-gray-800 hover:text-white ease-out duration-300 rounded-xl px-10 py-2 "
//           >
//             BACK
//           </button>
//         </Link>
//       ) : currentStep !== 3 ? (
//         <button
//           onClick={() => {
//             handleClick("back");
//           }}
//           className="text-gray-900 bg-white border border-black hover:bg-gray-800 hover:text-white ease-out duration-300 rounded-xl px-10 py-2 "
//         >
//           BACK
//         </button>
//       ) : (
//         ""
//       )}

//       {currentStep === 3 && (
//         <Link to="/shop">
//           {console.log("test shop")}
//           <button
//             className="
//             text-white
//             bg-gray-800
//             hover:bg-gray-700
//             ease-in-out
//             duration-300
//             rounded-xl
//             px-10
//             py-2"
//             onClick={() => {}}
//           >
//             SHOP
//           </button>
//         </Link>
//       )}

//       {currentStep !== 0 && currentStep !== 3 ? (
//         <Link to="/shop">
//           <button
//             onClick={() => {}}
//             text="SKIP"
//             className="text-gray-900 bg-white border border-black hover:bg-gray-800 hover:text-white ease-out duration-300 rounded-xl px-10 py-2 "
//           >
//             SKIP
//           </button>
//         </Link>
//       ) : (
//         ""
//       )}

//       {/* next button */}
//       {currentStep === steps.length ? (
//         <Link to="/shop">
//           {/* <Button onClick={() => {}} text="SHOP" primary={true}></Button> */}
//         </Link>
//       ) : (
//         <button
//           type="submit"
//           onClick={() => {
//             handleClick("next");
//           }}
//           className="
//           text-white
//           bg-gray-800
//           hover:bg-gray-700
//           ease-in-out
//           duration-300
//           rounded-xl
//           px-10
//           py-2"
//         >
//           {currentStep === steps.length - 1 ? "COMPLETE" : "NEXT"}
//         </button>
//       )}
//     </div>
//   );
// }

// export default StepperControl;
