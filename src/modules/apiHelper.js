import axios from "axios";
import store from "../state/store/configureStore";

const Article = {
  async index(categoryName) {
    try {
      let response;
      if (categoryName) {
        response = await axios.get(
          "https://news-in-progress-api.herokuapp.com/api/articles/",
          { params: { category_name: categoryName } }
        );
      } else {
        response = await axios.get(
          "https://news-in-progress-api.herokuapp.com/api/articles/"
        );
      }
      store.dispatch({
        type: "SET_ARTICLES_INDEX",
        payload: response.data.articles,
      });
    } catch (error) {
      errorHandler(error);
    }
  },
  async show(articleId) {
    try {
      const response = await axios.get(
        `https://news-in-progress-api.herokuapp.com/api/articles/${articleId}`
      );
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
