DROP DATABASE IF EXISTS trading;
CREATE DATABASE trading;

\c trading;

-- DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR UNIQUE NOT NULL,
    current_amount VARCHAR NOT NULL
);

CREATE TABLE stocks
(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR UNIQUE NOT NULL,
    quantity VARCHAR NOT NULL,
    current_price VARCHAR NOT NULL
);


INSERT INTO
users
    (
    name,
    email,
    password,
    current_amount
    )

VALUES
    ('Rich', 'Rich@gmail.com', 'rich', '5000');

INSERT INTO
stocks
    (
    user_id,
    name,
    quantity,
    current_price
    )

VALUES
    ('1', 'ABC', '10', '1');