
/*
 * User Router - http://SERVER:PORT/user/
 */



const Youtube = require("youtube-api")

var fs = require("fs");

var passportTwitter = require('../config/auth/twitter');




module.exports = function(router){



    router.get('/auth/twitter', passportTwitter.authenticate('twitter'));

    router.get('/auth/twitter/callback',
        passportTwitter.authenticate('twitter', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication
            res.json(req.user);
        });




    router.get("/oauth2callback",function(req,res){

        var code = req.query.code;
        console.log("Code -> " + code);

        var oauth = Youtube.authenticate({
            type: "oauth"
            , client_id: "925860651151-ionsjmlno1eid2nmf8o110c6854saaka.apps.googleusercontent.com"
            , client_secret: "2LeJUO_QUD254EDhBL5a7a7E"
            , redirect_url: "http://localhost:8080/oauth2callback"
        });


        // Open the authentication url in the default browser
        oauth.generateAuthUrl({
            access_type: "offline"
            , scope: ["https://www.googleapis.com/auth/youtube.upload"]
        });


        oauth.getToken(code, function (err, tokens) {
            oauth.setCredentials(tokens);

            Youtube.videos.insert({
                resource: {
                    // Video title and description
                    snippet: {
                        title: "Test"
                        , description: "TEst"
                    }
                    // I don't want to spam my subscribers
                    , status: {
                        privacyStatus: "public"
                    }
                }
                // This is for the callback function
                , part: "snippet,status"

                // Create the readable stream to upload the video
                , media: {
                    body: fs.createReadStream("./public/video/v.mp4")
                }
            }, function (err, data) {
                if (err) { return lien.end(err, 400); }
                callback(err, data);
            });


            function callback (err, data) {
                if (err) {
                    console.error(err);
                    return res.status(err.code).send(err);
                }

                res.send(data);
            }
        });


    });








    return router;
}
