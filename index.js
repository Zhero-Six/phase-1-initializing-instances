// index.js

// 1. Breakfast class with food and drink
class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

// 2. Lunch class with salad, soup, and drink
class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

// 3. Dinner class with salad, soup, entree, and private dessert
class Dinner {
    #dessert; // Declare private field first
    
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert; // Assign to private field
    }
}

// Export classes for testing
if (typeof module !== 'undefined') {
    module.exports = { Breakfast, Lunch, Dinner };
}