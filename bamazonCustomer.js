//set requirements
var inquirer = require("inquirer");
var mysql = require("mysql");

//create connection to sql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "yourRootPassword",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(res);
});
    connection.end();
});

//Ask ID of the product they would like to buy.
//Ask how many units of the product they would like to buy.
// inquirer.prompt([
//     {type: "list",
//     name: "productid",
//     message: "What is the ID of the product you would like to buy?",
//     choices: [1-10]
// }
// ]).then