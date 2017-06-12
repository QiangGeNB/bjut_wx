var Student = require('../schema/student.js')
var mongoose=require('mongoose');

exports.create=function(data,callback){
    var student=new Student({
        Name:data.name
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
