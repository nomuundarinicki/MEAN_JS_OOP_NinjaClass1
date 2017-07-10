function Ninja(name, health=100){
  var privateSpeedvar = 3;
  var privateStrengthvar = 3;
  this.name = name;
  this.health = health;
  this.sayName = function(){
    console.log(`My name is ${this.name}`);
  }
  this.showStats = function(){
    console.log(`Name: ${this.name}` + `, Health: ${this.health}` + ', Speed:' + privateSpeedvar +  ', Strength:' + privateStrengthvar);
  }
  this.drinkSake = function(){
    this.health += 10;
      console.log(`Drinking Sake Health: ${this.health}`);
  }

}

var ninja1 = new Ninja("Nicki");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
