describe("user can pay for subscription", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/articles**", {
      fixture: "indexRespondsFromApi.json",
    });
    cy.intercept("POST", "**api/articles**", {
      body: { message: "Yay!", paid: true },
      statusCode: 201,
    }).as("@subscriptionRequest");
    cy.visit("/");
  });

  it("is expected by clicking on the subscribe button in the header", () => {
    cy.get("[data-cy=subscribe-btn]").click();
    cy.get("[data-cy=subscription-modal]").should("be.visible");
    cy.get("[data-cy=subscription-modal]").within(() => {
      cy.get("input[data-cy=email]").type("thomas@craft.com");
      cy.get("[data-cy=card-number]").within(() => {
        cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
          const $body = $iframe.content().find("body");
          cy.wrap($body)
            .find('input[name="cardnumber"]')
            .type("4242424242424242", { delay: 10 });
        });
      });
      cy.get("[data-cy=card-expiry]").within(() => {
        cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
          const $body = $iframe.content().find("body");
          cy.wrap($body)
            .find('input[name="exp-date"]')
            .type("1222", { delay: 10 });
        });
      });
    });
    cy.get("[data-cy=card-cvc]").within(() => {
      cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
        const $body = $iframe.content().find("body");
        cy.wrap($body).find('input[name="cvc"]').type("123", { delay: 10 });
      });
    });
    cy.get('input[data-cy="confirm-payment-btn"]').click();
    cy.wait("@subscriptionRequest")
      .its("response.statusCode")
      .should("equal", 201);
    cy.get("[data-cy=payment-confirmation]").should("contain.text", "Yay!");
  });
});
