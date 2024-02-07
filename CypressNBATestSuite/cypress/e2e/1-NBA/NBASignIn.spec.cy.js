import SignInPage from '../../support/SignInPage';

describe('NBA.com Successful Sign In Test', () => {
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

  it('should sign in with NBA ID', () => {
    cy.wait(2000); // Pause after popUp appears
    signInPage.fillEmail('tijebe9884@fahih.com');
    signInPage.fillPassword('TejadaTest1234!');
    signInPage.clickSubmitButton();
    cy.wait(4000); // Pause after popUp appears
    // Validate successful sign-in by checking the URL
    cy.url().should('eq', 'https://www.nba.com/account/nbaprofile');
  });
});