var helper = require('./helper');

describe('Home : login/register', function () {

  beforeEach(function () {
    isAngularSite(false);
    browser.get(browser.params.msUrl);
  });

  it('should have a mastered title', function () {

    var title = 'Online talent programs led by fashion industry icons';

    expect(browser.getTitle()).toEqual(title);
  });

  it('should fail sign in with incorrect password', function () {

    var signInIcon = element(by.xpath(".//*[@id='bs-example-navbar-collapse-1']/ul[2]/li/a")),
      signInButton = element(by.xpath(".//*[@id='new_user']/button")),
      userEmailField = element(by.xpath(".//*[@id='user_email']")),
      userPasswordField = element(by.xpath(".//*[@id='user_password']")),
      signInError = element(by.css(".alert-box.alert.no-mar"));

    signInIcon.click();

    helper.waitUntilReady(userEmailField);
    userEmailField.sendKeys('test@test.com');
    helper.waitUntilReady(userPasswordField);
    userPasswordField.sendKeys('password');

    signInButton.click();

    helper.waitUntilReady(signInError);
    expect(signInError.getText()).toBe('Invalid email or password.');

  });
});
