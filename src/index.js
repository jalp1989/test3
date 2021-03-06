//console.log('server listening!');
const express = require('express');
const app = express();
const path = require('path');


// settings
//app.set('port',3000);
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');


// middlewares

// routes
app.use(require('./routes/index'));


// static files
//app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// listenning the server
app.listen(app.get('port'), ()=>{
	console.log('server on port', app.get('port'));
})