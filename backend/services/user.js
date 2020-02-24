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

userService.verify = (email) => {
    const sql = `SELECT email
    FROM users
    WHERE email=$[email]`

    return db.one(sql, {
        email,
    });
}


userService.userLogin = (email, password) => {
    const sql = `
         SELECT id 
         FROM users
         WHERE email=$[email]
         AND password=$[password]
      `;

    return db.one(sql, {
        email, password
    });
};


userService.updateAmount = (id, current_amount) => {
    const sql = `
         UPDATE users 
         SET current_amount=$[current_amount]
         WHERE id=$[id]
         RETURNING current_amount;
      `;

    return db.one(sql, { id, current_amount });
};

userService.postStock = (
    user_id,
    name,
    quantity,
    current_price
) => {
    const sql = `
             INSERT INTO stocks(user_id, name, quantity, current_price)
             VALUES ($[user_id], $[name], $[quantity], $[current_price])
             RETURNING id;
          `;
    return db.one(sql, {
        user_id,
        name,
        quantity,
        current_price
    });
};

userService.stocks = user_id => {
    const sql = `
             SELECT *
             FROM stocks
             WHERE user_id=$[user_id]
          `;
    return db.any(sql, {
        user_id
    });
};




module.exports = userService;