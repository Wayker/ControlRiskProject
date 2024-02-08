class LandingPage {
    visit() {
      cy.visit('https://www.nba.com');
    }
  
    clickSignInButton() {
      cy.get('.NavItem_link__ZBDtq').contains('Sign In').should('be.visible').then(($button) => {
        if ($button.length > 0) {
          cy.wrap($button).click();
          cy.wait(1000); // Adding a small pause after clicking the Sign In button
        } else {
          cy.log('Sign In button not found.');
        }
      });
    }
  
    clickSignInWithNBAIDButton() {
      cy.get('.NavDropdownChild_item__k5Oea').contains('Sign in with NBA ID').should('be.visible').then(($button) => {
        if ($button.length > 0) {
          cy.wrap($button).click();
          cy.wait(1000); // Adding a small pause after clicking the "Sign in with NBA ID" button
        } else {
          cy.log('Sign in with NBA ID button not found.');
        }
      });
    }
  
    annoyingCookiesPopUp() {
      cy.get('.TrusteWidget__consentBar').contains('Show Purposes').should('be.visible').click();
    }
  
    selectingminimalcookies() {
      cy.get('.TrusteWidget__actions').contains('Confirm My Choices').should('be.visible').click();
    }
  
  }
  
  export default LandingPage;