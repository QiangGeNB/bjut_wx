var Student = require('../schema/student.js')
var mongoose=require('mongoose');

exports.create=function(data,callback){
    	student=new Student({
			openid:data.openid,
			session_key:data.session_key,
			userInfo:data.userInfo,
			nickName:data.nickName,
			avatarUrl:data.avatarUrl,
			gender:data.gender,
			province:data.province,
			city:data.city,
			country:data.country,
			language:data.language
    });
    student.save(function(err,student){
        if(!err){
            callback(null,student);
        }
        else{
　　　　　　　callback(err,null);
        }
    });
};

exports.findbyid=function(id,callback){
	console.log(id);
    Student.find({"openid":id},function(err,student){
    	console.log(student);
 		callback(err,student);
    });
};