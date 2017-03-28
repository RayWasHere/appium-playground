exports.config = {

  specs: ['./login.js'],
  maxInstances: 1,
  capabilities: [{
    services: ['appium'],
    browserName: 'android',
    platformName: 'android',
    app: __dirname + '/tradie.apk',
    deviceName: 'android'
  }],
  host: 'localhost',
  port: 4723,
    //
    // ===================
    // Test Configurations
    // ===================

  sync: true,

  logLevel: 'silent',

  reporters: ['dot', 'spec'],

  coloredLogs: true,

  screenshotPath: './errorShots/',

  waitforTimeout: 120000,

  connectionRetryTimeout: 90000,

  connectionRetryCount: 3,

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 240000
  }
}
