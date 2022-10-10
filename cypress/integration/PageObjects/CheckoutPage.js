class CheckoutPage {
  finalCheckoutButton() {
    return cy.get(":nth-child(4) > :nth-child(5) > .btn");
  }
  getCountry() {
    return cy.get("#country");
  }
}
export default CheckoutPage;
