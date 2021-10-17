describe("User can read an article", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/articles/", {
      fixture: "indexRespondsFromApi.json",
      statusCode: 200,
    }).as("indexApiGetRequest");

    cy.intercept("GET", "**/api/articles/1", {
      fixture: "articleExample.json",
    }).as("showApiGetRequest"); //Maybe use wildcard instead of article.id

    cy.visit("/");
  });

  it("is expected to display the article", () => {
    cy.get("[data-cy=overall-page]").children().first().click();
    cy.get("[data-cy=displayed-article]")
    .within(() => {
      cy.get("[data-cy=article-title]").should(
        "contain",
        "Pablo Escobar: Colombia sterilises drug lord's hippos"
      );
      cy.get("[data-cy=article-authors]").should(
        "contain",
        "Bob Journalist" && "Bobette Journalist"
      );
      cy.get("[data-cy=article-date]").should("contain", "2021-10-04");
      cy.get("[data-cy=article-body]").should(
        "include.text",
        "A group of hippos - an unwanted legacy following the death of notorious Colombian drug lord Pablo Escobar"
      );
    });
  });
});
