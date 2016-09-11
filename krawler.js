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
        // var divs = $('div').attr()
        var linksToNews = $('.story-headline').find('a')
        console.log("Page section: " + $('section').text());
        // console.log(linksToNews)
        // divs.forEach(function(element) {
        //     console.log(element)
        // }) 

        // for (var key in linksToNews) {
        //     if (linksToNews.hasOwnProperty(key)) {
        //         console.log(key + " -> " + linksToNews[key]);
        //     }
        // };
    }
    collectTheLinks(linksToNews)
});

function searchForLinksToNews($, word){

}

function collectTheLinks($){
    var links = [];

    var absoluteLinks = $("a[href^='http']");
    absoluteLinks.each(function(){
        links.push($(this).attr('href'));
    })

    console.log('found these story links ' + links)
    console.log('there are  links ' + links.length)
}

function visitPage(){

}
