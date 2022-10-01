/// <reference types = 'cypress' />
describe("My third test suite", function () {
  it("My sixth test case", function () {
    cy.log("Handling Alert buttons");
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    //Now clicking on confirm button

    //Handling the text inside the pop ups. Cypress listens to core browser events - window alerts.
    cy.on("window:alert", (str) => {
      //Mocha string comparison
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    cy.get("input[value='Confirm']").click();
    cy.on("window:confirm", (confirmStr) => {
      //Mocha string comparison
      expect(confirmStr).to.equal("Hello , Are you sure you want to confirm?");
    });
  });

  it("Handling child tabs with combination of cypress and jquery commands", function () {
    cy.visit("https://qaclickacademy.com/practice.php");
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.wait(2000);
    cy.go("back");
    //retrieveing Current URL of the page is active
    cy.url().should("include", "rahulshetty");
  });
});
