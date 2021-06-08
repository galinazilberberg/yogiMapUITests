import LandingPage from "./_landing_page";
class TypeClassGuidePage extends LandingPage {

    open() {
        cy.visit('/type')
    };

}
export default TypeClassGuidePage