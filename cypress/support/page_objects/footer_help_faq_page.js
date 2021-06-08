import LandingPage from "./_landing_page";
class HelpFaqPage extends LandingPage {

    open() {
        cy.visit('/faq')
    };

}
export default HelpFaqPage