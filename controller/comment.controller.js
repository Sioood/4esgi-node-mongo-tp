const Comment = require("../model/comment.model");
const Post = require("../model/post.model");
const User = require("../model/user.model");

exports.createComment = async (req, res) => {
  const postID = req.params.id;
  const title = req.body.title;
  const content = req.body.content;

  if (!postID || !content || !title)
    return res
      .status(400)
      .json({
        message: "Le contenu du commentaire est nécéssaire pour continuer",
      });

  const post = await Post.findOne({ _id: postID });
  if (!post)
    return res.status(404).json({ message: "Le post est introuvable" });

  try {
    const newComment = await Comment.create({
      title: title,
      content: content,
      created_by: req.token._id,
      post: post.id,
    });
    return res.status(201).json({
      message: "Votre commentaire a bien été ajouté",
      comment: newComment,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Erreur lors de la création du commentaire" });
  }
};

exports.editComment = async (req, res) => {
  const commentId = req.params.id;
  const content = req.body.content;
  const title = req.body.title;
  let user = await User.findOne({ _id: req.token._id });

  if (!commentId || !content || !title)
    return res
      .status(400)
      .json({
        message: "Le contenu du commentaire est nécéssaire pour continuer",
      });

  let comment = await Comment.findOne({ _id: commentId });
  if (comment.created_by.toString() !== req.token._id) {
    return res.status(404).json({
      error: "L'utilisateur n'a pas les droits de modifier ce commentaire",
    });
  }

  if (!comment)
    return res.status(404).json({ message: "Le commentaire est introuvable" });

  comment.title = title;
  comment.content = content;

  return res
    .status(201)
    .json({ message: "Votre commentaire a bien été modifié" });
};

exports.deleteComment = async (req, res) => {
    const commentId = req.params.id;
    let comment = await Comment.findOne({_id: commentId});
    let user = await User.findOne({_id: req.token._id})
    if(comment.created_by.toString() !== user._id){
        return res.status(404).json({error: "L'utilisateur n'a pas les droits de modifier ce commentaire"})
    }
    if (!comment) return res.status(404).json({message: "Le commentaire est introuvable"});

    comment.content = content;
    comment.save();
    return res.status(201).json({message: "Votre commentaire a bien été supprimé"});
};