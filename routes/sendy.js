
/*
 * User Router - http://SERVER:PORT/user/
 */

var sendy = require('../config/sendy/sendy');
module.exports = function(router){


    router.post('/api',function(req,res){


        console.log("Sendy Req  - > " + req.body.toString);
        var params = {
            email: req.body.email,
            list_id: sendy.sendy_list_id
        }

        sendy.sendy.subscribe(params, function(err, result) {
            if (err) console.log(err.toString());
            else console.log(result);
        });


    });

  return router;
}
