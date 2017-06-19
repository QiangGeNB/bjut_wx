var mongoose = require('../db.js')

var StudentSchema = new mongoose.Schema({
	openid:String,
	session_key:String,
	userInfo:String,
	nickName:String,
	avatarUrl:String,
	gender:Number,
	province:String,
	city:String,
	country:String,
	language:String
})

module.exports = mongoose.model('bjut_student',StudentSchema);