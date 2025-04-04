exports.create = async(req, res) =>{

}

exports.getOne = async(req, res) =>{

}

exports.editOne = async(req, res) =>{

}

exports.getAll = async(req, res) =>{
    let postList = await Post.find();
    if(!postList) {
        return res.status(404).json({error : "Aucun post disponible"})
    }
    return res.status(200).json(userList);
}
