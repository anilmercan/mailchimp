'use strict';


var Youtube = require('youtube-api');
var youtube = Youtube({
    video: {
        part: 'status,snippet'
    },
    email: 'anil@deplike.com',
    password: 'anil_mercan'
})
var  oauth = Youtube.authenticate({
    type: "oauth"
    , client_id: "925860651151-ionsjmlno1eid2nmf8o110c6854saaka.apps.googleusercontent.com"
    , client_secret: "2LeJUO_QUD254EDhBL5a7a7E"
    , redirect_url: "http://localhost:8080/oauth2callback"
});

module.exports.YOUTUBE=youtube;
