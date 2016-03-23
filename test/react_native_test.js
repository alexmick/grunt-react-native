'use strict';

var grunt = require('grunt');
var crypto = require('crypto');

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

// TODO Find a more reliable way to test

// Calculate checksum of files (this avoids dumping the whole file to log on assert error)
function checksum (str, algorithm, encoding) {
  return crypto
    .createHash(algorithm || 'md5')
    .update(str, 'utf8')
    .digest(encoding || 'hex');
}

exports.react_native = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  ios: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/index.ios.bundle');
    var expected = grunt.file.read('test/expected/index.ios.bundle');
    test.equal(checksum(actual), checksum(expected), 'Match ios files.');

    test.done();
  },
  android: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/index.android.bundle');
    var expected = grunt.file.read('test/expected/index.android.bundle');
    test.equal(checksum(actual), checksum(expected), 'Match android files.');

    test.done();
  },
};
