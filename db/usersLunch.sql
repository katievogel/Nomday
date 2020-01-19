DROP DATABASE IF EXISTS fave_lunch_db;
CREATE DATABASE fave_lunch_db;
USE fave_lunch_db;

CREATE TABLE users(
	userID INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username VARCHAR (100) NOT NULL,
    user_email VARCHAR (100) NOT NULL
    );

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

Select * FROM users;

