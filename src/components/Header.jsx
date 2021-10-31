import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Menu, Dropdown, Select, Image } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import logo from "../img/logo.png";


const Header = () => {
  const { categories, authenticated, currentUser } = useSelector((state) => state);
  const { t } = useTranslation();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });

  let categoriesList = categories.map((category, index) => {
    let categoryToLowerCase = category.toLowerCase();
    return (
      <Dropdown.Item
        data-cy={`${categoryToLowerCase}-category`}
        as={Link}
        to={{ pathname: `/category/${categoryToLowerCase}` }}
        key={index}
      >
        {category}
      </Dropdown.Item>
    );
  });

  const languageOptions = [
    { key: "en", value: "en", text: t("languageNames.english") },
    { key: "sv", value: "sv", text: t("languageNames.swedish") },
  ];

  return (
    <div>
      <Menu data-cy="header">
        <Menu.Item
          id="home"
          name="home"
          as={Link}
          to={{ pathname: "/" }}
          data-cy="home"
        >
          <Image size="small" src={logo}></Image>
        </Menu.Item>
        {isTabletOrMobile && (
          <Dropdown item text={t("menu")} data-cy="mobile-menu">
            <Dropdown.Menu direction="left">
              <Dropdown
                text={t("categories")}
                item
                data-cy="mobile-category-list"
              >
                <Dropdown.Menu>{categoriesList}</Dropdown.Menu>
              </Dropdown>
              {authenticated ? (
                <></>
              ) : (
                <>
                  <Dropdown.Item data-cy="sign-up-button" as={Link} to={{ pathname: "/register" }}>
                    {t("signUp")}
                  </Dropdown.Item>
                  <Dropdown.Item  data-cy="sign-in-button" as={Link} to={{ pathname: "/sign-in" }}>
                    {t("signIn")}
                  </Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        )}
        {!isTabletOrMobile && (
          <>
            <Menu.Item position="right">
              <Select
                data-cy="language-selector"
                placeholder={t("chooseLanguage")}
                options={languageOptions}
                onChange={(event, data) => {
                  i18n.changeLanguage(data.value);
                }}
              />
            </Menu.Item>
            {authenticated ? (
              <Menu.Item>Welcome {currentUser.email}</Menu.Item>
            ) : (
              <>
                <Menu.Item
                  id="sign-in"
                  name={t("signIn")}
                  as={Link}
                  to={{ pathname: "/sign-in" }}
                  data-cy="sign-in-button"
                />
                <Menu.Item
                  id="sign-up"
                  name={t("signUp")}
                  as={Link}
                  to={{ pathname: "/register" }}
                  data-cy="sign-up-button"
                  
                />
              </>
            )}
          </>
        )}
      </Menu>
      {isTabletOrMobile && (
        <Select
          data-cy="language-selector"
          placeholder={t("chooseLanguage")}
          options={languageOptions}
          onChange={(event, data) => {
            i18n.changeLanguage(data.value);
          }}
        />
      )}
    </div>
  );
};

export default Header;
