/* eslint-disable no-undef */
describe("User can pay for subscription", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/articles**", {
      fixture: "indexRespondsFromApi.json",
    });
    cy.intercept("POST", "**api/subscription**", {
      body: { message: "Yay!", paid: true },
      statusCode: 201,
    }).as("subscriptionRequest");
    cy.intercept("POST", "https://r.stripe.com/0", { statusCode: 200 });
    cy.visit("/");
  });

  it("by clicking on the subscribe button in the header", () => {
    cy.get("[data-cy=subscribe-btn]").click();
    cy.get("[data-cy=subscription-modal]").should("be.visible");
    cy.get("[data-cy=subscription-modal]").within(() => {
      cy.get("input[data-cy=email]").type("thomas@craft.com");
      cy.get("[data-cy=email]").type("thomas@craft.com");
      cy.get("div[data-cy=card-number]").within(() => {
        cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
          const $body = $iframe.content().find("body");
          const $body = $iframe.contents().find("body");
          cy.wrap($body)
            .find('input[name="cardnumber"]')
            .type("4242424242424242", { delay: 10 });
            .type("4242424242424242", { delay: 2 });
        });
      });

      cy.get("div[data-cy=card-expiry]").within(() => {
        cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
          const $body = $iframe.content().find("body");
          const $body = $iframe.contents().find("body");
          cy.wrap($body)
            .find('input[name="exp-date"]')
            .type("1222", { delay: 10 });
            .type("1222", { delay: 2 });
        });
      });

      cy.get("div[data-cy=card-cvc]").within(() => {
        cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
          const $body = $iframe.content().find("body");
          cy.wrap($body).find('input[name="cvc"]').type("123", { delay: 10 });
          const $body = $iframe.contents().find("body");
          cy.wrap($body).find('input[name="cvc"]').type("123", { delay: 2 });
        });
      });

      cy.get('input[data-cy="confirm-payment-btn"]').click();
      cy.wait('@subscriptionRequest').its('response.statusCode').should('eq', 201)
      cy.get("[data-cy=payment-message]").should("contain.text", "Yay!");
      cy.get('[data-cy="confirm-payment-btn"]').click();
      cy.wait("@subscriptionRequest")
        .its("response.statusCode")
        .should("eq", 201);
    });
    cy.get("[data-cy=flash-message]").should("contain.text", "Yay!");
  });
});