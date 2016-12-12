/*
 * Main Router
 */


module.exports = function(app, routers,passport){










  var rt_index = require('./index')(routers['index']);
  var rt_twitter= require('./twitter')(routers['twitter']);
  var rt_mailChimp= require('./mailchimp')(routers['mailChimp']);
  var rt_youtube= require('./youtube')(routers['youtube']);
  var rt_facebook= require('./facebook')(routers['facebook']);
  var rt_sendy= require('./sendy')(routers['sendy']);





  app.use("/api", rt_facebook);
  app.use("/sendy", rt_sendy);
  app.use("/twitter", rt_twitter);
  app.use("/mailChimp", rt_mailChimp);
  app.use("/youtube", rt_youtube);
  app.use('/', rt_index);



};
