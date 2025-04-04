const Comment = require("../model/user.model");
const Post = require("../model/post.model");
const User = require("../model/user.model");

const createComment = async (req, res) => {
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

const editComment = async (req, res) => {
    //TODO: Logique du commentaire editable seulement pour l'auteur
    const commentID = req.params.id;
    const content = req.body;
    if(!commentId || !content) return res.status(400).json({message: "Le contenu du commentaire est nécéssaire pour continuer"});

    let comment = await Comment.findOne({_id: commentId});
    if (!comment) return res.status(404).json({message: "Le commentaire est introuvable"});

    comment.content = content;

    res.status(201).json({message: "Votre commentaire a bien été modifié"});
};

const deleteComment = async (req, res) => {
    //TODO: Logique du commentaire supprimable seulement pour l'auteur
    const commentID = req.params.id;
    let comment = await Comment.findOne({_id: commentId});
    if (!comment) return res.status(404).json({message: "Le commentaire est introuvable"});

    comment.content = content;
    res.status(201).json({message: "Votre commentaire a bien été supprimé"});
};