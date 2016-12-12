
/*
 * User Router - http://SERVER:PORT/user/
 */


module.exports = function(router){

  router.get('/1', function(req, res) {
    console.log(req.toString())
  });
  return router;
};
