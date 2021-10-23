import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Loader,
  Container,
  Image,
  Header,
  List,
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
          <Grid padded column="equal"  stackable>
            <Grid.Row>
              <Grid.Column width="5">
                <Header >Top News Story</Header>
                </Grid.Column>
                <Grid.Column width="5">
                  </Grid.Column>
                <Grid.Column width="4">
                 <Header>Most Read</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="5">
                <Header>Main Story</Header>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                quidem velit provident! Quos perspiciatis exercitationem esse
                facilis illum doloribus, architecto atque veritatis labore
                voluptas quis, quia numquam qui cum recusandae!
                </Grid.Column>
                <Grid.Column width="6">
              <Image src="https://picsum.photos/200"></Image>
              </Grid.Column>
              <Grid.Column width="4">
                <List as="ol" divided verticalAlign="middle">
                  <List.Item as="li">News Story Title</List.Item>
                  <List.Item as="li">News Story Title</List.Item>
                  <List.Item as="li">News Story Title</List.Item>
                  <List.Item as="li">News Story Title</List.Item>
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
