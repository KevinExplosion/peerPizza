//BDD

//constructor for PizzaOrder. Includes size and an empty array for toppings.
function PizzaOrder(firstName, lastName, size, toppings) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.size = size;
  this.toppings = [];
};

PizzaOrder.prototype.pizzaCost = function() {
  if (this.size = "small") {
    return "$5";
  }
};


//User Interface

// $(document).ready(function(){
//
//
//   //Submit form when order button is clicked
//   $(#submitOrder).click(function(event) {
//
//   });
// });
