import React, { useState } from "react";
import Stepper from "../stepper/Stepper";
// import StepperControl from "../stepper/StepperControl";
import GeneralForm from "./components/GeneralForm";
import AddressForm from "./components/AddressForm";
import PaymentForm from "./components/PaymentForm";
import PageName from "../../components/PageName";
import { StepperContext } from "../stepper/StepperContext";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Welcoming from "./Welcoming";

function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = ["General Info.", "Address Info."];

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? ++newStep : --newStep;
    setCurrentStep(newStep);
    console.log("running");
  };
  const displaySteps = (step) => {
    return (
      <div className="mt-10 flex flex-col items-center justify-center">
        {step === 0 && (
          <GeneralForm
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
        {step === 1 && (
          <AddressForm
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}

        {step === 2 && (
          <div className="">
            <Welcoming></Welcoming>
            {/* <Link to="/shop">
              <div className="p-2 px-5 rounded-xl text-white bg-gray-800 hover:bg-gray-700 ease-in-out duration-300">
                SHOP
              </div>
            </Link> */}
          </div>
        )}
      </div>
    );
  };

  // const getNewStep = (newStep) => {
  //   return newStep;
  // };
  return (
    <div className="mt-[120px]">
      <PageName text="Create New Account" />
      <div className="w-2/3 mt-[60px] mx-auto">
        <div className="">
          <Stepper
            steps={steps}
            currentStep={currentStep}
            // getNewStep={getNewStep}
          />
        </div>
        <div>
          <StepperContext.Provider
            value={{ userData, setUserData, finalData, setFinalData }}
          >
            {displaySteps(currentStep)}
          </StepperContext.Provider>
        </div>

        {/* <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        /> */}
      </div>
    </div>
  );
}

export default RegisterForm;
