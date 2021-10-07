const Post = require("../Models/Post");

exports.getAllPosts = async function(req, res, next) {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    }catch(error){
        res.status(500).send(error.message);
    }
    // res.send('getting all posts');
}

exports.createPost = async function(req, res, next) {

    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })

    await post.save();
    post.id = post._id;
    res.json(post)

    // res.send('post created!!!');
}