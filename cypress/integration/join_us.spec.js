import JoinUsPage from "../support/page_objects/__join_us_page";
import {user} from "../fixtures/example.json";
const joinUs = new JoinUsPage();

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
});