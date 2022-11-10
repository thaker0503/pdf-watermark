var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const { initializeApp } = require("firebase/app");
// const { getStorage } = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyAxza-BopzV1uPC2aZ9L354ILNcckNNnMU",
  authDomain: "pdf-watermark-a2d77.firebaseapp.com",
  // databaseURL: "https://pdf-watermark-a2d77-default-rtdb.firebaseio.com",
  projectId: "pdf-watermark-a2d77",
  storageBucket: "pdf-watermark-a2d77.appspot.com",
  messagingSenderId: "784866519985",
  appId: "1:784866519985:web:26c2417c11ba0b7361eb90"
};

const firebaseApp = initializeApp(firebaseConfig);
// const firebaseStorage = getStorage(firebaseApp);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var uploadRouter = require('./routes/upload');
var registerRouter = require('./routes/registration');
var loginRouter = require('./routes/login');
var waterMarkRouter = require('./routes/addwatermark');
var downloadFileRouter = require('./routes/download');
// var uploadPageRouter = require('./routes/uploadpage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/upload', uploadRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/addwatermark', waterMarkRouter);
app.use('/download', downloadFileRouter);
// app.use('/uploadpage', uploadPageRouter)




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = firebaseApp;
module.exports = app;