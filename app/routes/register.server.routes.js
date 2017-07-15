var registerServerController=require('../controller/register.server.controller.js');
module.exports=function(app){
    app.route('/api/register').post(registerServerController.signup);
};
