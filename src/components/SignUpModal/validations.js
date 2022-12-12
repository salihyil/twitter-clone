import Yup from "utils/yup";

export const SignUpSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  name: Yup.string().required(),
  username: Yup.mixed()
    .required()
    .test({
      message: "Geçerli bir kullanıcı adı girin",
      test: (str) => /^[a-z0-9._]+$/i.test(str),
    }),
  password: Yup.string().required(),
});
