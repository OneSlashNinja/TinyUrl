CREATE DATABASE tiny_url;

USE tiny_url;

CREATE TABLE tinyurl (
	id INT PRIMARY KEY AUTO_INCREMENT,
	url VARCHAR(200) NOT NULL
);