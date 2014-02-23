/*
* Module dependencies
*/
var express = require('express')
  , path = require('path')
  , nib = require('nib');


var app = express();
/*
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib());
}*/

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
//app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/routes')(app);

app.get('*', function(req, res){
res.redirect('/'); // Implement a proper 404 page
});

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Jay Bamimore' }
  )
})

app.listen(3000)