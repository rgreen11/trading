const { db } = require("./dbConnect");
const userService = {};

userService.postUser = (
    name,
    email,
    password,
    current_amount,
) => {
    const sql = `
             INSERT INTO users(name, email, password, current_amount)
             VALUES ($[name], $[email], $[password], $[current_amount])
             RETURNING id;
          `;
    return db.one(sql, {
        name,
        email,
        password,
        current_amount,
    });
};

module.exports = userService;