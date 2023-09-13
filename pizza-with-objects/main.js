//Task 1
// Write code which models a pizza as a class. Pizza has at least following properties: name, toppings, base price for a small pizza. Pizza has also a functions, which calculates it’s price.
class Pizza {
    constructor(name, toppings) {
        this.name = name;
        this.toppings = toppings;
        this.basePrice = 8.50;
    }

    getPrice() {
        return this.basePrice + (this.toppings.length * 0.50);
    }
}

//Task 2
// Write code which models an order to a pizza place as a class. The order has a customer name, delivery type, and there can be several pizzas in one order. Order can be updated by adding pizzas to it with a method of the order class.
class Order {
    constructor(customerName, deliveryType) {
        this.customerName = customerName;
        this.deliveryType = deliveryType;
        this.orderedPizzas = [];
    }

    orderPizza(name, toppings) {
        this.orderedPizzas.push(new Pizza(name, toppings));
    }

    getOrderTotal() {
        let sum = 0;
        for (const pizza of this.orderedPizzas) {
            sum += pizza.getPrice()
        }
        return sum;
    }
}

// Tests for the code
// const margerita = new Pizza("Margerita", ["mozzarella", "basil", "tomato"]);
// const JerryOrder = new Order("Jerry", "Pick up");
// JerryOrder.orderPizza("Margerita", ["mozzarella", "basil", "tomato"]);
// JerryOrder.orderPizza("Diavola", ["pepperoni", "tomato", "cheese"]);
// JerryOrder.orderPizza("Marinara", ["tomato", "garlic", "olive oil", "oregano"]);


// console.log(JerryOrder.getOrderTotal())