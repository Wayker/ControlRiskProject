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
    signInPage.fillEmail('wrongemailformat');
    signInPage.fillPassword('wrongpassword');
    signInPage.clickSubmitButton();
    cy.wait(4000); // Pause after popUp appears
    // Verify error message is displayed
    cy.get('.Input_text__1eMN5[data-error="true"]').should('be.visible');
    cy.contains('Email address must be a valid email.').should('be.visible');
  });
});

