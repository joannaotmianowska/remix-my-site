/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe("smoke tests", () => {
  it("should show posts button", () => {
    cy.visitAndCheck("/");

    cy.findByRole("link", { name: /newslettery/i }).click();
    cy.findByText("Newslettery");
  });

  it("should show podcasts button", () => {
    cy.visitAndCheck("/");

    cy.findByRole("link", { name: /podcasty/i }).click();
    cy.findByText("TBD");
  });
});
