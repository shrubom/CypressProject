/// <reference types = 'cypress'/>
describe("Test suite 4", function () {
  it("Validating items in the web table", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("tr td:nth-child(2)").each(($columnele, index, $list) => {
      let text = $columnele.text();
      if (text.includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            let priceText = price.text();
            expect(priceText).to.equal("25");
          });
      }
    });
  });
  it("Mouse hover ui behavior", function () {
    //This is one method if you have to do validations for mousehover and see if the hidden elements are clickable
    cy.get("div.mouse-hover-content").invoke("show");
    //Now if you dont care about mouse hover and just want to click on the options even if they are hidden mode use the follwoing
    cy.contains("Top").click({ force: true });
    cy.contains("Top").click();
    cy.url().should("include", "top");
  });
});
