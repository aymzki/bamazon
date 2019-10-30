DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT primary key NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("polka dot socks", "fashion", 5.00, 99);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("fancy chocolate truffles", "food", 25.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("sherpa hoodie", "fashion", 40.00, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("nail clipper", "beauty", 3.00, 14);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("mom jeans", "fashion", 70.00, 124);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("brazilian ground coffee", "food", 6.00, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("pencils", "stationery", 2.00, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("charm bracelet", "jewelry", 60.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("scrunchies", "beauty", 5.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("tumbler", "kitchen", 25.00, 100);
