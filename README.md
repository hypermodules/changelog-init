# changelog-init
[![NPM](https://nodei.co/npm/changelog-init.png)](https://nodei.co/npm/changelog-init/)

Creates a keepachangelog.com changelog in the current directory. 

## Install

```sh
$ npm i changelog-init -g
```

Or use it apart of a larger work flow.

## CLI

```sh
$ cd project-dir
$ changelog-init
```

`changelog-init` won't overwrite existing changelogs unless you tell it to:

```sh
$ changelog-init -F
Force overwriting existing changelog
CHANGELOG.md created at /project/CHANGELOG.md
```

You can specify a path as well:

```sh
$ changelog-unit /path/to/project
CHANGELOG.md created at /path/to/project/CHANGELOG.md
```

## API

```js
var init = require('changelog-init')
var opts = {force: false}
init('path/to/changelog', opts, function(err, path) {
  // Stuff
})
```

`init` returns and `error` and a `path` where the CHANGELOG.md was saved. 
