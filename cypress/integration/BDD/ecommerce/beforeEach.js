beforeEach(function () {
  cy.fixture("testData.json").then(function (data) {
    this.testData = data;
  });
});
