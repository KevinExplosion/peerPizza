describe("PizzaOrder", function() {
  it("will provide a value for the pizza order", function() {
    var newPizzaOrder = new PizzaOrder("John", "Public", "large", ["pepperoni", "ham"]);
    expect(newPizzaOrder.firstName).to.equal("John");
    expect(newPizzaOrder.lastName).to.equal("Public");
    expect(newPizzaOrder.size).to.equal("large");
    expect(newPizzaOrder.toppings).to.eql(["pepperoni", "ham"]);
  });
});

// describe("pizzaToppingsCost", function() {
//   it("will return the cost based on number of toppings", function() {
//     var newPizzaOrder = new PizzaOrder("John", "Public", "personalPan", ["pepperoni", "mushrooms"])
//     expect(newPizzaOrder.pizzaToppingsCost()).to.equal(1);
//   });
// });

describe("pizzaCost", function() {
  it("will provide a cost based on the size of the pizza", function() {
    var newPizzaOrder = new PizzaOrder("John", "Public", "medium", ["pepperoni", "ham"]);
    expect(newPizzaOrder.size).to.equal("medium")
        expect(newPizzaOrder.toppings.length).to.equal(2);
    expect(newPizzaOrder.pizzaCost()).to.equal(13);
  });
});
