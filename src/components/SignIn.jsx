import React from "react";
import { Container, Form, Button, Input } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Form data-cy="sign-in-form" >
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
          data-cy="btn-signin"
          control={Button}
          content={t("submit")}
        />
      </Form>
    </Container>
  );
};

export default SignIn;
