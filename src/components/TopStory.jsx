import React from "react";
import { useSelector } from "react-redux";
import { Grid, Header, Item, Image } from "semantic-ui-react";

const TopStory = () => {
  // const { articles } = useSelector((state) => state);

  //------------------------------
  //trying to find a specfic object in an array, uncommenting out one of the articles array below
  //and commenting out the useSelector above makes it work

  let articles = [
    {
      id: 1,
      title: "TKTK",
      lede: "TKTKT",
      authors: ["bob journalist", "bobette journalist"],
      created_at: "2021-10-05",
      updated_at: "2021-10-05",
      category_name: "Business",
      top_story: true,
    },
  ];

  let topStory = articles.find((e) => e.id === 1);
  console.log(topStory.title);

  return (
    <>
      <Grid.Column data-cy="top-story">
        <Header data-cy="title">{topStory.title}Things are happening</Header>
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
