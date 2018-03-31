var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var customerSchema = new Schema({
    firstName : {type:String,required:true},
    lastName : {type:String,required:true},
    gender: {type:String,required:true},
    address:{type:String,required:true},
    age:{type:Number,required:true}
});

module.exports = mongoose.model('Customer',customerSchema);