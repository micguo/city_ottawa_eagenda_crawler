/*jshint node:true, mocha:true */
"use strict";

let assert = require("assert");
let fs = require("fs");
let parser = require("../src/parser");
let cheerio = require("cheerio");

describe("Parser", function() {
    describe("searchResultPage", function() {
        it("should parse data into designed data structure", function() {
            let message = "Failed to parse search result page.";
            let testPage;
            testPage = fs.readFileSync(__dirname + "/data/searchResultPage.html", {encoding: "utf8", flag: "r"});
            let data = parser.parse(cheerio.load(testPage));
            let expectedParseResult = JSON.parse(fs.readFileSync(
                __dirname + "/data/parsedSearchResult.json",
                {encoding: "utf8", flag: "r"}
            ));
            assert.deepStrictEqual(data, expectedParseResult, message);
        });
    });
});