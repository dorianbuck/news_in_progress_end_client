describe("User can register for an account", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/articles", {
      fixture: "indexRespondsFromApi.json",
    });
    cy.intercept("POST", "**api/auth**", {
      fixture: "registrationSuccess.json",
    });
    cy.visit("/");
    cy.get("[data-cy=sign-up-button]").click();
  });

  it("is expected to have three input fields and a submit button", () => {
    cy.get("[data-cy=register-form]").children().should("have.length", 4);
  });

  describe("when registration is successful", () => {
    beforeEach(() => {
      cy.get("[data-cy=email-input]").type("user@email.com");
      cy.get("[data-cy=password-input]").type("password");
      cy.get("[data-cy=confirm-password-input").type("password");
      cy.get("[data-cy=btn-signup]").click();
    });
    it.only("is expected to make an API Post request and ", () => {
      cy.get("[data-cy=registration-message]").should(
        "contain",
        "Registration successful"
      );
    });
  });
});
