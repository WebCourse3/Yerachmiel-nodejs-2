var expect    = require("chai").expect;
var db        = require("../public/db");
var logicFile = require("../public/logic");
var logic     = new logicFile();

describe("Get Heroes", function() {
	describe("Get All Heroes", function() {
		it("Get All Heroes", function() {
			var allHeroes = logic.getAllHeroes();

			expect(allHeroes).to.equal(db);
		});
	});

	describe("Get one Heroe", function() {
		it("Get one Heroe", function() {
			let id   = '2';
			let byId   = logic.getOneHeroes(id);

			expect(byId).to.deep.equal(db.find((heroe) => heroe.id === id));
		});
	});

	describe("Delete Heroe", function() {
		it("Delete Heroe", function() {
			let id   = '2';
			let name = 'heroes3';

			let byId   = logic.deletById(id);
			let byName = logic.deletByName(name)

			expect(byId.find((heroe) => heroe.id === id)).to.deep.equal(-1);
			expect(byName.find((heroe) => heroe.id === name)).to.deep.equal(-1);
		});
	});
});
