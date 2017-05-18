"use strict";

var Crawler = require("crawler"),
    Parser = require("./parser");

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        var data;
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            data = Parser.parse($);
        }
        console.log(data);
        done();
    }
});

// Queue just one URL, with default callback
c.queue([{
    "uri": "http://app05.ottawa.ca/sirepub/meetresults.aspx?view=Search&startdate=2017-May-01&enddate=2017-May-31",
    "userAgent": "Mozilla/5.0"
}]);