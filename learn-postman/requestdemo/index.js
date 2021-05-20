var express = require('express');
var app = express();
var engine = require('ejs-locals');
app.engine('ejs', engine);
app.set("views", "./views");
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send("index now");
  console.log('index nowwwww');
}) 

