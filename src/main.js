"use strict";

let Crawler = require("crawler"),
    Parser = require("./parser"),
    dateFormat = require("dateFormat");
let c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        let data;
        let a;
        if(error){
            console.log(error);
        }else{
            a = res.$;
            data = Parser.parse(a);
        }
        console.log(data);
        done();
    }
});

// Queue just one URL, with default callback
exports.run = function(startDate, endDate) {
  c.queue([{
    "uri": "http://app05.ottawa.ca/sirepub/meetresults.aspx?view=Search&startdate=" +
        dateFormat(startDate, "yyyy-mmm-dd") +
        "&enddate=" +
        dateFormat(endDate, "yyyy-mmm-dd"),
    "userAgent": "Mozilla/5.0"
  }]);
};