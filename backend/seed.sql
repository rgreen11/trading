DROP DATABASE IF EXISTS trading;
CREATE DATABASE trading;

\c trading;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR UNIQUE NOT NULL,
    current_amount VARCHAR NOT NULL,
    stocks VARCHAR NULL,
    quantity VARCHAR NULL,
    current_price VARCHAR NULL
);


INSERT INTO
users
    (
    name,
    email,
    password,
    current_amount,
    stocks,
    quantity,
    current_price
    )

VALUES
    ('Rich', 'Rich@gmail.com', 'rich', '5000', 'na', '0', '20');