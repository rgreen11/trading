const { db } = require("./dbConnect");
const userService = {};

userService.postUser = (
    name,
    email,
    password,
    current_amount,
    stocks,
    quantity,
    current_price
) => {
    const sql = `
             INSERT INTO users(name, email, password, current_amount, stocks, quantity, current_price)
             VALUES ($[name], $[email], $[password], $[current_amount], $[stocks], $[quantity], $[current_price])
             RETURNING id;
          `;
    return db.one(sql, {
        name,
        email,
        password,
        current_amount,
        stocks,
        quantity,
        current_price
    });
};

module.exports = userService;