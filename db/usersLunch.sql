DROP DATABASE IF EXISTS lunch_users_db;
CREATE DATABASE lunch_users_db;
USE lunch_users_db;

CREATE TABLE users(
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username VARCHAR (100) NOT NULL,
    place_name VARCHAR (100) NOT NULL,
    place_rank INTEGER (1) NOT NULL,
    place_last_visit_date DATE NOT NULL,
    place_fave_item VARCHAR (100) NOT NULL,
    comments VARCHAR (250)
);

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

Select * FROM users;

