//BDD

//constructor for PizzaOrder. Includes size and an empty array for toppings.
function PizzaOrder(firstName, lastName, size, toppings) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.size = size;
  this.toppings = toppings;
};

// PizzaOrder.prototype.pizzaToppingsCost = function() {
//   return this.toppings = this.toppings * 0.5;
// }

PizzaOrder.prototype.pizzaCost = function() {
  if (this.size === "personalPan") {
    return 6 + this.toppings.length * .5;
  } else if (this.size === "small") {
    return 10 + this.toppings.length * .5;
  } else if (this.size === "medium") {
    return 12 + this.toppings.length * .5;
  } else if (this.size === "large") {
    return 14 + this.toppings.length * .5;
  } else if (this.size === "xLarge") {
    return 18 + this.toppings.length * .5;
  } else {
    return 30 + this.toppings.length * .5;
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

    var pizza_order = new PizzaOrder(firstName, lastName, pizza_size, pizza_toppings_array);

    var toppings;
    toppings = pizza_toppings_array.join(", ");

    if(firstName === "" && lastName === "") {
      //throw an alert if the user doesn't enter a first and last name
      alert("Don't forget to add a name for your order!");
    } else if (lastName === "") {
      //throw an alert if the user doesn't enter a last name
      alert("Please fill in the 'Last Name' field.")
    } else if (firstName === "") {
      //throw an alert if the user doesn't enter a first name
      alert("Please fill in the 'First Name' field.")
    } else {

    $(".hidePizzaOrders").fadeIn();
    $("#pizzaOrders").append("<h4>Here is your order, " + firstName + " " + lastName + ":</h4><ul><li>Size: " + pizza_size +  "</li><li>Toppings: " + pizza_toppings_array + "</ul><h4>Your total is: $" + (pizza_order.pizzaCost()) + "</h4>");
  }
  });
});
