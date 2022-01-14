const Comment = require("../models");

exports.indexComment = (req, res) => {
   const indexComment = Comment.findAll()
      .then((response) => {
         res.send(indexComment);
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.createComment = (req, res) => {
   const newComment = Comment.create(req.body)
      .then((response) => {
         res.send("Comment Created");
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.readComment = (req, res) => {
   const Comment = Comment.findOne({ where: { id: req.params.id } })
      .then((response) => {
         res.send(Comment);
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.updateComment = (req, res) => {
   const alterComment = Comment.update(req.body, { where: { id: req.params.id } })
      .then((response) => {
         res.send("Comment Updated");
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.deleteComment = (req, res) => {
   const deleteComment = Comment.destroy({ id: req.params.id })
      .then((response) => {
         res.send("Comment deleted");
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};
