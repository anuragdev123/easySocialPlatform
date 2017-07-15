var register=require('../models/register.server.model.js');
var con=require('../../config/dbconnection.js')
exports.save=function(data){
    var msg="";
    var sql = "INSERT INTO register (username, email, password) VALUES ?";
    var value=[[data.userName,data.email,data.password]]
  var res=con.query(sql,[value], function (err, result) {
      console.log(result)
    if (err)
        throw err;
      return "success"  
  });
    return res;
}

//("+ data.userName +',' +data.email+','+ data.password+")";