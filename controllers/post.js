const { restart } = require("nodemon");
const Post = require("../models/post");

exports.getPosts = (req, res) => {
    // getting all posts with find()
    const posts = Post.find()
        .select("_id title body")
        .then(posts => {
            res.json({ posts });
        })
        .catch(err => console.log(err));
};

exports.createPost = (req,res) => {

    const post = new Post(req.body);
    console.log("CREATING POST: ", post);

    post.save().then(result => {
        res.json({
            post: result
        })
    });
};