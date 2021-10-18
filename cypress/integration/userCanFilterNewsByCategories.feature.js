describe("GET request to get news by categories", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/articles**", {
      fixture: "indexRespondsFromApi.json",
      statusCode: 200,
    }).as("indexApiGetRequest");
    cy.visit("/");
  });

  it("is expected to render a category list", () => {
    cy.get("[data-cy=category-list]")
      .click()
      .within(() => {
        cy.get("[data-cy=business-category]").should("contain", "Business");
        cy.get("[data-cy=tech-category]").should("contain", "Tech");
        cy.get("[data-cy=science-category]").should("contain", "Science");
      });
  });
});
