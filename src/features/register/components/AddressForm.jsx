import React, { useEffect, useState } from "react";
// import StepperControl from "../../stepper/StepperControl";
import useForm from "../../../hooks/useForm";
import { addressRegisterSchemaValidate } from "../../validators/validateRegister";
import Input from "../../../components/Input";
import InputErrorMessage from "../../auth/components/InputErrorMessage";
import { PronvinceTh } from "../../../data/ProvinceTH";
import { CityTH } from "../../../data/CityTH";
import { DistrictTh } from "../../../data/DistrictTH";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function AddressForm({ handleClick, currentStep, steps }) {
  const [addressData, setAddressData] = useState({
    province: "",
    city: "",
    district: "",
    zipCode: "",
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
      await dispatch(registerAsync(data)).unwrap();
    } catch (err) {
      console.log(err);
      toast.error("Invalid email address or mobile number or password");
    }
  };

  const selectedProvince = PronvinceTh.find(
    (el) => el.name_th === addressData.province
  );

  const selectedCity = CityTH.find((el) => el.name_th === addressData.city);
  const setZipCode = (e) => {
    const district = DistrictTh.find((el) => el.name_th === e.target.value);
    const newData = { ...addressData, zipCode: district.zip_code };
    setAddressData(newData);
  };
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
            className="bg-gray-100 px-4 py-2 w-full rounded-xl focus:outline-none focus:bg-gray-200"
            onChange={selectHandler}
          >
            {" "}
            <option className="text-gray-300">SELECT PROVINCE</option>
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
            name="city"
            id="city"
            className="bg-gray-100 px-4 py-2 w-full rounded-xl focus:outline-none focus:bg-gray-200"
            onChange={selectHandler}
          >
            <option>SELECT CITY</option>
            {CityTH.map((el) => {
              if (el.province_id === selectedProvince?.id)
                return <option value={el.name_th}>{el.name_th}</option>;
            })}
          </select>
          <InputErrorMessage message={error.city} />
        </div>
      </div>

      <div className="flex justify-between gap-10 items-center ">
        <div className="w-full">
          {/* 
          DISTRICT
          */}
          <label htmlFor="province">District</label>
          <select
            name="district"
            id="district"
            className="bg-gray-100 px-4 py-2 w-full rounded-xl focus:outline-none focus:bg-gray-200"
            onChange={(e) => {
              selectHandler(e);
              setZipCode(e);
            }}
          >
            <option>SELECT DISTRICT</option>
            {DistrictTh.map((el) => {
              if (el.amphure_id === selectedCity?.id)
                return <option value={el.name_th}>{el.name_th}</option>;
            })}
          </select>
          <InputErrorMessage message={error.district} />
        </div>
        <div className="w-full">
          <label htmlFor="zipCode">ZIP Code</label>
          <Input
            type="text"
            name="zipCode"
            id="zipCode"
            placeHolder="ZIP Code"
            onChange={selectHandler}
            className="w-full"
            value={addressData.zipCode}
          />
        </div>
      </div>
      <div>
        {" "}
        <label htmlFor="zipCode">Address Line</label>
        <Input
          type="text"
          name="addressLine"
          id="addressLine"
          placeHolder="Address Line"
          onChange={selectHandler}
          className="w-full"
          value={addressData.addressLine}
        />
      </div>
      <div className="flex gap-5 justify-center items-center">
        <Link to="/profilePage">
          <button
            onClick={() => {
              handleClick();
            }}
            className="text-gray-900 bg-white border border-black hover:bg-gray-800 hover:text-white ease-out duration-300 rounded-xl px-10 py-2 "
          >
            LATER
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
      {/* <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      /> */}
    </form>
  );
}

export default AddressForm;
