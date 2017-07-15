var register=require('../models/register.server.model.js');
exports.signup=function(req,res){
    var res1=register.save(req.body)
res.status(200).json("added");   
};


