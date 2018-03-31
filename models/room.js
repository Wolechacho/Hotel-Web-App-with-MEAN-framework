var mongoose = require('mongoose');
var Schema = mongoose.Schema

var roomSchema = new Schema({
    name :{type:String,required:true},
    description : {type:String,required:true},
    price : {type:Number,required:true},
    imageUrl:{type:String,required:true}
});

module.exports = mongoose.model('Room',roomSchema);