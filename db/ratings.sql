DROP DATABASE IF EXISTS fave_lunch_db;
CREATE DATABASE fave_lunch_db;
USE fave_lunch_db;

CREATE TABLE ratings(
	ratingsID INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    userID INTEGER NOT NULL,
    restID INTEGER NOT NULL
    place_rank INTEGER (1) NOT NULL,
    visit_date DATE NOT NULL,
    fave_item VARCHAR (100) NOT NULL,
    comments VARCHAR (250)
);

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

Select * FROM users;