import { Link } from "react-router-dom";
import LoginInput from "./LoginInput";
import Button from "../../../components/Button";
import SubmitButton from "../../../components/SubmitButton";
import useForm from "../../../hooks/useForm";
import validateLogin from "../../validators/validateLogin";
import InputErrorMessage from "./InputErrorMessage";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../slice/authSlice";
import ErrorAlert from "../../../components/ErrorAlert";
import { useState } from "react";

function LoginForm() {
  const dispatch = useDispatch();
  const [shownError, setShownError] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const { input, handleChangeInput, error, handleSubmitForm } = useForm(
    {
      email: "",
      password: "",
    },
    validateLogin
  );

  const onSubmit = async (data) => {
    try {
      console.log("onSubmit");
      await dispatch(loginAsync(data)).unwrap();
      toast.success(`Welcome !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (err) {
      setShownError(true);
      seterrorMessage(err);
      console.log(err);
    }
  };

  return (
    <form
      className="flex flex-col gap-5 flex-5 mt-5 relative"
      onSubmit={handleSubmitForm(onSubmit)}
    >
      <LoginInput
        type="email"
        name="email"
        placeHolder="Email"
        inputTag="Email"
        isInValid={error.email}
        onChange={handleChangeInput}
        value={input.email}
      />
      <InputErrorMessage message={error.email} />
      <LoginInput
        type="password"
        name="password"
        placeHolder="Password"
        inputTag="Password"
        isInValid={error.password}
        onChange={handleChangeInput}
        value={input.password}
      />
      <InputErrorMessage message={error.password} />
      <div className="flex justify-between">
        <div>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            className="mx-2"
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <Link>
          <p className="hover:underline">I Forgot My Password</p>
        </Link>
      </div>
      <SubmitButton width="w-full" text="LOG IN" />
    </form>
  );
}

export default LoginForm;
