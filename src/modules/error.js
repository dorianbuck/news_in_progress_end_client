import store from "../state/store/configureStore";

const errorHandler = (error) => {
  debugger;
  if (error.response.status === 401) {
    store.dispatch({
      type: "ERROR_MESSAGE",
      paylaod: error.response.data.errors[0],
    });
  } else if (error?.response?.status) {
    store.dispatch({
      type: "ERROR_MESSAGE",
      payload:
        "We are sorry! Your request can not be processed at this time. Try again later",
    });
  } else {
    store.dispatch({
      type: "ERROR_MESSAGE",
      payload: error.message,
    });
  }
};

export default errorHandler;
