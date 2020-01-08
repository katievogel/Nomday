DROP DATABASE IF EXISTS fave_lunch_db;
CREATE DATABASE fave_lunch_db;
USE fave_lunch_db;

CREATE TABLE fave_lunches(
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username VARCHAR (100) NOT NULL,
    place_name VARCHAR (100) NOT NULL,
    place_website VARCHAR (200),
    place_rank INTEGER (1) NOT NULL,
    place_last_visit_date DATE (20) NOT NULL,
    place_fave_item VARCHAR (100) NOT NULL,
    comments VARCHAR (200)
);

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

Select * FROM fave_lunches;