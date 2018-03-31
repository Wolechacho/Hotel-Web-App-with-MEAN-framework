var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
    username : {type:String,required:true},
    password: {type:String,required:true}
});

//hash the password on saving
adminSchema.methods.generateHash = function(password)
{
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null)
}

//unhash and validate the password comming true
adminSchema.methods.validatePassword = function(password)
{
    return bcrypt.compareSync(password,this.password);
}


module.exports = mongoose.model('Admin',adminSchema);