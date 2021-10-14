import axios from "axios";

const articlesIndex = async () => {
  try {
    const response = await axios.get("/api/articles/");
    return response.data.articles;
  } catch (error) {
    errorHandler(error);
  }

  // async show(id) {
  //   try {

  //     const response = await axios.get(`/api/articles/${id}`);
  //     return response.data.article;
  //   } catch (error) {
  //     errorHandler(error)
  //   }
  // },
};

const errorHandler = (error) => {
  alert(
    "We are sorry! Your request can not be processed at this time. Try again later"
  );
};

export { articlesIndex };
