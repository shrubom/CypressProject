/// <reference types = 'cypress' />
describe("My second test suite", function () {
  it("My third test case", function () {
    cy.log("More UI automation Techniques");
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //Clicking on the checkbox and validating the correct checkbox is clicked.
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    //here we are checking all the three checkboxes.
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);
  });
  it("Dropdown validatioons", function () {
    //Static dropdown
    cy.get("#dropdown-class-example")
      .select("option1")
      .should("have.value", "option1");
    //Dynamic Dropdowns
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($dynamicMenuItem, index, $list) => {
      if ($dynamicMenuItem.text() === "India") {
        cy.wrap($dynamicMenuItem).click();
      }
    });
    cy.get("#autocomplete").should("have.value", "India");
  });
  it("Visibilty and invisibility of your page objects", function () {
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
  });
  it("Radio Button Validations and Advanced ui validations", function () {
    cy.get('input[value="radio2"]').check().should("be.checked");
  });
  //Handliong Alerts
  it("Handling alert pop ups", function () {
    cy.get("#alertbtn").click();
  });
});
