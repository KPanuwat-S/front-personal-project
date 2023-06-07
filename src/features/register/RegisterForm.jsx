import React, { useState } from "react";
import Stepper from "../stepper/Stepper";
import StepperControl from "../stepper/StepperControl";
import GeneralForm from "./components/GeneralForm";
import AddressFrom from "./components/AddressFrom";
import PaymentForm from "./components/PaymentForm";
import PageName from "../../components/PageName";
import { StepperContext } from "../stepper/StepperContext";

function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = ["General Info.", "Address Info.", "Payment Info."];

  const displaySteps = (step) => {
    return (
      <div className="mt-10">
        {step === 0 && <GeneralForm />}
        {step === 1 && <AddressFrom />}
        {step === 2 && <PaymentForm />}
      </div>
    );
  };
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  // const getNewStep = (newStep) => {
  //   return newStep;
  // };
  return (
    <div className="mt-[120px]">
      <PageName text="Create New Account" />
      <div className="w-2/3 mt-[60px] mx-auto">
        <div>
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
            {" "}
            {displaySteps(currentStep)}
          </StepperContext.Provider>
        </div>
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      </div>
    </div>
  );
}

export default RegisterForm;
