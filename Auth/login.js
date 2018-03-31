var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var Admin = require('../models/admin');


module.exports = function(passport)
{
    passport.use(new LocalStrategy(
        {passReqToCallback : true},
        function(req,username,password,done){
    Admin.findOne({username:username},function(error,admin){

        //if there is an error
        if(error)
        {
            return done(error);
        }

        //if there is no admin
        if(!admin)
        {
            return done(null,false);
        }

        //if admin is found but invalid password
        if(!admin.validatePassword(password) ){
            return done(null,false);
        }

        else
        {
             return done(null,admin);          
        }
       

    })
}));

        passport.serializeUser(function(admin, done) {
            done(null, admin._id);
        });
 
        passport.deserializeUser(function(id, done) {
            Admin.findById(id, function(err, admin) {
                done(err, admin);
            });
        });
}
