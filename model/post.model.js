const {Schema} = require("mongoose");
const mongoose = require("mongoose")

const ObjectId = Schema.ObjectId;

const post = new Schema({
    texte: String,
    created_by: ObjectId,
    date: Date,
    comment: Array,
    picture: String

    });
    
const Post = mongoose.model('Post', post);

module.exports = Post;