# grunt-react-native [![Build Status](https://travis-ci.org/alexmick/grunt-react-native.svg?branch=master)](https://travis-ci.org/alexmick/grunt-react-native) [![npm](https://img.shields.io/npm/dt/grunt-react-native.svg)](https://www.npmjs.com/package/grunt-react-native)

> A grunt plugin for launching the React Native packager and bundle your files for release

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install react@^0.14.5 react-native@^0.24.1 grunt-react-native --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-react-native');
```

## The "react_native" task

### Overview
In your project's Gruntfile, add a section named `react_native` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  react_native: {
    your_target: {
      options: {
        // Target-specific options go here.
      }
      // Target-specific files go here.
    },
  },
});
```

### Options

#### options.minify
Type: `Boolean`
Default value: `false`

Setting to true will minify the resulting bundle.

#### options.platform
Type: `String`
Default value: The task's (target) name

Which platform the bundle is made for.

#### options.reset_cache
Type: `Boolean`
Default value: `false`

Passe the reset cache option to react native packager (see https://github.com/facebook/react-native/issues/4968)

#### options.verbose
Type: `Boolean`
Default value: `false`

Verbose mode.

#### options.watch
Type: `Boolean`
Default value: `false`

Watch mode, this will launch the react native packager server for development.

### Usage Examples

```js
grunt.initConfig({
  react_native: {
    ios: {
      options: {
        minify: false,
        verbose: false,
        watch: false,
      },
      src: 'src/index.ios.js',
      dst: 'build/index.ios.bundle',
    },
    watch: {
      options: {
        verbose: false,
        watch: true,
      },
      src: 'src/', // The directory to watch and serve
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### V 2.1.4 Use peer dependencies

### V 2.1.3 Update dependency management

### V 2.1.2 Major release version bump because of ownership transfer to @alexmick

### V 0.1.2 Include assets

Features :
* Now bundles your assets as well
 
To do :
* Find a more reliable way to test output files

### V 0.1.1 Fix tests

Fixes :
* Failing tests (react-native's fault)
 
To do :
* Find a more reliable way to test output files
* Manage assets destination


### V 0.1.0 Initial Release

Supports :
* Bundle task
* Watch task
 
To do :
* Manage assets destination
