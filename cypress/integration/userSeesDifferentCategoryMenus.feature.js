describe("The Categories render differently on mobile and desktop", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/articles", {
      fixture: "indexRespondsFromApi.json",
      statusCode: 200,
    });
    cy.visit("/");
  });

  describe("when the user is on mobile", () => {
    
    it("is expected that the user sees a dropdown menu with the news categories listed", () => {
      cy.viewport("iphone-x");
      cy.get("[data-cy=mobile-categories-list]").should('be.visible')
    });
  });
  describe("when the user is on a desktop", () => {
    it("is expected that the user sees a subheader with the news categories listed", () => {
      cy.get("[data-cy=desktop-categories-list]").should('be.visible')
    });
  });
});
