import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Container, Button, Card } from "semantic-ui-react";
import { Article } from "../modules/article";
import { Link } from "react-router-dom";

const IndividualArticle = () => {
  const { article } = useSelector((state) => state);
  const { authenticated, subscribed } = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    Article.show(id);
  }, [id]);

  return (
    <Container text data-cy="displayed-article">
      <h3 data-cy="article-title">{article?.title}</h3>
      <p data-cy="article-authors">By: {article?.authors}</p>
      {!authenticated ? (
        <div>
          <Card fluid data-cy="register-wall">
            <h2 align="center">
              To read this article please consider registering for an account
            </h2>
            <ul>
              <strong>Benefits to registering:</strong>
              <li>Full access to our unique, groundbreaking journalism.</li>
              <li>Read and write comments about the articles you love.</li>
            </ul>
            <Button
              data-cy="register-button"
              color="orange"
              as={Link}
              to={{ pathname: "/register" }}
            >
              Register Now
            </Button>
            <strong align="center">Already signed up?</strong>
            <Button
              data-cy="sign-in-button"
              color="orange"
              as={Link}
              to={{ pathname: "/sign-in" }}
            >
              Sign in
            </Button>
          </Card>
        </div>
      ) : !subscribed ? (
        <Card fluid data-cy="paywall">
          <h2 align="center">
            To read this article please consider subscribing
          </h2>
          <ul>
            <strong>Benefits to subscribing:</strong>
            <li>Full access to our unique, groundbreaking journalism.</li>
            <li>Read and write comments about the articles you love.</li>
          </ul>
          <Button
            data-cy="subscription-button"
            color="orange"
            as={Link}
            to={{ pathname: "/subscribe" }}
          >
            Subscribe Now
          </Button>
        </Card>
      ) : (
        <>
          <br />
          <p data-cy="article-date">Published on: {article?.created_at}</p>
          <div className="body" data-cy="article-body">
            {article?.body}
          </div>
        </>
      )}
    </Container>
  );
};

export default IndividualArticle;
