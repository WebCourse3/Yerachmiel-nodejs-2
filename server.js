var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
var bodyParser = require('body-parser')
app.use(bodyParser.json());                         // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));   // to support URL-encoded bodies

var heroes = [
	{"id": "1", "name":"heroes1"},
	{"id": "2", "name":"heroes2"},
	{"id": "3", "name":"heroes3"}
];

http.listen(3000, function(){
	console.log('listening on *:3000');
});

app.route('/heroes')
	.get(function (req, res) {
		res.send(heroes);
	})
	.post(function (req, res) {
		heroes.push(req.body);
		res.send(heroes);
	});

app.route('/heroes/:id')
	.get(function (req, res) {
		/*	heroes.find((hero) => hero.id == req.params.id);*/
		var retHeroes = heroes.find(function(hero){
			return hero.id === req.params.id;
		});
		res.send(retHeroes);
	})
	.put(function (req, res) {
		heroes.find((hero) => hero.id === req.params.id).name = req.query.name;
		res.send(heroes);
	})
	.delete(function (req, res) {
		heroes.splice(heroes.findIndex((hero) => hero.id === req.params.id), 1);
		res.send(heroes);
	});
