var chef = {
    prepareDish(dishName) {
        console.log(`Chef is preparing ${dishName}`);
    },
};

var waiter = {
    takeOrder(tableNumber, dishName) {
        console.log(
            `Waiter is taking an order for ${dishName} at table ${tableNumber}`
        );
    },
    serveDish(tableNumber, dishName) {
        console.log(`Waiter is serving ${dishName} to table ${tableNumber}\n`);
    },
};

function placeOrder(dishName, tableNumber, chef) {
    waiter.takeOrder.call(waiter, tableNumber, dishName);
    chef.prepareDish.call(chef, dishName);
    waiter.serveDish.call(waiter, tableNumber, dishName);
}

// Create the partially applied function orderSteak using bind

// Test the functionality
placeOrder('Pasta', 1, chef);
placeOrder('Fish', 2, chef);

var orderSteak = placeOrder.bind(null, 'Steak');

orderSteak(3, chef); // Use the partially applied orderSteak function
