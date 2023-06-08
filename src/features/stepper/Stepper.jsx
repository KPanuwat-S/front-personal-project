import React, { useEffect, useRef, useState } from "react";

function Stepper({ steps, currentStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        };
        // count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        // count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
      count++;
    }
    console.log(newSteps);
    return newSteps;
  };

  useEffect(() => {
    // create object

    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepsState;
    // const current = updateStep(currentStep - 1, stepRef.current);
    const current = updateStep(currentStep, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  // ${
  //   step.selected
  //     ? "bg-gray-800 text-white font-bold border-none"
  //     : ""
  // }
  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-gray-800">
          <div
            className={`rounded-full transition duration-500 ease-in-out h-12 w-12 border-2 border-gray-200 flex items-center justify-center py-3  
            ${step.completed ? "bg-gray-800 bordor-none text-white" : ""}
            ${step.selected ? "border-3 border-gray-800 font-bold" : ""}
            `}
          >
            {step.completed ? (
              <span className="flex items-center">
                <i class="fa-solid fa-check text-white font-bold text-xl"></i>
              </span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium ${
              step.highlighted ? "text-gray-800" : "text-gray-400"
            }`}
          >
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ${
            step.completed ? "border-green-800" : " border-gray-200"
          }`}
        ></div>
      </div> // </div>
    );
  });

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
}

export default Stepper;
