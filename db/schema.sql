-- create database and table schema here
USE ixd4o6qgqbz05osz;

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured boolean NOT NULL,
  PRIMARY KEY (id)
); 