import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Form,
  Input,
  Button,
  Modal,
  Header,
} from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import auth from "../modules/auth";
import errorHandler from "../modules/error";

const Register = () => {
  const dispatch = useDispatch();
  const { error, authenticated, message, email, password } = useSelector(
    (store) => store
  );
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleAuthentication = async () => {
    await auth
      .signUp(email, password)
      .then((response) => {
        if (response.data.status === "success") {
          setOpen(true);
          dispatch({
            type: "SET_CURRENT_USER",
            payload: response.data,
          });
        }
      })
      .catch((error) => {
        setOpen(true);
        errorHandler(error);
      });
  };

  return (
    <Container>
      <Form data-cy="register-form">
        <Form.Field
          name="email"
          data-cy="email-input"
          control={Input}
          label="Email"
          id="form-input-control-error-email"
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
          name="confirmPassword"
          data-cy="confirm-password-input"
          control={Input}
          label={t("confirmPassword")}
          type="password"
        />
        <Form.Field
          data-cy="btn-signup"
          control={Button}
          content={t("submit")}
          onClick={() => handleAuthentication()}
        />
      </Form>
      <Modal
        basic
        closeIcon
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
      >
        <Modal.Content>
          <Header inverted data-cy="registration-message">
            {authenticated && t("registrationSuccessful")}
            {error && message}
          </Header>
        </Modal.Content>
      </Modal>
    </Container>
  );
};

export default Register;
