'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.react_native = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  ios: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/dev/index.ios.bundle');
    var expected = grunt.file.read('test/expected/dev/index.ios.bundle');
    test.equal(actual, expected, 'Match ios files.');

    test.done();
  },
  android: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/dev/index.android.bundle');
    var expected = grunt.file.read('test/expected/dev/index.android.bundle');
    test.equal(actual, expected, 'Match android files.');

    test.done();
  },
  ios_release: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/release/index.ios.bundle');
    var expected = grunt.file.read('test/expected/release/index.ios.bundle');
    test.equal(actual, expected, 'Match ios files.');

    test.done();
  },
  android_release: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/release/index.android.bundle');
    var expected = grunt.file.read('test/expected/release/index.android.bundle');
    test.equal(actual, expected, 'Match android files.');

    test.done();
  },
};
