#!/usr/bin/env node

'use strict';

process.title = 'ottawa_eagenda_crawler';

let ottawaeAgendaCrawler = require("../src/main.js");

function showCommandOpt()
{
  let text = "\nCLI for City of Ottawa eAgenda Crawler.\n";
  text += "\t--startdate: YYYY-MM-DD (required)\n";
  text += "\t--enddate: YYYY-MM-DD (required)\n";
  text += "\t--help\n\n";
  console.log(text);
}

// ottawa_eagenda_crawler.run();
let argv = require("minimist")(process.argv.slice(2));
if (argv.help !== undefined ||
    argv.startdate === undefined ||
    null === argv.startdate.match(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/) ||
    argv.enddate === undefined ||
    null === argv.enddate.match(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/)
) {
  console.log(argv);
  showCommandOpt();
  return;
}

// let start
let timezoneDifference = (new Date()).getTimezoneOffset();
ottawaeAgendaCrawler.run(Date.parse(argv.startdate + " EST"), Date.parse(argv.enddate + "EST"));


