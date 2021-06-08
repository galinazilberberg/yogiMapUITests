import LandingPage from "./_landing_page";
class FocusPage extends LandingPage {

    open() {
        cy.visit('/list/focus')
    };

}
export default FocusPage