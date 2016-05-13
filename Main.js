#!/usr/bin/env node

//file for command line running

var fs = require('fs');
var userArgs = process.argv.slice(2);
var vm = require("./src/VirtMachine.js");

//reads string from file, and executes the code
fs.readFile(userArgs[0], 'utf-8', function (err, data) {
    if (err) throw err;
    var mach = new vm.triogmatic();
    console.log(mach.runcode(data));
});
