const rootReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
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
      };
    case "SHOW_ARTICLE":
      return {
        ...state,
        article: action.payload,
      };
    case "SET_CURRENT-USER":
      return {
        ...state,
        currentUser: action.payload,
        authenticated: true,
      };
    default:
      return state;
  }
};
export default rootReducer;
