/*jshint node:true, mocha:true */
"use strict";

var assert = require("assert");
var fs = require("fs");
var parser = require("../src/parser");
var cheerio = require("cheerio");

describe("Parser", function() {
    describe("searchResultPage", function() {
        it("should parse data into designed data structure", function() {
            var message = "Failed to parse search result page.";
            var testPage;
            testPage = fs.readFileSync(__dirname + "/data/searchResultPage.html", {encoding: "utf8", flag: "r"});
            var data = parser.parse(cheerio.load(testPage));
            var expectedParseResult = JSON.parse(fs.readFileSync(
                __dirname + "/data/parsedSearchResult.json",
                {encoding: "utf8", flag: "r"}
            ));
            assert.deepStrictEqual(data, expectedParseResult, message);
        });
    });
});