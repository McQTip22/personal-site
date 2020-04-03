var express = require('express'),
	app = express();
bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.get('/pomodoro', function(req, res) {
	res.status(301).redirect('https://limitless-atoll-83895.herokuapp.com/');
});

app.get('/passgen', function(req, res) {
	res.status(301).redirect('https://fast-atoll-46610.herokuapp.com/');
});

app.listen(process.env.PORT || 3000, function() {
	console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});
