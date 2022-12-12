import React from "react";
import Input from "components/Input";
import Button from "components/Button";
import { Form, Formik } from "formik";
import { SignInSchema } from "./validations.js";
import Modal from "components/Modal/Modal";
import { login } from "firebase.js";
import { ROUTES } from "constants/routes.js";
import { useNavigate } from "react-router-dom";

export default function SignInModal({ visible }) {
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    const response = await login(values);
    console.log("response", response);

    if (response) {
      return navigate(ROUTES.HOME);
    } else {
      return navigate(ROUTES.ROOT);
    }
  };

  return (
    <Modal header="SignInModal  Başlık " visible={visible}>
      <Formik
        validationSchema={SignInSchema}
        initialValues={{
          email: "",
          name: "",
          username: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty, values }) => (
          <Form className="grid gap-y-1.5">
            <Input name="email" label="Email" />
            <Input type="password" name="password" label="Password" />
            <Button type="submit">Sign In</Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
