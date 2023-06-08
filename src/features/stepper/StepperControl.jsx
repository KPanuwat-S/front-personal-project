import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="flex justify-center gap-10 mx-auto w-2/3 mt-10 mb-8">
      {/* back button */}
      {currentStep === 0 ? (
        <Link to="/authenticate">
          {" "}
          <Button
            onClick={() => {
              handleClick();
            }}
            text="BACK"
            primary={false}
          ></Button>
        </Link>
      ) : currentStep !== 3 ? (
        <Button
          onClick={() => {
            handleClick("back");
          }}
          text="BACK"
          primary={false}
        ></Button>
      ) : (
        ""
      )}

      {currentStep === 3 && (
        <Link to="/shop">
          {console.log("test shop")}
          <Button onClick={() => {}} text="SHOP" primary={true}></Button>
        </Link>
      )}

      {currentStep !== 0 && currentStep !== 3 ? (
        <Link to="/shop">
          <Button onClick={() => {}} text="SKIP" primary={false}></Button>
        </Link>
      ) : (
        ""
      )}

      {/* next button */}
      {currentStep === steps.length ? (
        <Link to="/shop">
          {/* <Button onClick={() => {}} text="SHOP" primary={true}></Button> */}
        </Link>
      ) : (
        <Button
          onClick={() => {
            handleClick("next");
          }}
          text={currentStep === steps.length - 1 ? "COMPLETE" : "NEXT"}
          primary={true}
        ></Button>
      )}
    </div>
  );
}

export default StepperControl;
