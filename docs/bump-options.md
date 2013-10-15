# Settings

## filepaths
Type: `String|Array`  
Default: `['package.json']`

File paths of the meta file(s) you wish to operate on.

## syncVersions
Type: `Boolean`  
Default: `false`

If syncVersions is enabled, only grab version from the first file, guaranteeing new versions will always be in sync.

## commit
Type: `Boolean`  
Default: `true`

Whether to commit the release.

## commitMessage
Type: `String`  
Default: `'Bumping version to {%= version %}.'`

The message format to use when committing a release.

## tag
Type: `Boolean`  
Default: `true`

Whether to tag a release.

## tagName
Type: `String`  
Default: `'v{%= version %}'`

The name of the tag when tagging a release.

## tagMessage
Type: `String`  
Default: `'Version {%= version %}'`

The message of the tag when tagging a release.

## tagPrerelease
Type: `Boolean`  
Default: `false`

Whether to tag prerelease versions.
