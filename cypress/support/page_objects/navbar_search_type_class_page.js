import LandingPage from "./_landing_page";
class TypeClassSearchPage extends LandingPage {

    open() {
        cy.visit('/classType')
    };

}
export default TypeClassSearchPage