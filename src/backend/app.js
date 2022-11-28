const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")
// const User = require("./models/user")

app.use(cors());
app.use(bodyParser.json());

const port = 4000;
app.listen(port, () =>
console.log("Server running at port 4000")
);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested--With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
});

mongoose
.connect('mongodb+srv://ReactProject:pasSWorD@cluster0.bmeghwy.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
console.log('Connected to database')
})
.catch(err => {
console.log(err);
});

// Import the routes
const usersRoute = require('./routes/users.js')
// const productsRoute = require('./routes/products.js')
// app.use('/products', productsRoute);
app.use('/users', usersRoute);

    