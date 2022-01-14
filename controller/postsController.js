const Post = require("../models");

exports.indexPost = (req, res) => {
   const indexPost = Post.findAll()
      .then((response) => {
         res.send(indexPost);
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.createPost = (req, res) => {
   const newPost = Post.create(req.body)
      .then((response) => {
         res.send("Post Created");
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.readPost = (req, res) => {
   const include = req.query.show_comments ? { model: Comment } : null;
   const readPost = Post.findOne({ where: { id: req.params.id }, include: include })
      .then((response) => {
         res.send(readPost);
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.updatePost = (req, res) => {
   const alterPost = Post.update(req.body, { where: { id: req.params.id } })
      .then((response) => {
         res.send("Post Updated");
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.deletePost = (req, res) => {
   const deletePost = Post.destroy({ id: req.params.id })
      .then((response) => {
         res.send("Post deleted");
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};
