import LandingPage from "./_landing_page";
class StylePage extends LandingPage {

    open() {
        cy.visit('/style')
    };

}
export default StylePage