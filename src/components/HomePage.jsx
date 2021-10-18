import React, { useEffect } from "react";
import { Grid, Menu, Dropdown } from "semantic-ui-react";
import { Article } from "../modules/apiHelper";
import ArticleItem from "./ArticleItem";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { articles } = useSelector((state) => state);

  useEffect(() => {
    Article.index();
  }, []);

  let articleList = articles.map((articleItem, id) => {
    return <ArticleItem articleItem={articleItem} id={id} key={id} />;
  });

  let categoryList = articles.map((articleItem) => {
    return (
      <Dropdown.Item
        data-cy={`${articleItem.category_name.toLowerCase()}-category`}
      >
        {articleItem.category_name}
      </Dropdown.Item>
    );
  });

  return (
    <>
      <Menu vertical>
        <Dropdown item text="Categories" data-cy="category-list">
          <Dropdown.Menu>{categoryList}</Dropdown.Menu>
        </Dropdown>
      </Menu>

      <Grid column="equal" centered stackable>
        <Grid.Row>{articleList}</Grid.Row>
      </Grid>
    </>
  );
};

export default HomePage;
