///<reference types = 'cypress'/>
describe("UI Test Suite", () => {
  it("Landing Page", () => {
    cy.visit("https://demo.saas-3.veriff.me/");
  });
  it("Filling in the form", () => {
    cy.get('input[name="name"]').clear().type("Jane Doe");
  });
});
