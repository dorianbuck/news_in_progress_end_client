import React from "react";
import { List, Grid, Header } from "semantic-ui-react";

const MostRead = () => {
  return (
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
  );
};

export default MostRead;
