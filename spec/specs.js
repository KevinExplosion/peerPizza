describe("PizzaOrder", function() {
  it("will provide a value for the pizza order", function() {
    var newPizzaOrder = new PizzaOrder("John", "Public", "Large");
    expect(newPizzaOrder.firstName).to.equal("John");
    expect(newPizzaOrder.lastName).to.equal("Public");
    expect(newPizzaOrder.size).to.equal("Large");
    expect(newPizzaOrder.toppings).to.eql([]);
  });
});

describe("pizzaCost", function() {
  it("will provide a cost of $5 for a personal pan pizza", function() {
    var newPizzaOrder = new PizzaOrder("John", "Public", "personal");
    expect(newPizzaOrder.pizzaCost()).to.equal("$5");
  });
});
