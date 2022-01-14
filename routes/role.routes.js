var role_controller = require("./controller/roleController");

module.exports = function (app, Joi, validator) {
   // ROLE

   const roleSchema = Joi.object({
      name: Joi.string().required(),
   });

   const arrayRoleSchema = Joi.array().items(roleSchema);

   const queryStringRoleSchema = Joi.number().min(1).required();

   app.get("/roles", validator.response(arrayRoleSchema), role_controller.role);
   app.post("/roles", validator.body(roleSchema), role_controller.createRole);
   app.get("/roles/:id", validator.response(roleSchema), validator.query(queryStringRoleSchema), role_controller.readRole);
   app.patch("/roles/:id", validator.body(roleSchema), validator.query(queryStringRoleSchema), role_controller.updateRole);
   app.delete("/roles/:id", validator.query(queryStringRoleSchema), role_controller.deleteRole);
};
