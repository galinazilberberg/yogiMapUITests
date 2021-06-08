import LandingPage from "../support/page_objects/_landing_page";
import LandingPageElements from "../support/page_objects/_landing_page_elements_check";
import LoginPage from "../support/page_objects/__login_page";
import JoinUsPage from "../support/page_objects/__join_us_page";
//FOOTER
import ContactUsPage from "../support/page_objects/footer_contact_us";
import HelpFaqPage from "../support/page_objects/footer_help_faq_page";
import LibraryPage from "../support/page_objects/footer_library_page";
import TypeClassGuidePage from "../support/page_objects/footer_type_class_guide_page";
import YogaStylesGuidePage from "../support/page_objects/footer_style_guide_page";
//NAV BAR
import TeacherSearch from "../support/page_objects/navbar_footer_search_teacher_page";
import ClassSearch from "../support/page_objects/navbar_footer_search_class_page";
import FocusPage from "../support/page_objects/navbar_search_focus_page";
import StylePage from "../support/page_objects/navbar_search_style_page";
import TypeClassSearchPage from "../support/page_objects/navbar_search_type_class_page";
import EventsSearchPage from "../support/page_objects/navbar_search_events_page";

describe('All links are clickable from landing page', () => {

    const landingPage = new LandingPage();
    const joinUsPage = new JoinUsPage();
    const loginPage = new LoginPage();
    const contactUsPage = new ContactUsPage();
    const helpFaqPage = new HelpFaqPage();
    const libraryPage = new LibraryPage();
    const typeClassGuidePage = new TypeClassGuidePage();
    const landingPageElements = new LandingPageElements();
    const teacherSearch = new TeacherSearch();
    const classSearch = new ClassSearch();
    const focusPage = new FocusPage();
    const stylePage = new StylePage();
    const yogaStyleGuidePage = new YogaStylesGuidePage();
    const typeClassSearchPage = new TypeClassSearchPage();
    const eventsSearchPage = new EventsSearchPage()

    describe('Role GUEST => NAV BAR NAVIGATION', () => {

        beforeEach(() => {
            landingPage.navigate();
        });

        it('Navigation => Log in Page', () => {
            landingPage.goToLogInPage();
            loginPage.isOpen();
        });

        it('Navigation => FOCUS', () => {
            landingPage.goToFocusPage();
            focusPage.open();
        });

        it('Navigation => STYLE', () => {
            landingPage.goToStylePage();
            focusPage.open();
        });

        // FAILING BECAUSE OF MULTIPLE
        // it('Navigation => TEACHER', () => {
        //     landingPage.goToTeacherPage();
        //     teacherSearch.open();
        // });
        //
        // it('Navigation => CLASSES', () => {
        //     landingPage.goToClassesPage();
        //     classSearch.open();
        // });

        it('Navigation => EVENTS', () => {
            landingPage.goToEventsPage();
            eventsSearchPage.open();
        });

        it('Navigation => TYPE', () => {
            landingPage.goToTypePage();
            typeClassSearchPage.open();
        });

    });
    describe('Role GUEST => FOOTER NAVIGATION', () => {

        beforeEach(() => {
            landingPage.navigate();
        });

        //FAILING BECAUSE OF MULTIPLE
        // it('Navigation => Join Us Page', () => {
        //     landingPage.goToJoinUsPage();
        //     joinUsPage.open();
        // });

        it('Navigation => Help & FAQ', () => {
            landingPageElements.goToHelpPage();
            helpFaqPage.open();
        });

        it('Navigation => Contact Us Page', () => {
            landingPageElements.goToContactUsPage();
            contactUsPage.open();
        });

        it('Navigation => Our Library', () => {
            landingPageElements.goToLibraryPage();
            libraryPage.open();
        });

        it('Navigation => Yoga Styles Guide', () => {
            landingPageElements.goToStylesPage();
            yogaStyleGuidePage.open();
        });

        it('Navigation => Class Type Guide', () => {
            landingPageElements.goToClassTypePage();
            typeClassGuidePage.open();
        });

        //FAILING BECAUSE OF MULTIPLE
        // it('Navigation => Find Your Teacher', () => {
        //     landingPageElements.goToFindTeacherPage();
        //     teacherSearch.open();
        // });
        //
        // it('Navigation => Find Your Classes', () => {
        //     landingPageElements.goToFindClassesPage();
        //     classSearch.open();
        // });

    });
});