var Crawler = require("crawler");


var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($.text());
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue([{
	'uri': 'http://app05.ottawa.ca/sirepub/mtgviewer.aspx?meetid=6977',
	'userAgent': 'Mozilla/5.0',
}]);