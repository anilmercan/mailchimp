
/*
 * User Router - http://SERVER:PORT/user/
 */
var YOUTUBE = require('../config/youtube/send_video');
var OAUTH=require('../config/youtube/yotube');



module.exports = function(router){


    router.post('/youtubeApi',function(req,res){

        var url = OAUTH.url;
        console.log(url);
        res.send(url)
    });




    return router;
}
