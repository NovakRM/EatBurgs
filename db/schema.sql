DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30),
  devoured BOOLEAN, --mysql bools use TRUE/FALSE 1/0
  PRIMARY KEY (id)
);