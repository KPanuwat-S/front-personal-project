import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="flex justify-around mt-4 mb-8">
      {/* back button */}
      {currentStep === 1 ? (
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
      ) : (
        <Button
          onClick={() => {
            handleClick("back");
          }}
          text="BACK"
          primary={false}
        ></Button>
      )}

      {/* next button */}
      {currentStep === steps.length ? (
        ""
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
