import LandingPage from "./_landing_page";
class TeacherSearch extends LandingPage {

    open() {
        cy.visit('/teacherAccount')
    };

}
export default TeacherSearch