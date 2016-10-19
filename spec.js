var helper = require('./helper');

describe('Main page : login/register', function () {

  beforeEach(function () {
    isAngularSite(false);
    browser.get(browser.params.url);
  });

  afterEach(function () {
    browser.manage().deleteAllCookies();
  });

  it('should have a title', function () {

    var title = 'Etsy :: Your place to buy and sell all things handmade';

    expect(browser.getTitle()).toEqual(title);
  });

  it('should fail sign in and show error for incorrect password', function () {

    var signInButton = element(by.id('sign-in')),
      signInLoginForm = element(by.id('signin-button')),
      usernameField = element(by.id('username-existing')),
      userPasswordField = element(by.id('password-existing')),
      passwordExistingError = element(by.id('password-existing-error'));

    signInButton.click();

    helper.waitUntilReady(usernameField);
    usernameField.sendKeys('test@test.com');
    userPasswordField.sendKeys('password');

    signInLoginForm.click();

    helper.waitUntilReady(passwordExistingError);
    expect(passwordExistingError.getText()).toBe('Password was incorrect.');

  });

  it('should register a new user', function () {
    var registerButtonOnMainPage = element(by.id('register'));

    registerButtonOnMainPage.click();
  });
});
