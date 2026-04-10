CREATE DATABASE sistema_login;
USE sistema_login;

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NULL,
    email VARCHAR(150) UNIQUE NULL,
    use_password VARCHAR(255) NOT NULL
);
