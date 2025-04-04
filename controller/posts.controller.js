const Post = require("../model/post.model.js");

exports.create = async(req, res) =>{

    if (!req.body.user) {
        return res.status(400).json({message: "L'utilisateur n'existe pas"})
    }

    if (!req.body.texte || req.body.texte === "") {
        return res.status(400).json({message: "Veuillez saisir un titre"})
    }

    let post = await Post.create({
        texte: req.body.texte,
        created_by: req.body.user,
        date: req.body.date,
        comment: [],
        picture: req.body.picture
    });

    res.status(201).json(post);


}

exports.getOne = async(req, res) =>{

}

exports.editOne = async(req, res) =>{
    let post = await Post.findOne({_id: req.params.id})
    let user = await User.findOne({_id: req.token._id})
    if(!post){
        return res.status(404).json({errror: "Post introuvable"})
    }

    if(post.created_by !== user._id){
        return res.status(404).json({error: "L'utilisateur n'a pas les droits de motifier ce post"})
    }

    if(req.body.texte){
        post.texte = req.body.texte;
    }

    if(req.file){
        post.picture = './picture' + req.file.filename;
    }

    try {
        await post.save();
        return res.status(201).json(post);
    }catch(e){
        return res.status(500).json({error: "Problème lors de la modification d'un post"})
    }
}

exports.deleteOne = async (req, res) => {
  let user = await User.findOne({ _id: req.token._id });
  if (!user) {
    return res.status(404).json({ error: "L'utilisateur n'existe pas" });
  }

  let post = await Post.findOne({ _id: req.params.id });
  if (!post) {
    return res.status(404).json({ error: "Le post n'existe pas" });
  }
    
  if (post.created_by !== user._id) {
    return res.status(404).json({ error: "L'utilisateur n'a pas le droit de supprimer ce post." });
  }
    
    // TODO supprimer tout les commentaires liés au post 
    
  await Post.deleteOne({ _id: req.params.id });
  return res.status(200).json({ message: "Post supprimé" });
};

exports.getAll = async (req, res) => {
  let postList = await Post.find();
  if (!postList) {
    return res.status(404).json({ error: "Aucun post disponible" });
  }
  return res.status(200).json(postList);
};