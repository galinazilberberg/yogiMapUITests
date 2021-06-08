import LandingPage from "./_landing_page";
class ContactUsPage extends LandingPage {

    open() {
        cy.visit('/contact')
    };

}
export default ContactUsPage