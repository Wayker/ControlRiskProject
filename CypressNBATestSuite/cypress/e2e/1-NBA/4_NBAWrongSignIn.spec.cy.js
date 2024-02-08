import SignInPage from '../../support/SignInPage';

describe('Invalid Email and Password Error Message', () => {
  const signInPage = new SignInPage();

  beforeEach(() => {
    // Catch uncaught exceptions and prevent Cypress from failing the test
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });


    signInPage.visit();
    cy.wait(2000); // Pause after loading the web page
  });

  it('should display a JS error', () => {
    cy.wait(2000); // Pause after popUp appears
    signInPage.fillEmail('wrongemail@example.com');
    signInPage.fillPassword('wrongpassword');
    signInPage.clickSubmitButton();
    cy.wait(4000); // Pause after popUp appears
    // Verify error message is displayed
    cy.get('.SignIn_formError__QXKNi').should('be.visible');
    cy.contains('Invalid email or password. Please try again.').should('be.visible');
  });
});

