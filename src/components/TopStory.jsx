import React from "react";
import { useSelector } from "react-redux";
import { Grid, Header, Item, Image } from "semantic-ui-react";

const TopStory = () => {
  const { articles } = useSelector((state) => state);

  let topStory = articles.find(({ top_story }) => top_story === true);
  return (
    <>
      <Grid.Column data-cy="top-story">
        <Header data-cy="title">{topStory?.title}</Header>
        <Item data-cy="lede">{topStory?.lede}</Item>
      </Grid.Column>
      <Grid.Column>
        <Image src="https://picsum.photos/300"></Image>
      </Grid.Column>
    </>
  );
};

export default TopStory;
