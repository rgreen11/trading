const express = require("express");
const userRouter = express.Router();
const userService = require("../services/user");

userRouter.post("/newuser", (req, res) => {
    const {
        name,
        email,
        password,
        current_amount,
        stocks,
        quantity,
        current_price
    } = req.body;


    userService
        .postUser(
            name,
            email,
            password,
            current_amount,
            stocks,
            quantity,
            current_price
        )
        .then(data => {
            res.status(200).json({
                data
            });
        })
        .catch(err =>
            res.status(400).json({
                err
            })
        );
});

module.exports = userRouter 