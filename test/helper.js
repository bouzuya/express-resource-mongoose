var sinon = require('sinon');
var expect = require('chai').use(require('sinon-chai')).expect;

global.expect = expect;

beforeEach(function() {
  this.sinon = sinon.sandbox.create();
});

afterEach(function() {
  this.sinon.restore();
});

