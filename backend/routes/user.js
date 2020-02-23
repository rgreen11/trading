const express = require("express");
const userRouter = express.Router();
const userService = require("../services/user");

userRouter.post("/newuser", (req, res) => {
    const {
        name,
        email,
        password,
    } = req.body;


    userService
        .postUser(
            name,
            email,
            password,
            5000,
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