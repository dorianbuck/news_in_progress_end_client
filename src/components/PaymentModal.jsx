import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Input } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  injectStripe,
} from "react-stripe-elements";
import axios from "axios";

const PaymentModal = (props) => {
  const open = useSelector((state) => state.displayPaymentModal);
  const dispatch = useDispatch();
  const submitPayment = async () => {
    // get the currentUser's email
    // there is no current user at this time
    // get the token from Stripe
    const stripeResponse = await props.stripe.createToken();
    // make the call to API to make the charge and get the status of the charge from API
    const paymentState = await axios.post("/api/subscriptions", {
      params: {
        email: "thomas@craft.com", // hard-coded email. This will NOT work with the API
        stripeToken: stripeResponse.token.id,
      },
    });
    toast.success(paymentState.data.message)
   
    // hide the modal
    dispatch({ type: "SHOW_PAYMENT_MODAL", payload: false });
    dispatch({ type: "SET_SUBSCRIPTION", payload: true });

  };

  const inputStyle = {
    // margin: "0px",
    // maxWidth: "100%",
    // flex: "1 0 auto",
    // outline: "0px",
    // WebkitTapHighlightColor: "rgba(255, 255, 255, 0)",
    // textAlign: "left",
    // lineHeight: "1.21429em",
    // fontFamily: 'Lato, "Helvetica Neue", Arial, Helvetica, sans-serif',
    // padding: "0.678571em 1em",
    // background: "rgb(255, 255, 255)",
    // border: "1px solid rgba(34, 36, 38, 0.15)",
    // color: "rgba(0, 0, 0, 0.87)",
    // borderRadius: "0.285714rem",
    // transition: "box-shadow 0.1s ease 0s, border-color 0.1s ease 0s",
    // boxShadow: "none",
  };

  return (
    <>
      <Modal data-cy="subscription-modal" open={open}>
        <Modal.Header>Become a subscriber</Modal.Header>
        <Modal.Content>
          <Input data-cy="email" />
          <div data-cy="card-number">
            <CardNumberElement style={{ base: inputStyle }} />
          </div>
          <div data-cy="card-expiry">
            <CardExpiryElement />
          </div>
          <div data-cy="card-cvc">
            <CardCvcElement />
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Confirm"
            color="black"
            data-cy="confirm-payment-btn"
            onClick={() => submitPayment()}
          />
          <Button content="Cancel" labelPosition="right" />
        </Modal.Actions>
      </Modal>
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
    </>
  );
};

export default injectStripe(PaymentModal);
