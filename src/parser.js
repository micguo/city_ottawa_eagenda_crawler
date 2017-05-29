"use strict";

module.exports = {

    parse: function ($) {
        let data = [];
        $(".Results").each(function () {
            let title = $(this).children(".MeetingCell").text();
            let date = $(this).children(".DateCell").text();
            let time = $(this).children(".TimeCell").text();
            let contact = $(this).children(".ContactCell").html();
            let id = $(this).find("a[href*=\"meetid\"]").first().attr("href").match(/[0-9]{4,5}/).pop();
            if (id !== "undefined") {
                data.push({
                    "id": id,
                    "title": title,
                    "date": date,
                    "time": time,
                    "contact": contact
                });
            }
        });

        return data;
    }
};