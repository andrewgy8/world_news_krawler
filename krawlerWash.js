// TODO: Organize world news articles for easy accessibility
// TODO: create json of all the sites with world news to parse through

var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

// Load the LODASH .
var _ = require('cheerio/node_modules/lodash');


var pageToVisit = 'https://www.washingtonpost.com/world/';


console.log("We are going to be visiting " + pageToVisit + "and extracting the world news from it")

function visitPage(pageToVisit){
    request(pageToVisit, function(error, response, body){
        if(error){
            console.log("error:" + error)
        }
        console.log("status code: " + response.statusCode);
        if(response.statusCode === 200){
            var $ = cheerio.load(body);
            collectTheLinks($, pageToVisit)
        }
    })
}


function collectTheLinks($, pageToVisit){
    var links = [];

    var absoluteLinks = $("a[href^='https://www.washingtonpost.com/world']");
    console.log(absoluteLinks)
    absoluteLinks.each(function(){
        links.push({ link: $(this).attr('href') });
    })
    console.log('this is links', links)
    return links
}

links = visitPage(pageToVisit)

// console.log('found these story links ' + links)
// console.log('there are  links ' + links.length)


