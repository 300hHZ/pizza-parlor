// ---------------Business Logic---------------

function Pizza(){
  this.toppings = [];
  this.size = "";
}

Pizza.prototype.addTopping = function(newTopping){
    this.toppings.push(newTopping); 
}

Pizza.prototype.removeTopping = function(topping){
  this.toppings.splice(this.toppings.indexOf(topping),1); 
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


$(document).ready(function(){
  let pizza = new Pizza();
  $("input[type='checkbox']").on("click",function(event){
    // console.log($(this).val());

    if($(this).is(":checked"))
      pizza.addTopping($(this).val());
    else
      pizza.removeTopping($(this).val());
    
    // console.log(pizza.getToppings());
    

  });

  $("input[type='radio']").on("click", function (event) {
    // console.log($(this).val());
    pizza.changeSize($(this).val());
    // console.log(pizza.getSize());
  });
});

//testing business logic
// let pizza = new Pizza();
// console.log(pizza);
// console.log(pizza.getToppings());
// console.log(pizza.getSize());
// pizza.addTopping("pepperoni");
// pizza.changeSize("L");
// console.log(pizza.getToppings());
// console.log(pizza.getSize());
// console.log(pizza.price());