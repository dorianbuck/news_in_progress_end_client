import React, { useState } from "react";
import { Grid } from "semantic-ui-react";


const HomePage = () => {
  const [showCollection, setShowCollection] = useState([])
  return <Grid column="equal" data-cy="news-section">
    {articles.map((articleItem) => {
      return (
        <NewsItem article={articleItem} key={articleItem.indexOf(articleItem)} />
      )
    })}
  </Grid>;
};

export default HomePage;
