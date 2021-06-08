import LandingPage from "./_landing_page";
class ClassSearch extends LandingPage {

    open() {
        cy.visit('/classes')
    };

}
export default ClassSearch