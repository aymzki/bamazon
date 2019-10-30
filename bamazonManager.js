// List a set of menu options:
// View Products for Sale: app should list every available item--the item IDs, names, prices, and quantities.
// View Low Inventory: all items with an inventory count lower than five
// Add to Inventory: your app should display a prompt that will let the manager "add more" of any item currently in the store.
// Add New Product: allow the manager to add a completely new product to the store.

//dependencies
var inquirer = require("inquirer");
var mysql = require("mysql");

//create connection to sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "yourRootPassword",
    database: "bamazon_db"
});

//create connection to mysql server
connection.connect(function(err) {
    if (err) throw err;//start app and asks user if they want to see products
    function start() {
        console.log("Welcome to Bamazon!");
        inquirer.prompt(
            {
                type: "list",
                name: "options",
                type: "confirm",
                message: "View Product for Sale"
            }
        ).then(function(answer) {
            if (answer.browse) {
                showItems();
            } else {
                exit();
            }
        });
    }
    console.log("connected as id " + connection.threadId);
    start();
});
