const Comment = require("../model/user.model");
const Post = require("../model/post.model");
const User = require("../model/user.model");

exports.createComment = async (req, res) => {
    const postID = req.params.id;
    const title = req.body.title;
    const content = req.body;

    if(!postID || !content || !title) return res.status(400).json({message: "Le contenu du commentaire est nécéssaire pour continuer"});

    const post = await Post.findOne({_id: postID});
    if (!post) return res.status(404).json({message: "Le post est introuvable"});

    try {
        const comment = await Comment.create({
            title: title,
            content: content,
            user: req.token._id,
            post: post.id
        });
    } catch (err) {
        return res.status(500).json({message: "Erreur lors de la création du commentaire"});
    }
    res.status(201).json({message: "Votre commentaire a bien été ajouté"});
};

exports.editComment = async (req, res) => {
    const commentId = req.params.id;
    const content = req.body;
    let user = await User.findOne({_id: req.token._id})
    if(comment.created_by !== user._id){
        return res.status(404).json({error: "L'utilisateur n'a pas les droits de motifier ce commentaire"})
    }
    if(!commentId || !content) return res.status(400).json({message: "Le contenu du commentaire est nécéssaire pour continuer"});

    let comment = await Comment.findOne({_id: commentId});
    if (!comment) return res.status(404).json({message: "Le commentaire est introuvable"});

    comment.content = content;

    res.status(201).json({message: "Votre commentaire a bien été modifié"});
};

exports.deleteComment = async (req, res) => {
    const commentId = req.params.id;
    let comment = await Comment.findOne({_id: commentId});
    let user = await User.findOne({_id: req.token._id})
    if(comment.created_by !== user._id){
        return res.status(404).json({error: "L'utilisateur n'a pas les droits de motifier ce commentaire"})
    }
    if (!comment) return res.status(404).json({message: "Le commentaire est introuvable"});

    comment.content = content;
    res.status(201).json({message: "Votre commentaire a bien été supprimé"});
};