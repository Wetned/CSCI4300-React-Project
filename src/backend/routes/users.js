const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/user");
const { db } = require("../models/user");
const { application } = require("express");
const router = require('express').Router();

//Gets all users
router.route('/').get((req, res) => {
    // using .find() without a parameter will match on all user instances
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json('Error! ' + err))
})

//Registers new user
router.post("/register", async (req, res) => {
    const user = req.body;
    const takenUsername = await User.findOne({username: user.username.toLowerCase()})
    
    if(takenUsername){
        res.json({message: "Username already taken"})
    } else {
        user.password = await bcrypt.hash(req.body.password, 10)

        const dbUser = new User({
            username: user.username.toLowerCase(),
            password: user.password
        })

        dbUser.save()
        res.json({message: "Success"})
    }
})

router.post("/login", async (req, res) => {
    const userLoggingIn = req.body;
    User.findOne({username: userLoggingIn.username.toLowerCase()})
    .then(dbUser => {
        if (!dbUser) {
            return res.json({
                message: "Invalid Username" 
            })
        }
        bcrypt.compare(userLoggingIn.password, dbUser.password)
        .then(isCorrect => {
            if(isCorrect){
                const payload = {
                    id: dbUser._id,
                    username: dbUser.username,
                }
                return res.json({
                    message: "Login Successful"
                })
                // jwt.sign(
                //     payload,
                //     process.env.JWT_SECRET,
                //     {expiresIn: 86400},
                //     (err, token) => {
                //         if(err) return res.json({message: err})
                //         return res.json({
                //             message: "Success"
                //         })
                //     }
                // )
            } else {
                return res.json({
                    message: "Invalid Password"
                })
            }
        })
    })
})

function verifyJWT(req, res, next) {
    const token = req.headers["x-access-token"]?.split(' ')[1]

    if(token) {
        jwt.verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
            if(err) return res.json ({
                isLoggedIn: false,
                message: "Failed to Authenticate"
            })
            req.user = {};
            req.user.id = decoded.id
            req.user.username = decoded.username
            next()
        })
    } else {
        res.json({message: "Incorrect Token Given", isLoggedIn: false})
    }
}

application.get("/getUsername", verifyJWT, (req, res) => {
    res.json({isLoggedIn: true, username: req.user.username})
})

module.exports = router;