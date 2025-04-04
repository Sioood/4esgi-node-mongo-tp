const {Schema} = require("mongoose");
const mongoose = require("mongoose")

const user = new Schema({
    email: {
        type: String,
        unique: true,
        validate: function(v){
            return  /.+@.+/.test(v);
        }
    },
    password: String,
    pseudo: {
        type: String,
        unique: true,
    }
});

const User = mongoose.model('User', user);

module.exports = User;