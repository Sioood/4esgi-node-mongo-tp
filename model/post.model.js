const {Schema} = require("mongoose");
const mongoose = require("mongoose")

const post = new Schema({
    texte: String,
    created_by: ObjectId,
    date: Date,
    comment: ObjectId,
    picture: String

    });
    
const Post = mongoose.model('Post', post);

module.exports = Post;