/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe("smoke tests", () => {
  it("should show working navigation on laptop", () => {
    cy.viewport("macbook-13");
    cy.visitAndCheck("/");

    cy.findByText("Archiwalne newslettery").click();
    cy.findByText("Tu będą newslettery");

    cy.visitAndCheck("/");

    cy.findByText("Odcinki podcastu").click();
    cy.findByText("Tu będą odcinki podcastu");
  });

  it.skip("should show working navigation on mobile", () => {
    cy.viewport("iphone-8");
    cy.visitAndCheck("/");

    cy.get('[data-cy="nav-icon"]').click()
    cy.findByText("Archiwalne newslettery").click();
    cy.findByText("Tu będą newslettery");

    cy.visitAndCheck("/");
    cy.get('[data-cy="nav-icon"]').click()
    
    cy.findByText("Odcinki podcastu").click();
    cy.findByText("Tu będą odcinki podcastu");
  });
});
