describe("User can read an article", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/articles**", {
      fixture: "articleExample.json",
    }); //Maybe use wildcard instead of article.id

    cy.visit("/");
    cy.get("[data-cy=article-0]").click();
  });

  it("is expected to display the article", () => {
    cy.get("[data-cy=displayed-article]")
      .children()
      .within(() => {
        cy.get("[data-cy=article-title").should(
          "contain",
          "Pablo Escobar: Colombia sterilises drug lord's hippos"
        );
        cy.get("[data-cy=article-authors").should(
          "contain",
          "bob journalist" && "bobette journalist"
        );
        cy.get("data-cy=article-date").should("contain", "2021-10-04");
        cy.get("data-cy=article-body").should(
          "include",
          "A group of hippos - an unwanted legacy following the death of notorious Colombian drug lord Pablo Escobar"
        );
      });
  });
});
