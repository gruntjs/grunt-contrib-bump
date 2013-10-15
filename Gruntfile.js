/*
 * grunt-contrib-bump
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        'test/*.js',
      ],
      options: {
        jshintrc: '.jshintrc'
      },
    },
    bump: {
      options: {
        commit: false,
        tag: false,
        filepaths: ['tmp/package.json'],
      },
    },
    nodeunit: ['test/*_test.js'],
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'nodeunit', 'build-contrib']);
};