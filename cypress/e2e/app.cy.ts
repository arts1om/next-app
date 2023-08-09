/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe("Navigation", () => {
  it("should contain an h1 with 'About page'", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // The new page should contain an h1 with "About page"
    cy.get("h2").contains("Home Page");
  });
  it("should navigate to the Notes page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "notes" and click it
    cy.get('[data-testid="notes-link"]').click();

    // The new url should include "/Notes"
    cy.url().should("include", "/notes");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
