describe("PizzaOrder", function() {
  it("will provide a value for the size of the pizza and toppings", function() {
    var newPizzaOrder = new PizzaOrder("Large");
    expect(newPizzaOrder.size).to.equal("Large");
    expect(newPizzaOrder.toppings).to.eql([]);
  });
});
