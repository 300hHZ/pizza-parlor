// ---------------Business Logic---------------

function Pizza() {
  this.toppings = [];
  this.size = "Small";
}

Pizza.prototype.addTopping = function (newTopping) {
  this.toppings.push(newTopping);
}

Pizza.prototype.removeTopping = function (topping) {
  this.toppings.splice(this.toppings.indexOf(topping), 1);
}

Pizza.prototype.changeSize = function (newSize) {
  this.size = newSize;
}

Pizza.prototype.getToppings = function () {
  return this.toppings;
}

Pizza.prototype.getSize = function () {
  return this.size;
}

Pizza.prototype.price = function () {
  let toppingPrice = this.toppings.length; // each additional topping is an extra dollar
  let sizePrice = 0;
  if (this.size === "Medium")
    sizePrice += 2;
  else if (this.size === "Large")
    sizePrice += 4;
  return 5 + toppingPrice + sizePrice;
}

Pizza.prototype.toppingString = function () {
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
// ------------User Interface Logic------------
$(document).ready(function () {
  // attachContactListeners();
  let pizzaCart = [];
  let pizza = new Pizza();
  let pizzaPos = 0;
  let totalCost = 0;

  $("input").on("click", function () {
    if ($(this).attr("type") === "checkbox") {
      if ($(this).is(":checked"))
        pizza.addTopping($(this).val());
      else
        pizza.removeTopping($(this).val());
    }
    else if ($(this).attr("type") === "radio") {
      pizza.changeSize($(this).val());
      $("#pizzaSize").text($(this).val());
    }

    $("#pizzaType").text(pizza.toppingString());
    $("#cost").text(pizza.price(pizza.getToppings(), pizza.getSize()));
  });

  $("#save").on("click", function (event) {
    event.preventDefault();
    pizzaCart.push(pizza);

    $("#cart").append("<li>1 " + pizza.getSize() + " " + pizza.toppingString() +
      " Pizza ($" + pizza.price() + ") <button class=\"btn btn-danger del\" id=\"" + pizzaPos++ + "\">Delete</button>");

    console.log($("#cart>li>button").attr("class"));
    $("input[type=\"checkbox\"]:checked").prop('checked', false);
    $("input#Small").prop("checked", true);
    $("#pizzaSize").text("Small");
    $("#pizzaType").text("Bland");
    $("#cost").text("5");
    totalCost += pizza.price();
    $("#total").text(totalCost);
    pizza = new Pizza();
  });

  $("ul#cart").on("click", ".del", function () {
    const deleteIndex = $(this).attr("id");
    totalCost -= pizzaCart[deleteIndex].price();
    $("#total").text(totalCost);
    pizzaCart.splice(deleteIndex, 1);
    pizzaPos = 0;
    $("#cart").empty();
    pizzaCart.forEach(function (remainingPizza) {
      $("#cart").append("<li>1 " + remainingPizza.getSize() + " " + remainingPizza.toppingString() +
        " Pizza ($" + remainingPizza.price() + ") <button class=\"btn btn-danger del\" id=\"" + pizzaPos++ + "\">Delete</button>");
    });
  });
});