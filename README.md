# bamazon
A node command line storefront app using MySQL and npm packages.

## Deployment

* Clone repo.
* Run npm install.
* Run npm install inquirer.
* At command prompt run node bamazonCustomer.js


## How To Use

Bamazon asks if you would like to see the available products. If the user inputs yes, it displays the available products, prices, and their quantities, and users can enter a product and the quantity they want to buy, then purchase their products. 

## How It Works

MySQL database is used to store the data as a table for the products, their department categories, price, and how many are in stock. Connections are made between the app and the MySQL database and server. Javascript and node.js is used to ask to validate input from the user-- the ID number of the product they want and how many they would like to buy. Once those inputs are entered, the application checks whether or not the amount entered is greater or less than the amount of product in the database. If less or equal, the purchase is made and the total price is calculated displayed using Javascript. If it is greater, the purchase cannot be made. Furthermore, updates are made in the backend based on number of items purchased.

## Built With

* MySQL
* Javascript
* Node.js
* NPM

## Credits

I referenced the following resources for this project:

* Penn LPS Coding Bootcamp Course Material

## License

&copy; Alissa Yamazaki
