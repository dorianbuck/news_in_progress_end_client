import React from "react";
import { Container, Form, Input, Button } from "semantic-ui-react";
import Authentication from "../modules/authentication";

const RegisterPage = () => {
  const handleSubmit = (event) => {
    Authentication.register(event);
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
          data-cy="password-input"
          control={Input}
          label="Password"
          type="password"
        />
        <Form.Field
          name="confirmPassword"
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
    </Container>
  );
};

export default RegisterPage;
