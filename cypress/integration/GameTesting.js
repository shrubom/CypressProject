/// <reference types = 'cypress'/>
/// <reference types='cypress-iframe'/>
import "cypress-iframe";

describe("Game Test Suite", function () {
  it("Game Testing", function () {
    cy.visit(
      "https://nj.ballycasino.stg.pp21.pgt.gamesysgames.com/game/play-lbo-ravens-reveal/play"
    );
    cy.wait(5000);
    cy.get("#username").type("spbally01");
    cy.get("#password").type("Password1!");
    cy.get("form > .MuiButtonBase-root > .MuiButton-label").click();
    cy.wait(2000);
    cy.get(".overlay-header>.button-icon").click();
    cy.wait(100000);
    cy.frameLoaded("#gameiframe");
    cy.iframe().find("#content").click();
  });
});
