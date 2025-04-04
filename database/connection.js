const mongoose = require("mongoose");


const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/4esgi-node-mongo-tp')
        console.log("connected")
    } catch (error) {
         console.log("Error database connection" + error)
    }
}

module.exports = { connect}