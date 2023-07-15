import React from "react";
import Input from "../../../components/Input";
import useForm from "../../../hooks/useForm";
import { generalRegisterValidate } from "../../validators/validateRegister";
import InputErrorMessage from "../../auth/components/InputErrorMessage";
// import StepperControl from "../../stepper/StepperControl";
import { useDispatch } from "react-redux";
import { getNewUserInfo, registerAsync } from "../../auth/slice/authSlice";
import { Link } from "react-router-dom";
function GeneralForm({ handleClick, currentStep, steps }) {
  const dispatch = useDispatch();
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
      console.log("data", data);

      dispatch(getNewUserInfo(data));
      // await dispatch(registerAsync(data)).unwrap();

      handleClick("next");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleSubmitForm(onSubmit)}
      className="mb-[120px] w-2/3 flex flex-col gap-10"
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
          value={input.phoneNumber}
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
      <div className="flex gap-5 items-center justify-center">
        <Link to="/authenticate">
          <button
            onClick={() => {
              handleClick();
            }}
            className="text-gray-900 bg-white border border-black hover:bg-gray-800 hover:text-white ease-out duration-300 rounded-xl px-10 py-2 "
          >
            BACK
          </button>
        </Link>
        <button
          className="
           text-white
           bg-gray-800
           hover:bg-gray-700
           ease-in-out
           duration-300
           rounded-xl
           px-10
           py-2"
          type="submit"
        >
          SUBMIT
        </button>
      </div>
      {/* </Link> */}
      {/* <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      /> */}
    </form>
  );
}

export default GeneralForm;
