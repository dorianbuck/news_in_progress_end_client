import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "semantic-ui-react";
import _ from "lodash";
import { Article } from "../modules/article";
import ArticleItem from "./ArticleItem";

const HomePage = () => {
  const { articles } = useSelector((state) => state);
  const dispatch = useDispatch();

  const uniqueCategories = () => {
    let categories = articles.map((article) => {
      return article.category_name;
    });
    dispatch({ type: "SET_CATEGORIES", payload: _.uniq(categories) });
  };

  useEffect(() => {
    Article.index();
  }, []);

  useEffect(() => {
    uniqueCategories();
    // eslint-disable-next-line
  }, [articles]);

  let articleList = articles.map((articleItem) => {
    return <ArticleItem articleItem={articleItem} key={articleItem.id} />;
  });

  return (
    <Grid padded column="equal" centered stackable>
      <Grid.Row>{articleList}</Grid.Row>
    </Grid>
  );
};

export default HomePage;
