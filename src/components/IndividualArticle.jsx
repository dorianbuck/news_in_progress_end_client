import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { Article } from "../modules/apiHelper";
import { useSelector } from "react-redux";

const IndividualArticle = () => {
  const { article } = useSelector((state) => state);

  useEffect(() => {
    Article.show(0);
  }, []);

  return (
    <Container text data-cy="displayed-article">
      <h3 data-cy="article-title">{article?.title}</h3>
      <p data-cy="article-authors">By: {article?.authors}</p>
      <br />
      <p data-cy="article-date">Published on: {article?.created_at}</p>
      <div className="body" data-cy="article-body">
        {article?.body}
      </div>
    </Container>
  );
};

export default IndividualArticle;
