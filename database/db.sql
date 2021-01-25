CREATE DATABASE sofware_configuration;
USE sofware_configuration;

CREATE TABLE users(
    id int NOT NULL,
    username VARCHAR(10) NOT NULL,
    password VARCHAR(8) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);

ALTER TABLE users 
    ADD PRIMARY KEY (id);
ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

CREATE TABLE projects(
    id INT(11) NOT NULL,
    projectname VARCHAR(50) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE projects
    ADD PRIMARY KEY (id);
ALTER TABLE projects
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE projects;
