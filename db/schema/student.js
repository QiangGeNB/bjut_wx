var mongoose = require('../db.js')

var StudentSchema = new mongoose.Schema({
	openID:String,
	session_key:String,
	userInfo:String,
	nickName:String,
	avatarUrl:String,
	gender:Number,
	province:String,
	city:String,
	country:String
})

module.exports = mongoose.model('bjut_student',StudentSchema);