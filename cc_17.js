// Initial Commit

//Task 1
class Customer {
    constructor(name, email) { // Constructor to initialize customer details
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }

    addPurchase(amount) { // Method to add purchase amount to history
        this.purchaseHistory.push(amount);
    }

    getTotalSpent() { // Method to calculate total spent by the customer
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}
//Task 2
class SalesRep { // Class representing a sales representative
    constructor(name) { // Constructor to initialize sales representative details
        this.name = name;
        this.clients = [];
    }

    addClient(customer) { // Method to add a client to the sales representative's list
        this.clients.push(customer); // Add the customer to the clients array
    }

    getClientTotal(name) { // Method to get the total spent by a specific client
        const client = this.clients.find(customer => customer.name === name); // Find the client by name
        return client ? client.getTotalSpent() : 0; // Return 0 if client not found
    }
}

//Task 3
class VIPCustomer extends Customer { // Class representing a VIP customer
    constructor(name, email, vipLevel) { // Constructor to initialize VIP customer details
        super(name, email); // Call the parent class constructor
        this.vipLevel = vipLevel; // Set the VIP level
    }

    getTotalSpent() { // Override method to calculate total spent with loyalty bonus
        const totalSpent = super.getTotalSpent(); // Get the total spent from the parent class
        return totalSpent + totalSpent * 0.1; // Add 10% loyalty bonus
    }
}

// Task 4
const customer1 = new Customer("Alice", "alice@example.com"); // Create a new customer
const customer2 = new Customer("Bob", "bob@example.com");
const vipCustomer = new VIPCustomer("Charlie", "charlie@example.com", "Gold");

customer1.addPurchase(200); // Add purchases to customers
customer1.addPurchase(150);
customer2.addPurchase(600);
vipCustomer.addPurchase(400);
vipCustomer.addPurchase(300);

const salesRep = new SalesRep("Diana"); // Create a new sales representative
salesRep.addClient(customer1);
salesRep.addClient(customer2);
salesRep.addClient(vipCustomer);

const totalRevenue = salesRep.clients.reduce((total, client) => total + client.getTotalSpent(), 0); // Calculate total revenue
console.log("Total Revenue:", totalRevenue);

const highSpenders = salesRep.clients.filter(client => client.getTotalSpent() > 500); // Filter high spenders
console.log("High Spenders:", highSpenders.map(client => client.name));

const customerSummary = salesRep.clients.map(client => ({ // Create a summary of customers
    name: client.name, // Get customer name
    totalSpent: client.getTotalSpent() // Get total spent
}));
console.log("Customer Summary:", customerSummary);
