var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var router = express.Router();


var adminModel = require('../models/admin');

router.get('/', function(req, res, next) {
    res.render('index');
});


router.post('/login',function(req,res,next)
{
    passport.authenticate('local',function(err,admin,info){
        if(err)
        {
            return next(err);
        }

        if(!admin)
        {
             return res.json({
                status: "Failure"
            });
        }

        req.logIn(admin,function(err){
            if(err)
            {
                 return res.status(500).json({
                    err: 'Could not log in user'
                 });
            }

            return res.json({
                status: 'success'
            });
        });
    })(req,res,next)
});

router.get('/logout',function(req,res){
    req.logout();
    return res.status(200).json({
        result : "Log out"
    })
});




// router.post('/saveAdmin',function(req,res,next){
//     var admin = new adminModel();
//     admin.username = "dare";
//     let password = "bamidele"
//     admin.password = admin.generateHash(password);
//     admin.save(function(err,result){
//         if(err)
//         {
//             return res.json({
//                 error :'Error Occured'
//             })
//         }
//         return res.json({
//                 success :'Saved'
//             })
//     })
// })


module.exports = router;
