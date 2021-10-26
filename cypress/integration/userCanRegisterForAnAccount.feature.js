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
    it("is expected to display a success message", () => {
      cy.get("[data-cy=registration-message]").should(
        "contain",
        "Registration successful"
      );
    });
    it("is expected to clear the input fields after registration", () => {
      cy.get("body").trigger("keydown", { keyCode: 27 });
      cy.wait(500);
      cy.get("body").trigger("keyup", { keyCode: 27 });
      cy.get("[data-cy=email-input]").should("contain.text", "");
      cy.get("[data-cy=password-input]").should("contain.text", "");
      cy.get("[data-cy=confirm-password-input").should("contain.text", "");
    });
  });

  describe("when the registration is unsuccessful", () => {
    beforeEach(() => {
      cy.intercept("POST", "**api/auth**", {
        statusCode: 422,
      });
    });

    it("is expected to return an error message if the passwords don't match", () => {
      cy.get("[data-cy=email-input]").type("user@email.com");
      cy.get("[data-cy=password-input]").type("password");
      cy.get("[data-cy=confirm-password-input").type("not_the_same_password");
      cy.get("[data-cy=btn-signup]").click();
      cy.get("[data-cy=registration-message").should(
        "contain.text",
        "We are sorry! Your request can not be processed at this time. Try again later"
      );
    });
    it('is expected to return an error message if the email is formatted wrong', () => {
      cy.get("[data-cy=email-input]").type("useremail.com");
      cy.get("[data-cy=password-input]").type("password");
      cy.get("[data-cy=confirm-password-input").type("password");
      cy.get("[data-cy=btn-signup]").click();
      cy.get("[data-cy=registration-message").should(
        "contain.text",
        "We are sorry! Your request can not be processed at this time. Try again later"
      );
    });
  });
});
