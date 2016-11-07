var describe = require('mocha/lib/mocha.js').describe;
var expect = require('expect');
var expectJSX = require('expect-jsx');
var it = require('mocha/lib/mocha.js').it;
var React = require('react');

expect.extend(expectJSX);

var Component = require('./Component.jsx');

describe('Component', function () {
    it('says test', function (done) {
        expect(
            <Component />
        ).toEqualJSX(
            <time>to test</time>
        );
        done();
    });
});
