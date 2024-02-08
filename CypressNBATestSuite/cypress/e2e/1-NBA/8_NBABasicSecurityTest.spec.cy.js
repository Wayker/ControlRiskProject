import SignInPage from '../../support/SignInPage';

describe('Input Validation Testing', () => {
  const signInPage = new SignInPage();

  beforeEach(() => {
    // Catch uncaught exceptions and prevent Cypress from failing the test
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
  });

  it('should prevent SQL injection', () => {
    signInPage.visit();
    cy.wait(2000); // Pause after popUp appears
    // Attempt SQL injection in email and password fields
    signInPage.fillEmail("' OR '1'='1';--");
    signInPage.fillPassword("' OR '1'='1';--");
    signInPage.clickSubmitButton();
    cy.wait(4000); // Pause after popUp appears
    // Verify that the application prevents SQL injection and does not display an error
    cy.get('.SignIn_formError__QXKNi').should('not.exist');
    cy.contains('Invalid email or password. Please try again.').should('not.exist');
  });

  it('should prevent XSS attack', () => {
    signInPage.visit();
    cy.wait(2000); // Pause after popUp appears
    // Attempt XSS injection in email and password fields
    signInPage.fillEmail('<script>alert("XSS Attack")</script>');
    signInPage.fillPassword('<script>alert("XSS Attack")</script>');
    signInPage.clickSubmitButton();
    cy.wait(4000); // Pause after popUp appears
    // Verify that the application prevents XSS attack and does not execute the injected JavaScript
    cy.on('window:alert', (alertText) => {
      expect(alertText).not.to.include('XSS Attack');
    });
  });


});
