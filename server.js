var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
var bodyParser = require('body-parser')
app.use(bodyParser.json());                         // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));   // to support URL-encoded bodies
var heroes = require("./public/logic");

http.listen(3000, function(){
	console.log('listening on *:3000');
});

var logic = new heroes();

app.route('/heroes')
	.get(function (req, res) {
		res.send(logic.getAllHeroes());
	})
	.post(function (req, res) {
		res.send(logic.addHeroe(req.body.id, req.body.name));
	})
	.delete(function (req, res) {
		res.send(logic.deletHeroe(req.query.name));
	});

app.route('/heroes/:id')
	.get(function (req, res) {
		res.send(logic.getOneHeroes(req.params.id));
	})
	.put(function (req, res) {
		res.send(logic.editHeroe(req.params.id, req.query.name));
	})
	.delete(function (req, res) {
		res.send(logic.deletHeroe(req.params.id));
	});
