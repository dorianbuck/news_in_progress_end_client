import React, { useState } from "react";
import { Container, Form, Button, Input } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../modules/auth";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [redirect, setRedirect] = useState(false);
  const delay = require("delay");
  const notify = () => toast.success("Sign In Successful");

  const handleSignIn = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const signInStatus = auth.signIn(email, password);
    dispatch({
      type: "SET_CURRENT_USER",
      payload: signInStatus.data,
    });

    (async () => {
      await delay(2000);
      setRedirect(true)
    })();
  };

  return (
    <>
      {redirect ? (
        <>
          <Redirect to="/" />
        </>
      ) : (
        <Container>
          <Form data-cy="sign-in-form" onSubmit={handleSignIn}>
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
              autoClose={2000}
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
      )}
    </>
  );
};

export default SignIn;
