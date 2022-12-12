import React from "react";
import Input from "components/Input";
import Button from "components/Button";
import { Form, Formik } from "formik";
import { SignUpSchema } from "./validations";
import Modal from "components/Modal/Modal";
import { register } from "firebase.js";

export default function SignUpModal({ visible }) {
  const handleSubmit = async (values, actions) => {
    console.log("values", values);
    const response = await register(values);

    console.log(response);
    /*if (response) {
      navigate(location.state?.return_url || "/", {
        replace: true,
      });
    } */
  };

  return (
    <Modal header="SignUpModal Başlık " visible={visible}>
      <Formik
        validationSchema={SignUpSchema}
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
            <Input name="name" label="Name" />
            <Input name="username" label="Username" />
            <Input type="password" name="password" label="Password" />
            <Button type="submit">Sign up</Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
