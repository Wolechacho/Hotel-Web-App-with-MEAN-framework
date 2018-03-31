db.rooms.insert({
    name:"Etoile De Sahelie",
    description : "Your need our care",
    price : 200,
    imageUrl : 'imgs/HImages/hotel1.jpg'
})



db.rooms.insert({
    name:" Futon Holding",
    description : "Make your life good",
    price : 300,
    imageUrl : 'imgs/HImages/hotel2.jpg'
})


db.rooms.insert({
    name:"Cosmos Room",
    description : "Find good rest and comfort",
    price : 100,
    imageUrl : 'imgs/HImages/hotel3.jpg'
})


db.rooms.insert({
    name:"Sapphire Lounge",
    description : "Romance never gone",
    price : 650,
    imageUrl : 'imgs/HImages/hotel4.jpg'
})


db.rooms.insert({
    name:"Solomon's Porch",
    description : "Sleep in the bosom of giants",
    price : 150,
    imageUrl : 'imgs/HImages/hotel5.jpg'
})

db.rooms.insert({
    name:"Nafiya Gayes Comfort",
    description : "Your need our care",
    price : 80,
    imageUrl : 'imgs/HImages/hotel6.jpg'
})





























db.rooms.insert({
    name:"God's Paradise",
    description : "Feels you are in heaven",
    price : 200,
    imageUrl : 'imgs/HImages/hotel7.jpg'
})

db.rooms.insert({
    name:"Noah Ark",
    description : "Always feel at home",
    price : 100,
    imageUrl : 'imgs/HImages/hotel8.jpg'
})

db.rooms.insert({
    name:"David's Comfort Room",
    description : "Wow never stops",
    price : 250,
    imageUrl : 'imgs/HImages/hotel9.jpg'
})

db.rooms.insert({
    name:"Abraham's Liar of Glory",
    description : "Best Feeling you ever get",
    price : 220,
    imageUrl : 'imgs/HImages/hotel10.jpg'
})

db.rooms.insert({
    name:"Paradise close street",
    description : "Close to Paradise",
    price : 350,
    imageUrl : 'imgs/HImages/hotel11.jpg'
})

db.rooms.insert({
    name:"Perez Hilton Room",
    description : "You never feel bored",
    price : 400,
    imageUrl : 'imgs/HImages/hotel12.jpg'
})

db.rooms.insert({
    name:"Arab Massair",
    description : "Nice room for couple",
    price : 200,
    imageUrl : 'imgs/HImages/hotel13.jpg'
})

db.rooms.insert({
    name:"Chacho Mansion Game",
    description : "in for the glory",
    price : 1000,
    imageUrl : 'imgs/HImages/hotel14.jpg'
})



































db.rooms.insert({
    name:"Kremlin beauty",
    description : "In for the treat",
    price : 450,
    imageUrl : 'imgs/HImages/hotel15.jpg'
})

db.rooms.insert({
    name:"Golden Inn",
    description : "Wow.. Life feel Good",
    price : 200,
    imageUrl : 'imgs/HImages/hotel16.jpg'
})

db.rooms.insert({
    name:"Downing Street beauty",
    description : "Nice room for honeymoon",
    price : 260,
    imageUrl : 'imgs/HImages/hotel17.jpg'
})

db.rooms.insert({
    name:"Boston Golden Close",
    description : "Place make you feel Alive",
    price : 230,
    imageUrl : 'imgs/HImages/hotel18.jpg'
})

db.rooms.insert({
    name:"Savoy chase Inn",
    description : "Your need our care",
    price : 190,
    imageUrl : 'imgs/HImages/hotel19.jpg'
})

db.rooms.insert({
    name:"Cook Room",
    description : "Captain cook will be proud",
    price : 330,
    imageUrl : 'imgs/HImages/hotel20.jpg'
})

db.rooms.insert({
    name:"Boyz Fun",
    description : "For boys only",
    price : 240,
    imageUrl : 'imgs/HImages/hotel21.jpg'
})

db.rooms.insert({
    name:"Six star Room",
    description : "Sixth star is hidden..Yours to explore",
    price : 750,
    imageUrl : 'imgs/HImages/hotel22.jpg'
})






db.admins.insert({
    username :'Wole',
    password : 'chacho'
})
db.admins.insert({
    username :'femzy',
    password : 'fatoki'
})

db.admins.insert({
    username :'dare',
    password : 'bamidele'
})















app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (! user) {
      return res.send(401,{ success : false, message : 'authentication failed' });
    }
    req.login(user, function(err){
      if(err){
        return next(err);
      }
      return res.send({ success : true, message : 'authentication succeeded' });        
    });
  })(req, res, next);
});


 



 var roomservice = new roomServiceDetailModel({
  














    var newroom = new roomModel({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        imageUrl : req.body.imageUrl
    })

    newroom.save(function(error,result){
        if(error)
        {
            res.status(501).json({
                error : "error while saving"
            });
        }
        res.status(200).json({
                success : "Saved Sucessfully"
        });
    })