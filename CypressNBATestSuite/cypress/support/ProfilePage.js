class ProfilePage {
    visit() {
      cy.visit('https://www.nba.com/account/nbaprofile');
    }
  
    MyAccountButton() {
        cy.get('svg[xmlns="http://www.w3.org/2000/svg"][width="24"][height="24"][viewBox="0 0 24 24"]').click();
    }
  
  }
  
  export default ProfilePage;