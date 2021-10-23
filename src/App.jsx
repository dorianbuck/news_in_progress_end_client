import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Category from "./components/Category";
import CategoryHeader from "./components/CategoryHeader";
import IndividualArticle from "./components/IndividualArticle";
import i18n from "./i18n";

const App = () => {
  if (navigator.language.includes("sv")) {
    i18n.changeLanguage("sv");
  }
  debugger;
  return (
    <BrowserRouter>
      <Header />
      {/* {isBrowser && <div>You are a browser!</div>} */}
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route
          exact
          path={"/articles/:id"}
          component={IndividualArticle}
        ></Route>
        <Route exact path={"/category/:category"} component={Category}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
