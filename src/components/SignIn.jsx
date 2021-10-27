import React from "react";
import { Container, Form, Button, Input } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const { t } = useTranslation();
  const notify = () => toast.success("Sign In Successful");

  return (
    <Container>
      <Form data-cy="sign-in-form">
        <Form.Field
          name="email"
          data-cy="email-input"
          control={Input}
          label="Email"
          placeholder="example@email.com"
        />
        <Form.Field
          name="password"
          data-cy="password-input"
          control={Input}
          label={t("password")}
          type="password"
        />
        <Form.Field
          data-cy="btn-sign-in"
          control={Button}
          content={t("submit")}
          onClick={notify}
        />
      </Form>
      <div data-cy="sign-in-toast">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Container>
  );
};

export default SignIn;
