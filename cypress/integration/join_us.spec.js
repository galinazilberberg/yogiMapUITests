import JoinUsPage from "../support/page_objects/__join_us_page";
import {user} from "../fixtures/example.json";
import LandingPage from "../support/page_objects/_landing_page";

const joinUs = new JoinUsPage();
const landingPage = new LandingPage();

describe('Register New User', () => {

    before(() => {
        joinUs.open();
    }) ;

    it('Elements exist', () => {
        joinUs.elementsExists();
    });

    it('Labels are correct', () => {
        joinUs.labelsAreCorrect();
    });

    it('Submit button enabled after filling required fields', () => {
        joinUs.submitButtonIsEnabled(user.nickName,  user.email, user.password);
    });
    describe ('Additional links redirect', () => {
        it('YogiMap Back button click => landing page redirect', () => {
            joinUs.yogimapLogoBackButton();
            landingPage.navigate();
        });
    });
});