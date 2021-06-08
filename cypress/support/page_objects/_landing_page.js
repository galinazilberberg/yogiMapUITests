export default class LandingPage{
    navBar =() => cy.get ('.main-nav');
    linkHome =() => cy.get ('[href="/"]');
    linkFocus =() => cy.get ('[href="/list/focus"]');
    linkStyle =() => cy.get ('[href="/style"]');
    linkTeacher=() => cy.get ('[href="/teacherAccount"]');
    linkClasses=() => cy.get ('[href="/classes"]');
    linkEvents=() => cy.get ('[href="/event"]');
    linkType=() => cy.get ('[href="/classType"]');
    dropdownUserProfile = () => cy.get('[data-qa="userInfoName"]');
    linkLogin = () => cy.get('[href="/user/login"]');
    linkJoinUs = () => cy.get('[href="/user/register"]');

  //DROPDOWN USER PROFILE

  profile = () => cy.get('[data-qa="profile"]')
  settings = () => cy.get('[data-qa="settings"]')
  logout = () => cy.get('[data-qa="logout"]');

  open(path) {
    cy.visit(path);
  };
  navigate() {
     cy.visit('');
    };

  logOut() {
    this.dropdownUserProfile().click({force: true});
    this.logout().click();
  };
  appOpen(){
      this.navBar().should('be.visible');
  }

  topMenuElementsExist() {
    this.linkHome().should('be.visible');
    this.linkFocus().should('be.visible');
    this.linkStyle().should('be.visible');
    this.linkTeacher().should('be.visible');
    this.linkClasses().should('be.visible');
    this.linkEvents().should('be.visible');
    this.linkType().should('be.visible');
    this.linkLogin().should('be.visible');
    this.linkJoinUs().should('be.visible');
  };
    topMenuLabelsCorrect() {
        this.linkHome().should('include.text', 'HOME');
        this.linkFocus().should('include.text', 'FOCUS');
        this.linkStyle().should('include.text', 'STYLE');
        this.linkTeacher().should('include.text', 'TEACHER');
        this.linkClasses().should('include.text', 'CLASSES');
        this.linkEvents().should('include.text', 'EVENTS');
        this.linkType().should('include.text', 'TYPE');
        this.linkLogin().should('include.text', 'Log In');
        this.linkJoinUs().should('include.text', 'JOIN US');

    };
    goToHomePage(){
        this.linkHome().click();
    }
    goToFocusPage(){
        this.linkFocus().click();
    }
    goToStylePage(){
        this.linkStyle().click();
    }
    goToTeacherPage(){
        this.linkTeacher().click();
    }
    goToClassesPage(){
        this.linkClasses().click();
    }
    goToEventsPage(){
        this.linkEvents().click();
    }
    goToTypePage(){
        this.linkType().click();
    }
    goToLogInPage(){
        this.linkLogin().click();
    }
    goToJoinUsPage(){
        this.linkJoinUs().click();
    }
};