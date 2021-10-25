describe('User can register for an account', () => {
  beforeEach(() => {
    cy.intercept("**api/auth/**"), {
      fixture: "userRegistrationResponse.json"
    }
    cy.visit("/")
    cy.get("[data-cy=sign-up-button]").click()
  })

  it('is expected to have three input fields and a submit button', () => {
    cy.get("form").children().should("have.length", 4)
  });
});