-- create database and table schema here
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured boolean NOT NULL,
  PRIMARY KEY (id)
); 

ALTER TABLE burgers AUTO_INCREMENT=11;