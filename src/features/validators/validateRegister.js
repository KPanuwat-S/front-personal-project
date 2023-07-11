import Joi from "joi";

const generalRegisterSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "First name is required.",
  }),
  lastName: Joi.string()
    .trim()
    .required()
    .messages({ "string.empty": "Last name is required." }),
  phoneNumber: Joi.string()
    .trim()
    .pattern(/^[0-9]{10}$/)
    .messages({ "string.empty": "Invalid Phone Number" }),
  email: Joi.string().required().email({ tlds: false }).messages({
    "string.empty": "Invalid Email",
  }),
  password: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9]{6,30}$/))
    .trim()
    .required()
    .messages({
      "string.empty": "Password is required.",
      "string.pattern.base":
        "Password must be at least 6 characters and contain only alphabet and number.",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
    "any.only": "Password and confirm password did not match.",
    "string.empty": "Confirm password is required.",
  }),
});

export const generalRegisterValidate = (input) => {
  const { error } = generalRegisterSchema.validate(input, {
    abortEarly: false,
  });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      console.log("test");
      return acc;
    }, {});
  }
};

export const addressRegisterSchemaValidate = (input) => {};
