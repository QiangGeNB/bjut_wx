var express = require('express');
var apiRoutes = express.Router();
var Student = require('../db/models/student.js');

apiRoutes.get('/add_student',function(req,res){
  Student.create({
      "openID":"openID",
      "userInfo":"userInfo",
      "nickName":"nickName",
      "avatarUrl":"avatarUrl",
      "gender":1,
      "province":"province",
      "city":"city",
      "country":"country"
      },function(err,result){
      if(!err){
          res.send(JSON.stringify(result));
      }
      else{
          res.send(err);
      }
  });
});

apiRoutes.get('/login',function(req,res){
	req.session.user = {
	     'username':"test"
	   }//User为存入数据库回调回来的用户对象
	  console.log(req.session);
  res.json({
    erron : 0,
    data : "cuiyao"
  });
  //res.send("success");
});


apiRoutes.get('/wrong',function(req,res){
	res.send("weiyanzheng");
});

module.exports = apiRoutes;
