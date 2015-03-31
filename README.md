# changelog-init
[![NPM](https://nodei.co/npm/changelog-init.png)](https://nodei.co/npm/changelog-init/)

Creates a keepachangelog.com changelog in the current directory.  It tries to grab some default values from package.json and folder names.  

## Install

```sh
$ npm i changelog-init -g
```

Or use it apart of a larger work flow.

## CLI

```sh
$ cd project-dir
$ changelog-init
CHANGELOG.md created at /project-dir/CHANGELOG.md
$ cat CHANGELOG.md
# project-dir Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 2.34.5 - 2015-03-30
* ...

```

`changelog-init` won't overwrite existing changelogs unless you tell it to:

```sh
$ changelog-init
CHANGELOG.md already exists
$ changelog-init -F
Force overwriting existing changelog
CHANGELOG.md created at /project/CHANGELOG.md
```

You can specify a path as well:

```sh
$ changelog-init /path/to/project
CHANGELOG.md created at /path/to/project/CHANGELOG.md
```

## API

```js
var init = require('changelog-init')
var opts = {force: false}
init('/path/to/project/', opts, function(err, path) {
  // Stuff
})
```

`init` returns an `error` and a `path` where the CHANGELOG.md was saved. 

## References

- https://gist.github.com/ngoldman/476a87abd16cd970bb9f
- http://keepachangelog.com/
- https://github.com/ngoldman/gh-release
- https://github.com/ngoldman/versioneer
- https://github.com/finnp/create-module
- https://github.com/ngoldman/changelog-parser`
