import React, { useState } from "react";
import { Container, Form, Button, Input } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../modules/auth";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import errorHandler from "../modules/error";

const SignIn = () => {
  const { message, error, authenticated } = useSelector((store) => store);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [redirect, setRedirect] = useState(false);
  const delay = require("delay");
  
  let notify
  if (!authenticated){
    notify = () => toast.success(t("signIn"));
  }else{
    notify = () => toast.error(message);
  }

  const handleSignIn = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const signInStatus = auth.signIn(email, password);
      debugger;
      dispatch({
        type: "SET_CURRENT_USER",
        payload: signInStatus.data,
      });

      (async () => {
        await delay(2000);
        setRedirect(true);
      })();
    } catch (error) {
      errorHandler(error);
    }
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
