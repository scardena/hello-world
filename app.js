var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req,res) {

  const dataBuffer = fs.readFileSync('/var/app/hostname/hostname.txt');
  hostname = (dataBuffer.toString());

  res.send('Hello World!<br> Hostname: ' + hostname );

});

app.get('/heartbeat', function (req,res) {
  res.send('you are in heartbeat!');

});



app.listen(3000, function() {
  console.log('app.js listenting on port 3000');

})
