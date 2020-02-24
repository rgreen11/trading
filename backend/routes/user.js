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

userRouter.get('/verify', (req, res) => {
    const { email } = req.body;

    userService.verify(email)
        .then(data => {

            res.status(200).json({
                data
            });

        }).catch(e => {
            res.status(400).json({
                e
            })
        })
})


userRouter.get("/login", (req, res) => {
    const {
        email, password
    } = req.query;
    console.log(req.query)
    userService
        .userLogin(
            email, password
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

userRouter.put("/update", (req, res) => {
    const { id, current_price } = req.body;

    userService.updateAmount(id, current_price)
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


userRouter.post("/stock", (req, res) => {
    const {
        user_id,
        name,
        quantity,
        current_price
    } = req.body;


    userService
        .postStock(
            user_id,
            name,
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

userRouter.get("/stocks", (req, res) => {
    const { user_id } = req.body;

    userService
        .stocks(user_id)
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