var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var roomModel = require('../models/room');


router.get('/list',function(req,res,next)
{
    roomModel.find().exec(function(error,rooms)
    {
        if(error)
        {
           return res.status(500).json({error:"Error Retreiving data"});
        }
        else
        {
            return res.status(200).json({rooms :rooms});
        }
    })
});

router.get('/edit/:id',function(req,res,next){
    let id = req.param('id');
    console.log(id);
    roomModel.findById(id,function(error,room){
        if(error)
        {
            return res.status(404).json({
                err : "Room not found"
            })
        }
         return res.status(200).json({
                room : room
        })

    })
})

router.post('/save',function(req,res,next){
    var newRoom = new roomModel({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        imageUrl : req.body.imageUrl
    })

    newRoom.save(function(error,result){
        if(error)
        {
             return res.status(500).json({
                err : "Not Saved"
            })
        }
            return res.status(200).json({
                success : "Saved Sucessfully"
            })
    })
});

 router.put('/update',function(req,res,next){
     let id =  req.body.id;
     roomModel.findByIdAndUpdate(id,
     {
         username:req.body.username,
         imageUrl : req.body.imageUrl,
         price:req.body.price,
        description : req.body.description
    },function(error,room){
        if(error)
        {
            res.status(404).json({
                err:"Could not update"
            })
        }

        res.status(200).json({
            updatedRoom : room
        })
    })
 })

 router.delete('/delete/:id',function(req,res,next){
      let id = req.params.id;
     roomModel.findByIdAndRemove(id,function(error,room){
        if(error)
        {
           return res.status(404).json({
                err : "Room not deleted"
            })
        }
         return res.status(200).json({
                room : room
        })
     })
 })

module.exports = router;