import React from "react";
import Input from "../../../components/Input";
import useForm from "../../../hooks/useForm";
import { generalRegisterValidate } from "../../validators/validateRegister";
import InputErrorMessage from "../../auth/components/InputErrorMessage";
import StepperControl from "../../stepper/StepperControl";

function GeneralForm({ handleClick, currentStep, steps }) {
  const { input, handleChangeInput, error, handleSubmitForm } = useForm(
    {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
    generalRegisterValidate
  );

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
    } catch (err) {
      console.log(err);
      toast.error("Invalid email address or mobile number or password");
    }
  };
  return (
    <form
      // onSubmit={handleSubmitForm(onSubmit)}
      className="w-2/3 flex flex-col gap-10"
    >
      <div className="flex justify-between gap-10">
        <div className="w-full">
          <Input
            type="text"
            name="firstName"
            placeHolder="First Name"
            inputTag="First Name"
            isInValid={error.firstName}
            onChange={handleChangeInput}
            value={input.firstName}
          />
          <InputErrorMessage message={error.firstName} />
        </div>
        <div className="w-full">
          <Input
            type="text"
            name="lastName"
            placeHolder="Last Name"
            inputTag="Last Name"
            isInValid={error.lastName}
            onChange={handleChangeInput}
            value={input.lastName}
          />
          <InputErrorMessage message={error.lastName} />
        </div>
      </div>

      <div>
        <Input
          type="tel"
          name="phoneNumber"
          placeHolder="Phone Number"
          inputTag="Phone Number"
          isInValid={error.phoneNumber}
          onChange={handleChangeInput}
          value={input.email}
        />
        <InputErrorMessage message={error.phoneNumber} />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeHolder="Email"
          inputTag="Email"
          isInValid={error.email}
          onChange={handleChangeInput}
          value={input.email}
        />
        <InputErrorMessage message={error.email} />
      </div>
      <div>
        {" "}
        <Input
          type="password"
          name="password"
          placeHolder="Password"
          inputTag="Password"
          isInValid={error.password}
          onChange={handleChangeInput}
          value={input.password}
        />
        <InputErrorMessage message={error.password} />
      </div>
      <div>
        <Input
          type="password"
          name="confirmPassword"
          placeHolder="Confirm Password"
          inputTag="Confirm Password"
          isInValid={error.confirmPassword}
          onChange={handleChangeInput}
          value={input.confirmPassword}
        />
        <InputErrorMessage message={error.confirmPassword} />
      </div>
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </form>
  );
}

export default GeneralForm;
