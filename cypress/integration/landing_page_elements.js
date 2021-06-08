import LandingPageElements from "../support/page_objects/_landing_page_elements_check";

const landingPageElements = new LandingPageElements();

describe('Landing Page Labels exist, text is correct', () => {
    before(() => {
        landingPageElements.navigate();
    });

    it('Page elements exist',  () => {
        landingPageElements.appOpen();
        landingPageElements.topMenuElementsExist();
        landingPageElements.elementsExist();
        landingPageElements.topMenuLabelsCorrect();
        landingPageElements.textIsCorrect()

    });

    // it('Labels are correct', () => {
    //     companyAccount.dropdownUserProfile().click();
    //     companyAccount.settings().click();
    //     companyAccount.topMenuLabelsAreCorrect('businessOwner businessOwner');
    //     companyAccount.labelsAreCorrect();
    //     companyAccount.sideMenuLabelsAreCorrect();
    // });
});