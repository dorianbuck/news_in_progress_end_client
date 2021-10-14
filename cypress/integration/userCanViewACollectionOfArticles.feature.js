describe("A collection of articles is displayed in the main page", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/articles**", {
      fixture: "indexRespondsFromApi.json",
    });
    cy.visit("/");
  });

  cy.get("[data-cy=news-section]").as("newsSection");

  it("is expected to display a collection of articles", () => {
    cy.get("@newsSection").children().should("has.length", 3);
  });

  it("is expected to display a list of articles sorted by id/index", () => {
    cy.get("@newsSection").within(() => {
      cy.get("[data-cy=article-1]");
      cy.get("[data-cy=title]").should("be.visible");
      cy.get("[data-cy=lede]").should("be.visible");
      cy.get("[data-cy=authors]").should("be.visible");
      cy.get("[data-cy=created_at]").should("be.visible");
      cy.get("[data-cy=updated_at]").should("be.visible");
    });
  });
});
