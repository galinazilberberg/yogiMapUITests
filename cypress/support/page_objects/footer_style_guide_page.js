import LandingPage from "./_landing_page";
class YogaStylesGuidePage extends LandingPage {

    open() {
        cy.visit('/styles')
    };

}
export default YogaStylesGuidePage