var helper = require('./helper');

describe('Protractor demo app', function () {
  it('should have a title', function () {
    browser.get(browser.params.url);

    var title = 'Etsy :: Your place to buy and sell all things handmade';

    expect(browser.getTitle()).toEqual(title);
  });

  it('should sign in', function () {
    browser.get(browser.params.url);

    var signInButton = element(by.id('sign-in')),
      signInLoginForm = element(by.id('signin-button')),
      usernameField = element(by.id('username-existing')),
      userPasswordField = element(by.id('password-existing')),
      passwordExistingError = element(by.id('password-existing-error'));

    signInButton.click();
    helper.waitUntilReady(usernameField);
    usernameField.sendKeys('test@test.com');
    helper.waitUntilReady(userPasswordField);
    userPasswordField.sendKeys('password');
    signInLoginForm.click();
    helper.waitUntilReady(passwordExistingError);
    expect(passwordExistingError.getText()).toBe('Password was incorrect.');

  });
});
