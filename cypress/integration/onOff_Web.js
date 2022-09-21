/// <reference types = 'cypress' />
describe("On Off Web Application", function () {
  it("Accepting the CyBot Cookies", function () {
    cy.log("Accepting the cookies");
    cy.visit("https://onoff.ee");
    cy.wait(2000);
    cy.get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll").click();
  });
});
