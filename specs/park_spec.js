const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  beforeEach(function () {
    park = new Park("jurassic park", 50)
    
  })

  it('should have a name',function(){
    const actual = park.name
    assert.strictEqual(actual, "jurassic park")
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price
    assert.strictEqual(actual, 50)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.numberOfDinosaur()
    assert.strictEqual(actual, 0)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('T_Rex');
    const actual = park.numberOfDinosaur()
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection',function(){
    park.addDinosaur("T_Rex");
    park.addDinosaur("scaylosaur");
    park.addDinosaur("hornsaur");
    park.removeDinosaur("T_Rex");
    const actual = park.numberOfDinosaur()
    assert.strictEqual(actual, 2)
  });

  xit('should be able to find the dinosaur that attracts the most visitors',function(){
    park.addDinosaur("T_Rex")
    park.addDinosaur("scaylosaur")
    const actual = park.park.findSpecialDinosauru("T_Rex")
    assert.strictEqual(actual,  "T_Rex")

  });

  it('should be able to find all dinosaurs of a particular species', function(){
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    const actual = park.findSpecies()
    assert.strictEqual(actual,  "carnivore")
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
