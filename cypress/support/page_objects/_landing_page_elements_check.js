import LandingPage from "./_landing_page";

class LandingPageElements extends LandingPage {
    //LABELS/LOGO/TEXT/IMAGES
  mainTitle1 =() => cy.get ('.pt-5');
  mainTitle2 =() => cy.get ('.my-4');
  appDescription =() => cy.get ('.home-text-about');
  secondTitle =() => cy.get ('h2');
  imageBody =() => cy.get ('[alt="body"]');
  imageMind =() => cy.get ('[alt="mind"]');
  imageSoul =() => cy.get ('[alt="soul"]');
  blueStripeText =() => cy.get ('.home-blue-stripe-text');
  labelEducation =() => cy.get ('.education').scrollIntoView();
  labelInformation =() => cy.get ('.information').scrollIntoView();
  labelCommunity =() => cy.get ('.community').scrollIntoView();
  buttonLearMore =() => cy.get ('.button-primary').scrollIntoView();
  logo = () => cy.get ('.logo');
  linkHelp = () => cy.get ('[href="/faq"]');
  linkContactUs = () => cy.get ('[href="/contact"]');
  linkJoinUs2 = () => cy.get ('[href="/user/register"]');
  linkFindTeacher = () => cy.get ('[href="/teacherAccount"]');
  linkFindClasses = () => cy.get ('[href="/classes"]');
  linkLibrary = () => cy.get ('[href="/library"]');
  LinkStyleGuide = () => cy.get ('[href="/styles"]');
  LinkTypeGuide = () => cy.get ('[href="/type"]');
  labelInfo = () => cy.get ('h6');
  labelCategories = () => cy.get ('h6');
  labelResources = () => cy.get ('h6');
  // linkTermsCond = () => cy.get ('[href="/terms"]');
  labelCopyRights = () => cy.get ('.copyright');

  elementsExist(){
    this.mainTitle1().should('be.visible');
    this.mainTitle2().should('be.visible');
    this.appDescription().should('be.visible');
    this.secondTitle().should('be.visible');
    this.imageBody().should('be.visible');
    this.imageMind().should('be.visible');
    this.imageSoul().should('be.visible');
    this.blueStripeText().should('be.visible');
    this.labelEducation().should('be.visible');
    this.labelInformation().should('be.visible');
    this.labelCommunity().should('be.visible');
    this.buttonLearMore().should('be.visible');
    this.logo().should('be.visible');
    this.linkHelp().should('be.visible');
    this.linkContactUs().should('be.visible');
    this.linkJoinUs2().should('be.visible');
    this.linkFindTeacher().should('be.visible');
    this.linkFindClasses().should('be.visible');
    this.linkLibrary().should('be.visible');
    this.LinkStyleGuide().should('be.visible');
    this.LinkTypeGuide().should('be.visible');
    this.labelInfo().should('be.visible');
    this.labelCategories().should('be.visible');
    this.labelResources().should('be.visible');
    // this.linkTermsCond ().should('be.visible');
    this.labelCopyRights().should('be.visible');
  };

  textIsCorrect(){
    //PAGE
    this.mainTitle1().should('include.text', 'DISCOVER YOGA');
    this.mainTitle2().should('include.text', 'THE JOURNEY STARTS HERE');
    this.appDescription().should('include.text', 'Yoga is the always changing conception.');
    this.appDescription().should('include.text', 'Online resources are the important way of teaching by individual yoga instructors for the last year.');
    this.appDescription().should('include.text', ' Our space helps you to find your own teacher for your body, mind and soul improvement.');
    this.appDescription().should('include.text', 'Also here you will find your community and all information about yoga.');
    this.secondTitle().should('include.text', 'FIND YOUR GURU');
    this.blueStripeText().should('include.text', '”Yoga takes you into the present moment, the only place where life exists.” – Patañjali.');
    this.labelEducation().should('include.text', 'EDUCATION');
    this.labelInformation().should('include.text', 'INFORMATION');
    this.labelCommunity().should('include.text', 'COMMUNITY');
    this.buttonLearMore().should('include.text', 'LEARN MORE');
   ///FOOTER
    this.linkHelp().should('include.text', 'Help & FAQ');
    this.linkContactUs().should('include.text', 'Contact Us');
    this.linkJoinUs2().should('include.text', 'Join Us');
    this.linkFindTeacher().should('include.text', 'Find Your Teacher');
    this.linkFindClasses().should('include.text', 'Find Your Classes');
    this.linkLibrary().should('include.text', 'Our Library');
    this.LinkStyleGuide().should('include.text', 'Yoga Styles Guide');
    this.LinkTypeGuide().should('include.text', 'Class Type Guide');
    this.labelInfo().should('include.text', 'YOGIMAP INFO');
    this.labelCategories().should('include.text', 'YOGIMAP CATEGORIES');
    this.labelResources().should('include.text', 'YOGIMAP RESOURCES');
    // this.linkTermsCond ().should('include.text', 'Terms & Conditions');
    this.labelCopyRights().should('include.text', 'Copyright ©2021 YogiMap. All rights reserved. YogiMap`s Terms & Conditions.');
  }
  goToHelpPage(){
    this.linkHelp().click();
  }
  goToContactUsPage(){
    this.linkContactUs().click();
  }
  goToJoinUs2Page(){
    this.linkJoinUs2().click();
  }
  goToFindTeacherPage(){
    this.linkFindTeacher().click();
  }
  goToFindClassesPage(){
    this.linkFindClasses().click();
  }
  goToLibraryPage(){
    this.linkLibrary().click();
  }
  goToStylesPage(){
    this.LinkStyleGuide().click();
  }
  goToClassTypePage(){
    this.LinkTypeGuide().click();
  }
  // goToTermsCondPage(){
  //   this.linkTermsCond().click();
  // }

};

export default LandingPageElements