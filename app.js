/*
* Module dependencies
*/
var express = require('express')
  , path = require('path');


var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

require('./routes/routes')(app);

app.get('*', function(req, res){
res.redirect('/'); 
});

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Jay Bamimore' }
  )
})

app.listen(3000)
