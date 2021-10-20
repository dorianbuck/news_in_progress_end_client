describe("Internationalization - UI language", () => {
  it("is expected to render the UI in the language of the browser if in English", () => {
    cy.intercept("GET", "**api/articles", {
      fixture: "indexRespondsFromApi.json",
      statusCode: 200,
    });
    cy.visit("/", {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, "language", {
          get: cy.stub().returns("en-GB").as("language"),
        });
      },
    });
    cy.get("@language").should("have.been.calledOnce");
    cy.get("[data-cy=greeting]").should("contain.text", "Hi");
    cy.get("[data-cy=category-list]").should("contain.text", "Categories");
  });

  it("is expected to render the UI in the language of the browser if in Swedish", () => {
    cy.intercept("GET", "**api/articles", {
      fixture: "indexRespondsFromApi.json",
      statusCode: 200,
    });
    cy.visit("/", {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, "language", {
          get: cy.stub().returns("sv-SE").as("language"),
        });
      },
    });
    cy.get("@language").should("have.been.calledOnce");
    cy.get("[data-cy=greeting").should("contain.text", "Hej");
    cy.get("[data-cy=category-list]").should("contain.text", "Sektioner");
  });

  it.only("is expected to allow user to choose UI language", () => {
    cy.intercept("GET", "**api/articles", {
      fixture: "indexRespondsFromApi.json",
      statusCode: 200,
    });
    cy.visit("/");
    cy.get("[data-cy=language-selector]").should("be.visible");
  });
});
