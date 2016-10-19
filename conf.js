exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js', 'mastered_spec.js'],
  params: {
    url: 'https://www.etsy.com/',
    msUrl: 'http://localhost:3000/'
  },
  onPrepare: function () {
    global.isAngularSite = function (flag) {
      browser.ignoreSynchronization = !flag;
    };
  }
};
