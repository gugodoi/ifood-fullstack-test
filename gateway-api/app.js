var express = require('express');
var cors = require('cors');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use('/api', routes);
app.set('view engine', 'jade');

let root = path.join(__dirname, '..', 'public_html/');
app.use(express.static(root));
app.use((req, res, next) => {
  if (
    req.method === 'GET' &&
    req.accepts('html') &&
    !req.is('json') &&
    !req.path.includes('.')
  ) {
    res.sendFile('index.html', { root });
  } else next();
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

app.listen(3001, 'localhost', function() {
  console.log('RUNNING ON http://locahost:3001');
});

module.exports = app;
