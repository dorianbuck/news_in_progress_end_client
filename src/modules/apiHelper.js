import axios from "axios";
import store from "../state/store/configureStore";

const Article = {
  async index() {
    try {
      const response = await axios.get("https://news-in-progress-api.herokuapp.com/api/articles/");
      store.dispatch({
        type: "SET_ARTICLES_INDEX",
        payload: response.data.articles,
      });
    } catch (error) {
      errorHandler(error);
    }
  },
  async show(article_id) {
    try {
      const response = await axios.get(`https://news-in-progress-api.herokuapp.com/api/articles/${article_id}`);
      store.dispatch({
        type: "SHOW_ARTICLE",
        payload: response.data.article,
      });
    } catch (error) {
      errorHandler(error);
    }
  },
};

const errorHandler = (error) => {
  if (error.response.status) {
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

export { Article };
