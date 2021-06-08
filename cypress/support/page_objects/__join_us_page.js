import LandingPage from "./_landing_page";

class JoinUsPage extends LandingPage {

    linkLogoBackButton = () => cy.get ('[href="/"]');
    header = () => cy.get('h1');
    fieldNickName = () => cy.get('#register_name');
    fieldEmail = () => cy.get('#register_email');
    fieldPassword = () => cy.get('#register_password');
    checkBox = () => cy.get('#register_agreement');
    // checkBoxLabel = () => cy.get('');
    btnRegister = () => cy.get('.ant-btn-primary');
    // linkTermsAndConditions = () => cy.get('');
    linkLogin = () => cy.get('[href="/user/login"]');
    logInLabel= () => cy.get('p');

    open() {
        cy.visit('/user/register')
    };

    elementsExists() {
        this.header().should('be.visible');
        this.fieldNickName().should('be.visible')
        this.fieldEmail().should('be.visible');
        this.fieldPassword().should('be.visible');
        this.checkBox().check().should('be.checked').uncheck();
        // this.checkBoxLabel().should('be.visible');
        this.btnRegister().should('be.visible');
        // this.linkTermsAndConditions().should('be.visible');
        this.linkLogin().should('be.visible');
        this.logInLabel().should('be.visible');
    };

    labelsAreCorrect(){
        this.header().should('have.text', 'Create User`s Account');
        this.fieldNickName().should('have.attr', 'placeholder', 'Nickname');
        this.fieldEmail().should('have.attr', 'placeholder', 'Email');
        this.fieldPassword().should('have.attr', 'placeholder', 'Password');
        // this.checkBoxLabel().should('have.text', 'I have read' + 'Terms and agreements');
        this.btnRegister().should('have.text', 'Register');
        this.linkLogin().should ('have.text', 'Log in');
        this.logInLabel().should('have.text', 'Already have an account? Just click Log in.');
    };

    submitButtonIsEnabled(nickName, email, password) {
        this.fieldNickName().type(nickName);
        this.fieldEmail().type(email);
        this.fieldPassword().type(password);
        this.checkBox().click();
        this.btnRegister().should('be.enabled');
    };
    yogimapLogoBackButton(){
        this.linkLogoBackButton().click();
    }
}
export default JoinUsPage