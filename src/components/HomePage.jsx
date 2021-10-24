import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Loader, Container, Header } from "semantic-ui-react";
import _ from "lodash";
import { Article } from "../modules/article";
import ArticleItem from "./ArticleItem";
import TopStory from "./TopStory";
import MostRead from "./MostRead";

const HomePage = () => {
  const { articles } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const uniqueCategories = () => {
    let categories = articles.map((article) => {
      return article.category_name;
    });
    dispatch({ type: "SET_CATEGORIES", payload: _.uniq(categories) });
  };

  useEffect(() => {
    setLoading(true);
    Article.index().then(() => setLoading(false));
  }, []);

  useEffect(() => {
    uniqueCategories();
    // eslint-disable-next-line
  }, [articles]);

  let articleList = articles.map((articleItem) => {
    return <ArticleItem articleItem={articleItem} key={articleItem.id} />;
  });

  return (
    <>
      {loading ? (
        <Loader active data-cy="loading-symbol">
          Loading
        </Loader>
      ) : (
        <Container text>
          <Grid padded column="equal" stackable columns="3">
            <Grid.Column>
              <Header>Top Story</Header>
            </Grid.Column>
            <Grid.Row>
              <TopStory />
              <MostRead />
            </Grid.Row>
            <Grid.Row>{articleList}</Grid.Row>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default HomePage;
