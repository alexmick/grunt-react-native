/*
 * grunt-react-native
 * https://github.com/alexmick/grunt-react-native
 *
 * Copyright (c) 2016 Alexander Micklewright
 * Licensed under the MIT license.
 */

'use strict';

var childProcess = require('child_process');
var path = require('path');

module.exports = function(grunt) {

  grunt.registerMultiTask('react_native', 'A grunt plugin for launching the React Native packager and bundle your files for relase', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      minify: false,
      platform: this.target,
      verbose: false,
      watch: false,
    });

    var cli = 'node ./node_modules/react-native/local-cli/cli.js ';
    var args = ' --reset-cache '; // workaround https://github.com/facebook/react-native/issues/4968
    if (options.verbose) {
      args += '--verbose ';
    }
    if (options.minify) {
      args += '--dev false ';
    }

    if (options.watch) {
      // The . here is crucial to fix issue https://github.com/facebook/react-native/issues/4968
      args += '--projectRoots .,' + this.data.src;

      grunt.log.debug("Running : " + cli + 'start' + args);
      childProcess.execSync(cli + 'start' + args, { stdio: 'inherit' });
    } else {
      // Make sur output dir exists as react-native won't create it
      var output_dir = path.dirname(this.data.dst);
      if (!grunt.file.exists(output_dir)) {
        grunt.file.mkdir(output_dir);
      }

      args += '--entry-file ' + this.data.src;
      args += ' --bundle-output ' + this.data.dst;
      args += ' --assets-dest ' + output_dir;
      args += ' --platform ' + options.platform;

      grunt.log.debug("Running : " + cli + 'bundle' + args);
      childProcess.execSync(cli + 'bundle' + args, { stdio: 'inherit' });
    }
  });

};
