const comments = require('../data/comments')

const list = (req, res) => res.json(comments);
const show = (req, res) => {
    const commentId = req.params.id
    for (let comment of comments) {
        if (comment._id === parseInt(commentId)) {
            res.json(comment)
        }
    }
};
const create = (req, res) => {
    const newComment = {
        _id: comments.length + 1,
        body: req.body.body,
        postId: 1
    };
    comments.push(newComment);
    res.json(comments)
};

module.exports = {
    list,
    show,
    create
};