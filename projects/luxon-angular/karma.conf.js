module.exports = function (config) {
  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['Chrome'],
    client: {
      clearContext: false
    },
    colors: true,
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../coverage/luxon-angular'),
      fixWebpackSourcePaths: true,
      reports: ['html', 'lcovonly', 'text-summary']
    },
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    logLevel: config.LOG_INFO,
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    port: 9876,
    reporters: ['progress', 'kjhtml'],
    restartOnFileChange: true,
    singleRun: false
  });
};
