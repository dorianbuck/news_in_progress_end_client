import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Article } from "../modules/apiHelper";
import ArticleItem from "./ArticleItem";
import { useSelector } from "react-redux";
// import DisplayedArticle from "./DisplayedArticle";

const HomePage = () => {
  const { articles } = useSelector((state) => state);

  useEffect(() => {
    Article.index();
  }, []);

  let articleList = articles.map((articleItem, id) => {
    return <ArticleItem articleItem={articleItem} id={id} key={id} />;
  });

  return (
    <Grid column="equal" centered stackable>
    <Grid.Row>{articleList}</Grid.Row>
  </Grid>
  );
};

export default HomePage;


// <div data-cy="overall-page">
// {article ? (
//   <div onClick={Article.index}>
//     <DisplayedArticle displayedArticle={article} />
//   </div>
// ) : (
//   <Grid column="equal" centered stackable>
//     <Grid.Row>{articleList}</Grid.Row>
//   </Grid>
// )}
// </div>