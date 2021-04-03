var postJson = {
    posts: [
        {title: "First post"},
        {title: "Second post"}
    ]
};

exports.getPosts = (req, res) => {
    res.send(postJson);
};