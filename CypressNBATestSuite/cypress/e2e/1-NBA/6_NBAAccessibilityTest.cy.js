import LandingPage from '../../support/LandingPage';

describe('Accessibility test', () => {
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

  it('should measure performance metrics', () => {
    landingpage.visit();
    cy.injectAxe();
    cy.wait(2000); // Wait for elements to load
    cy.checkA11y();
  });
});

