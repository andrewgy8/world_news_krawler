// TODO: Organize world news articles for easy accessibility
// TODO: create json of all the sites with world news to parse through

var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');


var pageToVisit = 'https://www.washingtonpost.com/world/';

console.log("We are going to be visiting " + pageToVisit + "and extracting the world news from it")

request(pageToVisit, function(error, response, body){
    if(error){
        console.log("error:" + error)
    }
    console.log("status code: " + response.statusCode);
    if(response.statusCode === 200){
        var $ = cheerio.load(body);
        console.log("Page body: " + $('body').text());
    }
});