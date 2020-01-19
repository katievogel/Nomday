DROP DATABASE IF EXISTS fave_lunch_db;
CREATE DATABASE fave_lunch_db;
USE fave_lunch_db;

CREATE TABLE restaurants(
	restID INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    place_name VARCHAR (100) NOT NULL,
    place_website VARCHAR (200),
    place_last_visit_date DATE NOT NULL,
    place_rank INTEGER (1) DEFAULT "0"
);

CREATE TABLE users(
	userID INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username VARCHAR (100) NOT NULL,
    user_email VARCHAR (100) NOT NULL,
    UNIQUE (username)
    );

CREATE TABLE ratings(
	ratingsID INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    userID INTEGER NOT NULL,
    restID INTEGER NOT NULL,
    place_rank INTEGER (1) NOT NULL,
    visit_date DATE NOT NULL,
    fave_item VARCHAR (100),
    comments VARCHAR (250)
);

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

Select * FROM restaurants;