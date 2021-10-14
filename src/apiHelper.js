import axios from 'axios';

const Article = {
  async index() {
    const response = await axios.get("http");
    return response.data.articles;
  },
  async show(id) {
    const response = await axios.get("http");
    return response.data.id;
  },
};

export default Article;
