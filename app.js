const express = require("express");
const app = express();
const {connect} = require('./database/connection.js');

app.use(express.json());

// Connection à la base de données.
const database = async () => {
    await connect();
}

database();

const authRoute = require("./routes/auth.route");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', "GET, POST");
    next();
});


app.use('/auth', authRoute);

module.exports = app;