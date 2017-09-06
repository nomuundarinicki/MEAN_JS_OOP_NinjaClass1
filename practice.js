
  function Person(name, age){
  var privateVariable = "This variable is private";
  var privateMethod = function(){
      console.log(this);
  }
  this.name = name;
  this.age = age;
  this.greet = function(){
      console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
      // we can access our attributes within the constructor!
      console.log("Also my privateVariable says: " + privateVariable)
      // we can access our methods within the constructor!
      privateMethod();
  }
}
var bob = new Person("Bob", 3);
bob.greet();