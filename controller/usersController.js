const User = require("../models");

exports.indexUser = (req, res) => {
   const indexUser = User.findAll()
      .then((response) => {
         res.send(indexUser);
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.createUser = (req, res) => {
   const newUser = User.create(req.body)
      .then((response) => {
         res.send("User Created");
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.readUser = (req, res) => {
   const include = req.query.show_posts ? { model: Post } : null;
   const readUser = User.findOne({ where: { id: req.params.id }, include: include })
      .then((response) => {
         res.send(readUser);
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.updateUser = (req, res) => {
   const alterUser = User.update(req.body, { where: { id: req.params.id } })
      .then((response) => {
         res.send("User Updated");
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.deleteUser = (req, res) => {
   const deleteUser = User.destroy({ id: req.params.id })
      .then((response) => {
         res.send("User deleted");
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};
