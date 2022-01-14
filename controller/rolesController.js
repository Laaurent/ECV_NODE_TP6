const Role = require("../models");

exports.indexRole = (req, res) => {
   const indexRole = Role.findAll()
      .then((response) => {
         res.send(indexRole);
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.createRole = (req, res) => {
   const newRole = Role.create(req.body)
      .then((response) => {
         res.send("Role Created");
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.readRole = (req, res) => {
   const Role = Role.findOne({ where: { id: req.params.id } })
      .then((response) => {
         res.send(Role);
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.updateRole = (req, res) => {
   const alterRole = Role.update(req.body, { where: { id: req.params.id } })
      .then((response) => {
         res.send("Role Updated");
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};

exports.deleteRole = (req, res) => {
   const deleteRole = Role.destroy({ id: req.params.id })
      .then((response) => {
         res.send("Role deleted");
      })
      .catch((err) => {
         res.status(400).send({ message: "Bad request" });
      });
};
