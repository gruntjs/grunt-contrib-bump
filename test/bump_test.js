'use strict';

var grunt = require('grunt');
var path = require('path');

var fixture = path.resolve(__dirname, 'fixtures', 'package.json');
var tmp = path.resolve(__dirname, '..', 'tmp', 'package.json');

function testbump(cmd, cb) {
  grunt.util.spawn({
    grunt: true,
    args: [cmd, '--no-color'],
  }, function(err, result) {
    if (err) { throw new Error(err); }
    cb(String(result));
  });
}

exports.bump = {
  setUp: function(done) {
    grunt.file.copy(fixture, tmp);
    done();
  },
  tearDown: function(done) {
    grunt.file.delete(tmp);
    done();
  },
  major: function(test) {
    test.expect(2);
    testbump('bump:major', function(result) {
      test.ok(result.indexOf('from 0.1.0 to 1.0.0') !== -1, 'Should have bumped major version.');
      test.equal(grunt.file.readJSON(tmp).version, '1.0.0', 'Should have written the version to the file.');
      test.done();
    });
  },
  minor: function(test) {
    test.expect(2);
    testbump('bump:minor', function(result) {
      test.ok(result.indexOf('from 0.1.0 to 0.2.0') !== -1, 'Should have bumped minor version.');
      test.equal(grunt.file.readJSON(tmp).version, '0.2.0', 'Should have written the version to the file.');
      test.done();
    });
  },
  patch: function(test) {
    test.expect(2);
    testbump('bump:patch', function(result) {
      test.ok(result.indexOf('from 0.1.0 to 0.1.1') !== -1, 'Should have bumped patch version.');
      test.equal(grunt.file.readJSON(tmp).version, '0.1.1', 'Should have written the version to the file.');
      test.done();
    });
  },
  prerelease: function(test) {
    test.expect(2);
    testbump('bump:prerelease', function(result) {
      test.ok(result.indexOf('from 0.1.0 to 0.1.0-0') !== -1, 'Should have bumped prerelease version.');
      test.equal(grunt.file.readJSON(tmp).version, '0.1.0-0', 'Should have written the version to the file.');
      test.done();
    });
  },
};