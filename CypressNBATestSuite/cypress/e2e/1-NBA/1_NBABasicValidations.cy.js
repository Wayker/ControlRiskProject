import LandingPage from '../../support/LandingPage';

describe('NBA.com Basic Buttons validation', () => {
  const landingpage = new LandingPage();

  beforeEach(() => {
    // Catch uncaught exceptions and prevent Cypress from failing the test
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });


    landingpage.visit();
    cy.wait(2000); // Pause after loading the web page
  });

  it('should display the Sign In button on the homepage', () => {
    landingpage.verifySignInButtonVisible();
  });

  it('The Sign In button should be visible', () => {
    landingpage.clickSignInWithNBAIDButton();
    cy.wait(4000); // Pause after popUp appears
    cy.url().should('eq', 'https://www.nba.com/account/sign-in');
  });
});

