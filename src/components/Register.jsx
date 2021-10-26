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
// import Authentication from "../modules/authentication";
import auth from "../modules/auth";
import errorHandler from "../modules/error";

const Register = () => {
  const dispatch = useDispatch();
  const { error, authenticated, message, email, password } = useSelector(
    (store) => store
  );
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  // const { authenticated } = useSelector((state) => state)

  const handleAuthentication = async () => {
    let response = await auth
      .signUp(email, password)
      .then((response) => {
        debugger;
        if (response.data.status === "success") {
          setOpen(true);
          dispatch({
            type: "SET_CURRENT_USER",
            payload: response.data,
          });
        } else errorHandler(error);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleSubmit = (event) => {
  //   Authentication.register(event).then(setOpen(true));
  //   document.getElementById("form-input-control-error-email").value = "";
  //   document.getElementById("form-input-password").value = "";
  //   document.getElementById("form-input-confirm-password").value = "";
  // };

  // auth
  // .signUp(
  //   {
  //     email: "john-doe@gmail.com",
  //     password: "myP@ssw0ord!",
  //     avatarUrl: "www.image.com/picture.jpg"
  //   },
  //   "www.url-after-confirmation.com"
  // )
  // .then(userDatas => {
  //   console.log(userDatas);
  // })
  // .catch(error => {
  //   console.log(error);
  // });

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
