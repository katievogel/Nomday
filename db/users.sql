DROP DATABASE IF EXISTS lunch_users_db;
CREATE DATABASE lunch_users_db;
USE lunch_users_db;

CREATE TABLE users(
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username VARCHAR (100) NOT NULL,
);

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

Select * FROM users;

--test