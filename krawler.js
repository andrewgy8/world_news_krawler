// TODO: Organize world news articles for easy accessibility
// TODO: create json of all the sites with world news to parse through

var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

// Load the LODASH .
var _ = require('cheerio/node_modules/lodash');


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
            // var linksToNews = $('.story-headline').find('a')
            // var newsGroup = $('section').children().last()
            // console.log("Page section: " + newsGroup);
            // console.log('link?', newsGroup.length)
            // var jsonNews = JSON.stringify(newsGroup)
            // console.log(typeof(jsonNews))
            // var values2 = newsGroup.map(function(item){
            //     item.position == 13
            // })
            // var values = _.mapValues(newsGroup, function(o){ return o})
            // console.log(values.prevObject)
            // console.log(values2)
            // console.log(jsonNews)

        }
        collectTheLinks($)
    });




function searchForLinksToNews($, word){

}

function collectTheLinks($){
    var links = [];

    var absoluteLinks = $("a[href^='https://www.washingtonpost.com/world']");
    absoluteLinks.each(function(){
        links.push($(this).attr('href'));
    })

    console.log('found these story links ' + links)
    console.log('there are  links ' + links.length)
    console.log(links[1])

    console.log('I give eva many kisses?')
    console.log('of course')
}



