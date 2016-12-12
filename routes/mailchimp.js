
/*
 * User Router - http://SERVER:PORT/user/
 */

var mailChimp = require('../config/mailchimp/mail-subscribe');
module.exports = function(router){

    router.post('/newsletter',function(req,res){

        var mailChimpUser = req.body;

        mailChimp.mcApi.listSubscribe({id: mailChimp.MailChimpListId, email_address: mailChimpUser.email,
                merge_vars:mailChimpUser,  double_optin: false},

            function (error, data) {
                if (error) {
                    console.log(error);
                    res.json(true);
                }
                else {
                    console.log(data);
                    res.json(false);
                }
            });

    })

  return router;
}
