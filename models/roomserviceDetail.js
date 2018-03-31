var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomserviceDetail = new Schema({
    customer : {type:Schema.Types.ObjectId,ref:'Customer'},
    loginDate : Date,
    room : {type:Schema.Types.ObjectId,ref:'Room'}
});

module.exports = mongoose.model('RoomserviceDetail',roomserviceDetail);