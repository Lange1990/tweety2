
var express = require('express');
var app = express();
var morgan = require('morgan');


app.use(morgan())
// app.use(function(req,res,next){
//     console.log(req.method);
//     next();
//  })
app.get('/:hola', function (req, res) {
    console.log("GET/Hay alguien")
  res.send(req.params.hola);
});
app.post('/', function (req, res) {
    console.log("POST/Hay alguien")
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening  on port 3000!');
});
 