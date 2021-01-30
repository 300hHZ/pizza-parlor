# _Pizza Parlor_

#### _A simple website to order pizzas_

#### By _**Woo Jin Kim**_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _jQuery_
* _Bootstrap_

## Description

_Website that determines and displays the cost of a pizza based on a customer's selection of toppings and size. User has the ability to save their Pizza customization and order multiple pizzas. User also has the ability to delete any of their saved Pizza orders, if they so wish. The program will calculate and display the grand total of all pizzas. _

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Open index.html_

### Specifications
```
Describe: Pizza()
Test: Creates a new Pizza object with no toppings and default small size
Code: let pizza = new Pizza();
Expect(pizza.toEqual(Pizza{ [],"Small" }));

Describe: Pizza.prototype.getToppings()
Test: Returns the pizza toppings selected by the user.
Code: pizza.getToppings();
Expect(pizza.getToppings().toEqual([]));

Describe: Pizza.prototype.getSize()
Test: Returns the size of the pizza, selected by the user.
Code: pizza.getSize();
Expect(pizza.getSize().toEqual("Small"));

Describe: Pizza.prototype.addToppings(toppings)
Test: Adds selected pizza topping(s) to the pizza object
Code: pizza.addToppings("Pepperoni");
Expect(pizza.getToppings().toEqual(["Pepperoni"]));

Describe: Pizza.prototype.removeToppings(toppings)
Test: Removes selected pizza topping(s) from the pizza object
Code: pizza.removeToppings("Pepperoni");
Expect(pizza.getToppings().toEqual([]));

Describe: Pizza.prototype.changeSize(size)
Test: Changes the pizza size to the new selected size.
Code: pizza.changeSize("Large");
Expect(pizza.getSize().toEqual("Large"));

Describe: Pizza.prototype.price()
Test: Determines the price of the pizza
Code: pizza.price();
Expect(pizza.price().toEqual(9));

```
## Known Bugs/Room for Improvement

* Code is not best practice, especially in the way that the script communicates with the DOM. Large room for refactoring.
* Barely any CSS styling

## Stretch Goals

* Add different screens (Welcome, Checkout, Confirmation, etc.)
* Add ability to edit saved orders

## License

_MIT_

## Contact Information

_Woo Jin Kim (kimwoojin211@gmail.com)_


Copyright (c) 2021 Woo Jin Kim