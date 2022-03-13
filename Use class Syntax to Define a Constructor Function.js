var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)
// Top code same to below code but class constructor
class SpaceShuttle1{
  constructor(targetPlanet1){
  this.targetPlanet1 = targetPlanet1;
    
  }
}
var zeus = new SpaceShuttle1('Jupiter1');

console.log(zeus.targetPlanet1)

// function to class constructor

function makeClass() {
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  // inge return pannirukkaanga because function 
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); 
