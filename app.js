var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');

// requiring passport for local authentication
var passport = require('passport');
var expressSession = require('express-session');
var flash = require('connect-flash');

//requiring passport configuration
require('./Auth/login')(passport);


//requiring routes for server routing
var mainRoute = require('./routes/app');
var cusRoute = require('./routes/customerRoute');
var roomRoute = require('./routes/roomroute');
var serviceRoute = require('./routes/roomServiceRoute');

var app = express();

var db = 'mongodb://wolecharles:123456@ds036577.mlab.com:36577/hoteldb'
mongoose.connect(db);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





//using the passport authentication module
app.use(expressSession({
    secret: 'mySecretKey',
    saveUninitialized: true,
    resave: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//using the route file
app.use('/', mainRoute);
app.use('/customer', cusRoute);
app.use('/room', roomRoute);
app.use('/roomServiceDetails', serviceRoute);



app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
    next();
});



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
