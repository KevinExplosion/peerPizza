//BDD

//constructor for PizzaOrder. Includes size and an empty array for toppings.
function PizzaOrder(firstName, lastName, size, toppings) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.size = size;
  this.toppings = [];
};

// PizzaOrder.prototype.pizzaToppingsCost = function() {
//   return this.toppings = this.toppings * 0.5;
// }

PizzaOrder.prototype.pizzaCost = function() {
  if (this.size === "personalPan") {
    return 6;
  } else if (this.size === "small") {
    return 10;
  } else if (this.size === "medium") {
    return 12;
  } else if (this.size === "large") {
    return 14;
  } else if (this.size === "xLarge") {
    return 18;
  } else {
    return 30;
  }
};

//User Interface

$(document).ready(function(){

  //Submit form when order button is clicked
  $("#submitOrder").click(function(event) {
    event.preventDefault();

    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var pizza_size = $("#pizzaSize").val();
    var pizza_toppings_array = [];

    $(".topping:checked").each(function() {
      pizza_toppings_array.push($(this).val());
    });

    var toppings;
    toppings = pizza_toppings_array.join(", ");

    var pizza_order = new PizzaOrder(firstName, lastName, pizza_size);

    $(".hidePizzaOrders").fadeIn();
    $("#pizzaOrders").append("<h4>Here is your order, " + firstName + " " + lastName + ":</h4><ul><li>Size: " + pizza_size +  "</li><li>Toppings: " + pizza_toppings_array + "</ul><h5>Your total is: $" + (pizza_order.pizzaCost() + (0.5 * pizza_toppings_array.length)) + "</h5>");
  });
});
