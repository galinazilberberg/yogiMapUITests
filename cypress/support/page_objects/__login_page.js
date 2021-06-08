
import LandingPage from "./_landing_page";
class LoginPage extends LandingPage {
    header = () => cy.get('h1');
    fieldEmail = () => cy.get('#normal_login_email');
    fieldPassword = () => cy.get('#normal_login_password');
    buttonLogin = () => cy.get('button[type="submit"]');
    linkCreateAccount = () => cy.get('[href="/user/register"]');
    textCreateAccount = () => cy.get('');
    linkResetPassword = () => cy.get('[href="/user/password/reset/request"]');
    textResetPassword = () => cy.get('');

    isOpen() {
        this.header().should('have.text', 'Welcome back!');
        cy.url().should('include', '/user/login');
    };

    logIn(email, password) {
        this.fieldEmail().type(email);
        this.fieldPassword().type(password);
        this.buttonLogin().click();
    };
    logInPageElementsExist(){
        this.header().should('be.visible');
        this.fieldEmail().should('be.visible');
        this.fieldPassword().should('be.visible');
        this.buttonLogin().should('be.visible');
        this.linkCreateAccount().should('be.visible');
        this.linkResetPassword().should('be.visible');
    }
    logInPageLabelsCorrect(){
        this.header().should('have.text', 'Welcome back!');
        this.fieldEmail().should('have.attr', 'placeholder', 'Email');
        this.fieldPassword().should('have.attr', 'placeholder', 'Password');
        this.buttonLogin().should('have.text', 'Log in');
        this.linkCreateAccount().should ('have.text', 'Create one');
        this.linkResetPassword().should ('have.text', 'Reset it');
    }
    logInButtonIsEnabled( email, password) {
        this.fieldEmail().type(email);
        this.fieldPassword().type(password);
        this.buttonLogin().should('be.enabled');
    };
    createAccountfromLogInPage(){
        this.linkCreateAccount().click();
    }
      resetPasswordFromLogInPage(){
        this.linkResetPassword().click();
      }
}
export default LoginPage