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
  this.punch = function(BlueNinja){
    if (BlueNinja instanceof Ninja) {
        BlueNinja.health -= 5;
        console.log(BlueNinja.name + " was punched by " + this.name + " and lost 5 Health!");
    }
  }
  this.kick = function(BlueNinja){
    if (BlueNinja instanceof Ninja){
        var damage = privateStrengthvar * 5;
        RedNinja.health = RedNinja.health - damage;
        console.log(BlueNinja.name + " was kicked by " + this.name + " and lost " +  damage + " Health!");
    }
  }
}



// var ninja1 = new Ninja("Nicki");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

var BlueNinja = new Ninja("Nicki");
var RedNinja = new Ninja("Atssini");
BlueNinja.punch(RedNinja);
RedNinja.showStats();

RedNinja.kick(BlueNinja);
BlueNinja.showStats();
