import LandingPage from "./_landing_page";
class EventsSearchPage extends LandingPage {

    open() {
        cy.visit('/classType')
    };

}
export default EventsSearchPage