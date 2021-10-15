describe("A collection of articles is displayed in the main page", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/articles**", {
      fixture: "indexRespondsFromApi.json",
      statusCode: 200,
    }).as("indexApiGetRequest");

    cy.visit("/");
    cy.get("[data-cy=news-section]").as("newsSection");
  });


  it("is expected to display a collection of articles", () => {
    cy.get("@newsSection").children().should("have.length", 3);
  });

  it("is expected to display a list of articles sorted by id/index", () => {
    cy.get("@newsSection")
      .children()
      .first()
      .within(() => {
      
      cy.get("[data-cy=title]").should("contain.text", "TKTK");
      cy.get("[data-cy=lede]").should("contain.text", "TKTK");
      cy.get("[data-cy=authors]").should("contain.text", "bob journalistbobette journalist");
      cy.get("[data-cy=created_at]").should("contain", "2021-10-04T13:33:56.923Z");
      cy.get("[data-cy=updated_at]").should("contain", "2021-10-04T13:33:56.923Z");
    });
  });
  it("is expected to return a http status response", () => {
    cy.wait("@indexApiGetRequest").its("response.statusCode").should("eq", 200);
  });
});
