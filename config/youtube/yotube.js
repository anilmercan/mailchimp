var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(
    "925860651151-ionsjmlno1eid2nmf8o110c6854saaka.apps.googleusercontent.com",
    "2LeJUO_QUD254EDhBL5a7a7E",
    "http://localhost:8080/oauth2callback"
);




// generate a url that asks permissions for Google+ and Google Calendar scopes 
var scopes = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/youtube.upload'
];

var url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',

    // If you only need one scope you can pass it as string
    scope: scopes
});


console.log(url);

module.exports.url=url;
module.exports.oauth2Client=oauth2Client;
/*
oauth2Client.getToken(code, function (err, tokens) {
    // Now tokens contains an access_token and an optional refresh_token. Save them.
    console.log(tokens)
    if (!err) {
        oauth2Client.setCredentials(tokens);
        console.log(tokens)
    }
});
*/
