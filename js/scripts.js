//BDD

//constructor for PizzaOrder. Includes size and an empty array for toppings.
function PizzaOrder(firstName, lastName, size, toppings) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.size = size;
  this.toppings = [];
};

PizzaOrder.prototype.pizzaCost = function() {
  if (this.size = "personalPan") {
    return 6;
  } else if (this.size = "small") {
    return 10
  } else if (this.size = "medium") {
    return 12
  } else if (this.size = "large") {
    return 14
  } else if (this.size = "xLarge") {
    return 18
  } else {
    return 30
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
