import React from "react";
import { Grid, Header, Item, Image } from "semantic-ui-react";

const TopStory = (articles) => {

  const isTopStory = (article) => {
    return article.top_story === true;
  };
  
  let topStory = articles['articles'].find(isTopStory);



  return (
    <>
      <Grid.Column data-cy="top-story">
        <Header data-cy="title"> {topStory} Things are happening</Header>
        <Item data-cy="lede">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem
          velit provident! Quos perspiciatis exercitationem esse facilis illum
          doloribus, architecto atque veritatis labore voluptas quis, quia
          numquam qui cum recusandae!
        </Item>
      </Grid.Column>
      <Grid.Column>
        <Image src="https://picsum.photos/300"></Image>
      </Grid.Column>
    </>
  );
};

export default TopStory;
