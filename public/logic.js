var heroes = require("./db");

class heroeLogic {
	getAllHeroes(){
		return heroes;
	}
	getOneHeroes(id){
		return heroes.find((heroe) => heroe.id === id);
	}
	addHeroe(id, name){
		heroes.push({id:name});
		return heroes;
	}
	editHeroe(id, name){
		heroes.find((heroe) => heroe.id === id).name = name;
		return heroes;
	}
	deletById(id){
		heroes.splice(heroes.findIndex((heroe) => heroe.id === id), 1);
		return heroes;
	}
	deletByName(name){
		heroes.splice(heroes.findIndex((heroe) => heroe.name === name), 1);
		return heroes;
	}
}

module.exports = heroeLogic;