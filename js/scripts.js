// ---------------Business Logic---------------

function Pizza(){
  this.toppings = [];
  this.size = "Small";
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
  return 4 + toppingPrice + sizePrice;
}

// ------------User Interface Logic------------
Pizza.prototype.toppingString = function(){
  if (this.toppings.length === 0) {
    return "Bland";
  }
  else {
    let str = this.toppings[0];
    for (let i = 1; i < this.toppings.length; i++) {
      if (i < this.toppings.length - 1)
        str += ", " + this.toppings[i];
      else
        str += " & " + this.toppings[i];
    }
  return str;
  }
}

$(document).ready(function(){
  let pizzaCart= [];
  let pizza = new Pizza();
  let numPizzas = 1;
  let totalCost = 0;

  $("input").on("click", function() {
    if($(this).attr("type")==="checkbox")
    {
      if($(this).is(":checked"))
        pizza.addTopping($(this).val());
      else
        pizza.removeTopping($(this).val());
    }
    else if ($(this).attr("type") === "radio")
    {
      pizza.changeSize($(this).val());
      $("#pizzaSize").text($(this).attr("id"));
    }

    // if (pizza.getToppings().length === 0)
    // {
    //   $("#pizzaType").text("Bland");
    // }

    // else{
    //   let pizzaType = pizza.getToppings()[0];
    //   for(let i = 1; i < pizza.getToppings().length; i++)
    //   {
    //     if(i < pizza.getToppings().length-1)
    //       pizzaType += ", " + pizza.getToppings()[i];
    //     else
    //       pizzaType += " & " + pizza.getToppings()[i];
    //   }
      $("#pizzaType").text(pizza.toppingString());
    // }
    $("#cost").text(pizza.price(pizza.getToppings(),pizza.getSize()));
  });

  $("#save").on("click", function(event) {
    event.preventDefault(); 
    pizzaCart.push(pizza);

    $("#cart").append("<li>1 " + pizza.getSize() + " " + pizza.toppingString() + 
    // "<button class=\"btn btn-dark edit\">Edit</button></button>
    " Pizza</li>");
    $("input[type=\"checkbox\"]:checked").prop('checked', false);
    pizza = new Pizza();
    $("#pizzaSize").text("Small");
    $("#pizzaType").text("Bland");
    $("#cost").text("5");
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