import React, { useState } from "react";
import StepperControl from "../../stepper/StepperControl";
import useForm from "../../../hooks/useForm";
import { addressRegisterSchemaValidate } from "../../validators/validateRegister";
import Input from "../../../components/Input";
import InputErrorMessage from "../../auth/components/InputErrorMessage";
import { PronvinceTh } from "../../../data/ProvinceTH";
import { CityTH } from "../../../data/CityTH";
import { DistrictTh } from "../../../data/DistrictTH";
function AddressFrom({ handleClick, currentStep, steps }) {
  const [addressData, setAddressData] = useState({
    province: "",
    city: "",
    district: "",
  });
  const { input, handleChangeInput, error, handleSubmitForm } = useForm(
    {
      province: "",
      city: "",
      district: "",
      street: "",
      addressLine: "",
      zipCode: "",
    },
    addressRegisterSchemaValidate
  );

  const selectHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    const newData = { ...addressData, [e.target.name]: e.target.value };
    setAddressData(newData);
  };

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
    } catch (err) {
      console.log(err);
      toast.error("Invalid email address or mobile number or password");
    }
  };

  const ProvinceID = PronvinceTh.find((el) => {
    return el.name_th === addressData.province;
  });

  console.log("Province Id:", ProvinceID);

  return (
    <form
      // onSubmit={handleSubmitForm(onSubmit)}
      className="w-2/3 flex flex-col gap-10"
    >
      <div className="flex justify-between gap-10">
        <div className="w-full">
          {/* 
          PROVINCE
          */}
          <label htmlFor="province">Province</label>
          <select
            name="province"
            id="province"
            className="bg-gray-200 px-4 py-2 w-full rounded-xl focus:outline-none focus:bg-gray-300"
            onChange={selectHandler}
          >
            {PronvinceTh.map((el) => {
              return <option value={el.name_th}>{el.name_th}</option>;
            })}
          </select>
          <InputErrorMessage message={error.province} />
        </div>
        {/* 
          CITY
          */}
        <div className="w-full">
          <label htmlFor="province">City</label>
          <select
            name="province"
            id="province"
            className="bg-gray-200 px-4 py-2 w-full rounded-xl focus:outline-none focus:bg-gray-300"
          >
            {CityTH.map((el) => {
              if (el.province_id === ProvinceID?.id)
                return <option value={el.name_th}>{el.name_th}</option>;
            })}
          </select>
          <InputErrorMessage message={error.province} />
        </div>
      </div>
      <div className="flex justify-between gap-10">
        <div className="w-full">
          {/* 
          PROVINCE
          */}
          <label htmlFor="province">Province</label>
          <select
            name="province"
            id="province"
            className="bg-gray-200 px-4 py-2 w-full rounded-xl focus:outline-none focus:bg-gray-300"
            onChange={selectHandler}
          >
            {PronvinceTh.map((el) => {
              return <option value={el.name_th}>{el.name_th}</option>;
            })}
          </select>
          <InputErrorMessage message={error.province} />
        </div>
        {/* 
          CITY
          */}
        <div className="w-full">
          <label htmlFor="province">City</label>
          <select
            name="province"
            id="province"
            className="bg-gray-200 px-4 py-2 w-full rounded-xl focus:outline-none focus:bg-gray-300"
          >
            {CityTH.map((el) => {
              if (el.province_id === ProvinceID?.id)
                return <option value={el.name_th}>{el.name_th}</option>;
            })}
          </select>
          <InputErrorMessage message={error.province} />
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

export default AddressFrom;
