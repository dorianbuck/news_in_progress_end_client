import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Form,
  Input,
  Button,
  Modal,
  Header,
} from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import Authentication from "../modules/authentication";

const Register = () => {
  const { error, authenticated, message } = useSelector((store) => store);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    Authentication.register(event).then(setOpen(true));
    document.getElementById("form-input-control-error-email").value = "";
    document.getElementById("form-input-password").value = "";
    document.getElementById("form-input-confirm-password").value = "";
  };

  return (
    <Container>
      <Form data-cy="register-form" onSubmit={handleSubmit}>
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
          id="form-input-password"
          data-cy="password-input"
          control={Input}
          label={t("password")}
          type="password"
        />
        <Form.Field
          name="confirmPassword"
          id="form-input-confirm-password"
          data-cy="confirm-password-input"
          control={Input}
          label={t("confirmPassword")}
          type="password"
        />
        <Form.Field
          data-cy="btn-signup"
          control={Button}
          id="form-button-control-public"
          content={t("submit")}
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
