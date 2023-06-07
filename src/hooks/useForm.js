import { useState } from "react";

export default function (initailState, validate) {
  const [input, setInput] = useState(initailState);
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (onSubmit) => async (e) => {
    e.preventDefault();
    const result = validate(input);

    if (result) {
      return setError(result);
    }
    setError({});
    await onSubmit(input);
    setInput(initailState);
  };
  return { input, handleChangeInput, error, handleSubmitForm };
}
