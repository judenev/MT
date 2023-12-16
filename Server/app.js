const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');

const app = express();
const db =require('./Utils/connections')
// const cors = require('cors');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

db()
app.use(function(req, res, next) {
	  res.setHeader('Access-Control-Allow-Origin', '*');
	  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	  res.setHeader('Access-Control-Allow-Credentials', true);
	  next();
  });
const cors = require('cors');
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization'],
}
app.use(cors(corsOptions));


app.options('*', (req, res) => {
  // Set the appropriate headers for CORS preflight requests
  res.header('Access-Control-Allow-Origin', '*'); // Replace * with your allowed origins
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.sendStatus(200); // Respond with 200 OK status
});

app.use('/', indexRouter);

app.post("/userLogin", (req,res)=>{res.send('1')})
// view engine setup
/* app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
 */


/* app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 */
//db()
// setting cors
/* app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}); */


// catch 404 and forward to error handler
/* app.use(function(req, res, next) {
  next(createError(404));
}); */

// error handler
/* app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
 */


module.exports = app;
