import Yup from "utils/yup";

export const SignInSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});
