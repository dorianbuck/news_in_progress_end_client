import React from "react";
import { Container, Form, Input, Button } from "semantic-ui-react";

const RegisterPage = () => {
  return (
    <Container>
      <Form>
        <Form.Field
          data-cy="email-input"
          control={Input}
          label="Email"
          id="form-input-control-error-email"
          placeholder="example@email.com"
        />
        <Form.Field
          data-cy="password-input"
          control={Input}
          label="Password"
          type="password"
        />
        <Form.Field
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
