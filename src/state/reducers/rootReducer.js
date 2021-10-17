const rootReducer = (state, action) => {
  switch (action.type) {
    case "ERROR_MESSAGE":
      return {
        ...state,
        error: true,
        message: action.payload,
      };
    case "SET_ARTICLES_INDEX":
      return {
        ...state,
        articles: action.payload,
        article: null,
        article_id: null,
      };
    case "SHOW_ARTICLE":
      return {
        ...state,
        article: action.payload,
      };
    case "SET_ARTICLE_ID":
      return {
        ...state,
        article_id: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
