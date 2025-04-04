const express = require("express");
const app = express();
const { connect } = require('./database/connection.js');

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

app.use(express.json());

// Connection à la base de données.
const database = async () => {
    await connect();
}

database();

const authRoute = require("./routes/auth.route");
const postRoute = require('./routes/post.route');
const commentRoute = require("./routes/comment.route");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', "GET, POST");
    next();
});


app.use('/auth', authRoute);
app.use('/posts', postRoute);
app.use('/comment', commentRoute);

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;