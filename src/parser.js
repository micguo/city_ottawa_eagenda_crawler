"use strict";

module.exports = {

    parse: function ($) {
        var data = [];
        $(".Results").each(function () {
            var id = $(this).find("a[href*=\"meetid\"]").first().attr("href").match(/[0-9]{4,5}/).pop();
            if (id !== "undefined") {
                data.push({"id": id});
            }
        });

        return data;
    }
};