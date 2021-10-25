import axios from "axios";
import store from "../state/store/configureStore";

const Authentication = {
  async register(event) {
    let response;
    try {
      response = await axios({
        method: "post",
        url: "/api/auth",
        params: {
          email: event.target.email.value,
          password: event.target.password.value,
          password_confirmation: event.target.confirmPassword.value,
        },
      }).then((response) => {
        if (response.data.status === "success") {
          debugger
          store.dispatch({
            type: "SET_CURRENT_USER",
            payload: response.data.data,
          });
        }
      });
    } catch (error) {
    }
  },
};

export default Authentication;
