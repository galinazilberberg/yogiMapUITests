import LandingPage from "./_landing_page";
class ResetPassword extends LandingPage {

    open() {
        cy.visit('/user/password/reset/request')
    };

}
export default ResetPassword