require("core-js/es6/reflect");
require("core-js/es7/reflect");

require("reflect-metadata");

require("zone.js/dist/zone");
require("zone.js/dist/proxy");
require("zone.js/dist/sync-test");
require("zone.js/dist/async-test");
require("zone.js/dist/fake-async-test");
require("jest-zone-patch");

const testing = require("@angular/core/testing");
const browser = require("@angular/platform-browser-dynamic/testing");

testing.getTestBed().initTestEnvironment(
  browser.BrowserDynamicTestingModule,
  browser.platformBrowserDynamicTesting()
);
