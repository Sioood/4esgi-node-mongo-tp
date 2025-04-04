const {Schema} = require("mongoose");
const mongoose = require("mongoose")

const comment = new Schema({
    title: String,
    text: String,
    user: ObjectId,
});

const Comment = mongoose.model('Comment', comment);

module.exports = Comment;