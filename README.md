# grunt-contrib-bump v0.1.0

> Bump the version property of a JSON file.


## WORK IN PROGRESS (unreleased)

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-bump --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-bump');
```




## Bump task
_Run this task with the `grunt bump` command._


### Settings

#### filepaths
Type: `String|Array`  
Default: `['package.json']`

File paths of the meta file(s) you wish to operate on.

#### syncVersions
Type: `Boolean`  
Default: `false`

If syncVersions is enabled, only grab version from the first file, guaranteeing new versions will always be in sync.

#### commit
Type: `Boolean`  
Default: `true`

Whether to commit the release.

#### commitMessage
Type: `String`  
Default: `'Bumping version to 0.1.0.'`

The message format to use when committing a release.

#### tag
Type: `Boolean`  
Default: `true`

Whether to tag a release.

#### tagName
Type: `String`  
Default: `'v0.1.0'`

The name of the tag when tagging a release.

#### tagMessage
Type: `String`  
Default: `'Version 0.1.0'`

The message of the tag when tagging a release.

#### tagPrerelease
Type: `Boolean`  
Default: `false`

Whether to tag prerelease versions.

### Usage examples

```bash
grunt bump:major        # bump major version, eg. 1.0.2 -> 2.0.0
grunt bump:minor        # bump minor version, eg. 0.1.3 -> 0.2.0
grunt bump:patch        # bump minor version, eg. 0.0.1 -> 0.0.2

### If the current version is already a prerelease version, this will work.
grunt bump:prerelease   # bump prerelease version, eg. 0.0.1-9 -> 0.0.1-10

### But if it isn't you'll run into an improperly bumped version.
grunt bump:prerelease   # bump prerelease version, eg. 1.0.2 -> 1.0.2-0
grunt bump:prerelease   # bump prerelease version, eg. 0.1.3 -> 0.1.3-0
grunt bump:prerelease   # bump prerelease version, eg. 0.0.1 -> 0.0.1-0

### Because prerelease has no idea if you're going from 0.0.1 to 0.0.2-0
### or 0.1.0-0 or 1.0.0-0, you need to use it in conjunction with one of
### the other three semver increment modes. You can specify any number of
### :-separated modes.
grunt bump:major:prerelease   # eg. 1.0.2 -> 2.0.0-0
grunt bump:minor:prerelease   # eg. 0.1.3 -> 0.2.0-0
grunt bump:patch:prerelease   # eg. 0.0.1 -> 0.0.2-0

### You can also use abbreviations, as long as they aren't ambiguous
grunt bump:ma:pr   # still works, eg. 1.0.2 -> 2.0.0-0
grunt bump:mi:pr   # still works, eg. 0.1.3 -> 0.2.0-0
grunt bump:pa:pr   # still works, eg. 0.0.1 -> 0.0.2-0
```


## Release History

 * 2013-10-15   v0.1.0   Work in progress, not yet officially released.

---

Task submitted by ["Cowboy" Ben Alman](http://benalman.com/)

*This file was generated on Thu Oct 24 2013 10:42:13.*
