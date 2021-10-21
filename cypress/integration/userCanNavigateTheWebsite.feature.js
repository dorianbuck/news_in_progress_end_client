describe("User can browser through the app", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/articles**", {      
      fixture: "indexRespondsFromApi.json",
    })
    cy.visit("/");
  })

  it("is expected to display a header", () => {
    cy.get("[data-cy=header]").should("be.visible");
  });

  it("is expected to display a footer", () => {
    cy.get("[data-cy=footer]").should("contain", "Copyright");
  });
});
