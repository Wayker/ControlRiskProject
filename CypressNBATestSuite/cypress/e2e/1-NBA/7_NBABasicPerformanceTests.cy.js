import LandingPage from '../../support/LandingPage';

describe('Basic Performance test', () => {
  const landingpage = new LandingPage();

  beforeEach(() => {
    // Catch uncaught exceptions and prevent Cypress from failing the test
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
  });

  it('should measure the page load time', () => {
    landingpage.visit();
    cy.window().then((win) => {
      const loadTime = win.performance.timing.loadEventEnd - win.performance.timing.navigationStart;
      // Log or assert the load time
      cy.log(`Page load time: ${loadTime} ms`);
    });
  });

  it('should measure the Time to First Byte', () => {
    landingpage.visit();
    cy.intercept('**').as('allRequests');
    // Wait for the first request
    cy.wait('@allRequests').then((interception) => {
      const ttfb = interception.response.headers['x-response-time'];
      // Log or assert the Time to First Byte
      cy.log(`Time to First Byte (TTFB): ${ttfb}`);
    });
  });

  it('should measure the Time to First Byte', () => {
    landingpage.visit();
    cy.intercept('**').as('allRequests');
    // Wait for the first request
    cy.wait('@allRequests').then((interception) => {
      const ttfb = interception.response.headers['x-response-time'];
      // Log or assert the Time to First Byte
      cy.log(`Time to First Byte (TTFB): ${ttfb}`);
    });
  });

});

