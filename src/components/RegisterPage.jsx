import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Form,
  Input,
  Button,
  Modal,
  Header,
} from "semantic-ui-react";
import Authentication from "../modules/authentication";

const RegisterPage = () => {
  const { error, authenticated } = useSelector((store) => store)
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    Authentication.register(event);
    document.getElementById('form-input-control-error-email').value = ""
    document.getElementById('form-input-password').value = ""
    document.getElementById('form-input-confirm-password').value = ""
  };

  useEffect(() => {
    if (error) { console.log("Yo there's an error")
    } else if (authenticated) {
      setOpen(true)
    }
  }, [authenticated, error])

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
          label="Password"
          type="password"
        />
        <Form.Field
          name="confirmPassword"
          id="form-input-confirm-password"
          data-cy="confirm-password-input"
          control={Input}
          label="Confirm Password"
          type="password"
        />
        <Form.Field
          data-cy="btn-signup"
          control={Button}
          id="form-button-control-public"
          content="Submit"
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
            Registration successful
          </Header>
        </Modal.Content>
      </Modal>
    </Container>
  );
};

export default RegisterPage;
