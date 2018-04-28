var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();
var config = require('./config');

app.get('/index1.jpg', new MjpegProxy('http://192.168.115.1/cgi-bin/videostream.cgi?user='+config.sumpple_ipcam.user+'&pwd='+config.sumpple_ipcam.pwd).proxyRequest);
app.listen(8080, () => console.log('Listening on port 8080'));