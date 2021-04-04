const Post = require("../models/post");

var postJson = {
    posts: [
        {title: "First post"},
        {title: "Second post"}
    ]
};

exports.getPosts = (req, res) => {
    res.send(postJson);
};

exports.createPost = (req,res) => {

    const post = new Post(req.body);
    console.log("CREATING POST: ", post);

    post.save((err, result) => {
        if (err) return res.status(400).json({
            error: err
        });

        res.status(200).json({
            post: result
        });
    });
};