// import axios from "axios";
// import store from "../state/store/configureStore";
// import errorHandler from "./error"

// const Authentication = {
//   async register(event) {
//     try {
//       await axios({
//         method: "post",
//         url: "/api/auth",
//         params: {
//           email: event.target.email.value,
//           password: event.target.password.value,
//           password_confirmation: event.target.confirmPassword.value,
//         },
//       }).then((response) => {
//         if (response.data.status === "success") {
//           store.dispatch({
//             type: "SET_CURRENT_USER",
//             payload: response.data.data,
//           });
//           return true
//         }
//       });
//     } catch (error) {
//       errorHandler(error);
//     }
//   },
// };

// export default Authentication;
