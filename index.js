var fs = require('fs')
var path = require('path')
var format = require('util').format

var template =
'# %s Change Log\n' +
'All notable changes to this project will be documented in this file.\n' +
'This project adheres to [Semantic Versioning](http://semver.org/).\n' +
'\n' +
'## %s - %s\n' +
'* ...\n'

function getPackage (dir, cb) {
  var packagePath = path.resolve(dir, 'package.json')
  fs.readFile(packagePath, function (err, data) {
    if (err) return cb(err)
    var package = JSON.parse(data)
    cb(null, package)
  })
}

function getData (dir, cb) {
  var name
  var version
  getPackage(dir, function (err, package) {
    if (err) {
      console.warn('No pacakge.json found')
      name = path.basename(dir)
      version = '1.0.0'
    } else {
      name = package.name
      version = package.version
    }
    var now = new Date()
    var dateStamp = now.toISOString().split('T')[0]
    var output = format(template, name, version, dateStamp)
    cb(output)
  })
}

function checkForExisting (logPath, cb) {
  fs.stat(logPath, function (err, stats) {
    if (err && err.code === 'ENOENT') return cb()
    else return cb(new Error('CHANGELOG.md already exists', stats || err))
  })
}

function init (dir, opts, cb) {
  var clPath = path.join(dir, 'CHANGELOG.md')
  checkForExisting(clPath, function (err, msg) {
    if (err && opts.force === false) return cb(err)
    else if (err && opts.force === true) console.warn('Force overwriting existing changelog')

    getData(dir, function (output) {
      fs.writeFile(clPath, output, function (err) {
        if (err) return cb(err)
        cb(null, clPath)
      })
    })
  })
}

module.exports = init
