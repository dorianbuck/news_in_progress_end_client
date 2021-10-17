import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import IndividualArticle from "./components/IndividualArticle";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const {article_id} = useSelector((state) => state)
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path={`/article-${article_id}`} component={IndividualArticle}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
