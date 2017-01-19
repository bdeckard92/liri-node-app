
var cmd = process.argv[2];

var input = process.argv[3];

var keys = require('./keys.js');

var request = require('request');

var express = require('express');

var twitter = require('twitter');

var tweeted = twitter(keys);

var params = {
    q: 'robertdeckard2',
    count: 20
}

var spotify = require('spotify');



//var keys = require('keys')

var fs = require('fs');



var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&r=&tomatoes=json";



switch (cmd) {
    case 'my-tweets':
        tweeted.get('search/tweets', params, tweets);

        function getData(error, tweet, response) {
            console.log(getData);
            /*if (!error) {

            }*/
        };
        break;
    case 'movie-this':
        console.log(queryUrl);
        console.log(input);
        request(queryUrl, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(JSON.parse(body));
            }
        });

        break;
    case 'spotify-this':
        spotify.search({ type: 'track', querry: input, limit: '1' }, function(error, data) {
            console.log(input);
            console.log(data);
            if ( error ) {
        console.log('Error occurred: ' + err);
        return;
    }
        })
        break;
    case 'do-what-it-says':
        break;
    default:
        console.log("I can't do that Dave");

}
