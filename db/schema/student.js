var mongoose = require('../db.js')

var StudentSchema = new mongoose.Schema({
	Name:String
})

module.exports = mongoose.model('bjut_student',StudentSchema);