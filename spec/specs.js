describe("PizzaOrder", function() {
  it("will provide a value for the pizza order", function() {
    var newPizzaOrder = new PizzaOrder("John", "Public", "large");
    expect(newPizzaOrder.firstName).to.equal("John");
    expect(newPizzaOrder.lastName).to.equal("Public");
    expect(newPizzaOrder.size).to.equal("large");
    expect(newPizzaOrder.toppings).to.eql([]);
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
    var newPizzaOrder = new PizzaOrder("John", "Public", "medium");
    expect(newPizzaOrder.size).to.equal("medium")
    expect(newPizzaOrder.pizzaCost()).to.equal(12);
  });
});

describe("deliveryCheck", function() {
  it("will pass false if a method of delivery has not been checked", function() {
    expect(deliveryCheck(undefined)).to.equal(false);
  });
});
