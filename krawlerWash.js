// TODO: Organize world news articles for easy accessibility
// TODO: create json of all the sites with world news to parse through

// This returns array of all links on a given website
var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

// Load the LODASH .
var _ = require('cheerio/node_modules/lodash');
var pageToVisit = 'https://www.washingtonpost.com/world/';

function visitPage(pageToVisit){
    return new Promise((resolve, reject) => {
    // select http or https module, depending on reqested url
    const lib = pageToVisit.startsWith('https') ? require('https') : require('http');
    const request = lib.get(pageToVisit, (response) => {
      // handle http errors
        if (response.statusCode < 200 || response.statusCode > 299) {
            reject(new Error('Failed to load page, status code: ' + response.statusCode));
        }
        const body = []
      // temporary data holder
        // console.log(response)

        response.on('data', (chunk) => {
            const $ = cheerio.load(chunk)
            var links = collectTheLinks($)
            body.push(links)
        });

        response.on('end', () => resolve(body.join(' ')));
        
    });
    // handle connection errors of the request
    request.on('error', (err) => reject(err))
    })
}


function collectTheLinks($){
    const links = [];
    var absoluteLinks = $("a[href^='https://www.washingtonpost.com/world']");

    absoluteLinks.each(function(){
        links.push( $(this).attr('href') );
    })
    console.log('links', links)
    return links
}

visitPage(pageToVisit).then((ticks) => {
    console.log('this is links', ticks)
    listOutLinks(ticks)
})





