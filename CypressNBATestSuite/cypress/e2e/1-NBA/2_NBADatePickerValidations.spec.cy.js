import LandingPage from '../../support/LandingPage';

describe('Date Picker Test', () => {
  const landingpage = new LandingPage();

  beforeEach(() => {
    // Catch uncaught exceptions and prevent Cypress from failing the test
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
  
    // Visit the landing page
    landingpage.visit();
    cy.wait(2000); // Pause after loading the web page
  });

  it('should select today and 3 days before from the date picker', () => {
    // Get today's date
    const today = new Date();

    // Calculate the date 3 days before today
    const threeDaysBefore = new Date();
    threeDaysBefore.setDate(today.getDate() - 3);

    // Format the dates in the required format (YYYY-MM-DD)
    const todayFormatted = formatDate(today);
    const threeDaysBeforeFormatted = formatDate(threeDaysBefore);

    // Select today's date
    cy.get('.DropDown_select__4pIg9').select(todayFormatted);
    cy.contains(formatDisplayDate(today)).should('be.visible');

    // Select the date 3 days before
    cy.get('.DropDown_select__4pIg9').select(threeDaysBeforeFormatted);
    cy.contains(formatDisplayDate(threeDaysBefore)).should('be.visible');
  });
  
  // Function to format date as YYYY-MM-DD
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  // Function to format date for display (e.g., "Mon, Feb 05")
  function formatDisplayDate(date) {
    const options = { weekday: 'short', month: 'short', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  }
});
