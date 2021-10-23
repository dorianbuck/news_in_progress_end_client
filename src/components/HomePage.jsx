import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Loader,
  Container,
  Image,
  Header,
  List,
  Item,
} from "semantic-ui-react";
import _ from "lodash";
import { Article } from "../modules/article";
import ArticleItem from "./ArticleItem";

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
          <Grid padded column="equal" stackable celled columns="3">
            <Grid.Column>
              <Header>Top Story</Header>
            </Grid.Column>
            <Grid.Row>
              <Grid.Column data-cy="top-story">
                <Header data-cy="title">Things are happening</Header>
                <Item data-cy="lede">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quidem velit provident! Quos perspiciatis exercitationem esse
                  facilis illum doloribus, architecto atque veritatis labore
                  voluptas quis, quia numquam qui cum recusandae!
                </Item>
              </Grid.Column>
              <Grid.Column>
                <Image src="https://picsum.photos/300"></Image>
              </Grid.Column>
              <Grid.Column data-cy="most-read-articles">
                <Header>Most Read Articles</Header>
                <List as="ol" divided verticalAlign="middle">
                  <List.Item data-cy="story-1" as="li">
                    News Story Title
                  </List.Item>
                  <List.Item data-cy="story-2" as="li">
                    News Story Title
                  </List.Item>
                  <List.Item data-cy="story-3" as="li">
                    News Story Title
                  </List.Item>
                  <List.Item data-cy="story-4" as="li">
                    News Story Title
                  </List.Item>
                  <List.Item data-cy="story-5" as="li">
                    News Story Title
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>{articleList}</Grid.Row>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default HomePage;
