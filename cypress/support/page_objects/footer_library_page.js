import LandingPage from "./_landing_page";
class LibraryPage extends LandingPage {

    open() {
        cy.visit('/library')
    };

}
export default LibraryPage