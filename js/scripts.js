// ---------------Business Logic---------------

function Pizza(){
  this.cost = 0;
  this.toppings = [];
  this.size = "";
}

Pizza.prototype.addTopping = function(newTopping){
  // if(!(this.toppings.includes(newTopping)))
    this.toppings.push(newTopping); //with checkboxes, don't need to worry if topping is already in array.
}

Pizza.prototype.removeTopping = function(topping){
  // const index = this.toppings.indexOf(topping);
  // if (index != -1)
    this.toppings.splice(this.toppings.indexOf(topping),1); // with checkboxes, don't need to worry about if topping isn't in array.
}

Pizza.prototype.changeSize = function(newSize){
  this.size = newSize;
}

Pizza.prototype.getToppings = function(){
  return this.toppings;
}

Pizza.prototype.getSize = function(){
  return this.size;
}

Pizza.prototype.price = function(toppings, size){
  let toppingPrice = toppings.length; // each additional topping is an extra dollar
  let sizePrice = size.length; // "S" for small = +$1, "Med" for medium = +$3, "Large" for large = +$5
  return 5 + toppingPrice + sizePrice;
}

// ------------User Interface Logic------------


$(document).ready(function()){
  let pizza = new Pizza();

}

//testing business logic
let pizza = new Pizza();
console.log(pizza);
console.log(pizza.getToppings());
console.log(pizza.getSize());
pizza.addTopping("pepperoni");
pizza.changeSize("L");
console.log(pizza.getToppings());
console.log(pizza.getSize());
console.log(pizza.price());