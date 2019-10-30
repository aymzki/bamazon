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
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
});

//start app and asks user if they want to see products
function start() {
	console.log("Welcome to Bamazon!");
	inquirer.prompt(
		{
			name: "browse",
			type: "confirm",
			message: "Would you like to see the available products?"
		}
	).then(function(answer) {
		if (answer.browse) {
			showItems();
		} else {
			exit();
		}
	});
}

//function that makes sql query to display products
function showItems() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
        // var products = [];
		// for (var i = 0; i < res.length; i++) {
		// 	products.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
		// }
		// var headings = ["Item ID", "Product", "Department", "Price ($)", "Quantity in Stock"];
        // console.table(headings, products);
        //Ask ID of the product they would like to buy.
        //Ask how many units of the product they would like to buy.
        inquirer.prompt([
            {
                name: "productid",
                type: "input",
                message: "Please enter the ID number of the item you would like to buy.",
                validate: function(value) {
                    if (value <= 0 || isNaN(value)) {
                        console.log("Please enter a valid item ID.");
                    } else {
                        return true;
                    }
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "Please enter the quantity of the item you would like to buy",
                validate: function(value) {
                    if (isNaN(value)) {
                        console.log("Please enter a valid number.");
                    } else {
                        return true;
                    }
                }
            }
        ]).then(function(answers){
            console.log(answers);
            connection.query("SELECT * FROM products WHERE item_id =" + answers.productid,
            function(err, results) {
                if (err) throw err;
                console.log(results);
                if (results[0].stock_quantity >= answers.quantity){
                //update mysql database
                var updatedStock = results[0].stock_quantity - answers.quantity  
                console.log(updatedStock);
                connection.query("UPDATE products SET ? WHERE ?", [
                    {stock_quantity: updatedStock},
                    {item_id: answers.productid}
                ],
                function(error) {
                    if (error) throw err;
                    console.log("Order confirmed.");
                    console.log("Your total is" + results[0].price * answers.quantity);
                })
                console.log("We have enough in stock.");}
                else {
                    console.log("We don't have enough in stock, please try Amazon.");
                }


            })
              
        })
    });
}



