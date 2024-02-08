import ProfilePage from '../../support/ProfilePage';

describe('NBA.com Successful Sing Out Test', () => {
  const ProfilePage = new ProfilePage();

  beforeEach(() => {
    // Catch uncaught exceptions and prevent Cypress from failing the test
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });


    ProfilePage.visit();
    cy.wait(2000); // Pause after loading the web page
  });

  it('should sign out with NBA ID', () => {
    cy.wait(2000); // Pause after popUp appears
    ProfilePage.MyAccountButton()
    cy.wait(4000); // Pause after popUp appears
    
  });
});