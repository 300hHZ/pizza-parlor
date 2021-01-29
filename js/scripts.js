// ---------------Business Logic---------------

function Pizza(){
  this.cost = 0;
  this.toppings = [];
  this.size = "";
}

Pizza.prototype.addTopping = function(newTopping){
  if(!(this.toppings.includes(newTopping)))
    this.toppings.push(newTopping);
}

Pizza.prototype.removeTopping = function(topping){
  const index = this.toppings.indexOf(topping);
  if (index != -1)
    this.toppings.splice(index,1);
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
  let toppingPrice = 0;
  let sizePrice = 0;
  return 5 + toppingPrice + sizePrice;
}

// ------------User Interface Logic------------


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