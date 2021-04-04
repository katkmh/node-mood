const mongoose = require("mongoose");

// defining post schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Post", postSchema);
