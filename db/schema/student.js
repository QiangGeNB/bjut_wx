var mongoose = require('../db.js')

var StudentSchema = new mongoose.Schema({
	openid:String,//openid
	session_key:String,//session_key
	userInfo:String,
	nickName:String,//昵称
	avatarUrl:String,//头像地址
	gender:Number,//性别
	province:String,//省份
	city:String,//城市
	country:String,//国家
	language:String,//语言
	studentID:String,//学号
	enter_year:String,//入学年份
	collection_activity:[{
		activityID:Number//收藏活动编号
	}],
	activity:[{
		activityID:Number//参与活动编号
	}]
})

module.exports = mongoose.model('bjut_student',StudentSchema);