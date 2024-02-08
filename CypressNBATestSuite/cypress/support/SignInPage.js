class SignInPage {
  visit() {
    cy.visit('https://www.nba.com/account/sign-in');
  }

  fillEmail(email) {
    cy.get('#email').clear().type(email);
  }

  fillPassword(password) {
    cy.get('#password').clear().type(password);
  }

  clickSubmitButton () {
    cy.get('#submit').click();
  }
}

export default SignInPage;