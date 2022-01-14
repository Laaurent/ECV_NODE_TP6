var role_controller = require("./controller/roleController");

module.exports = function (app, Joi, validator) {
   // ROLE

   const roleSchema = Joi.object({
      name: Joi.string().required(),
   });

   const arrayRoleSchema = Joi.array().items(roleSchema);

   const paramsStringRoleSchema = Joi.object({
      id: Joi.number().required(),
   });

   app.get("/roles", validator.response(arrayRoleSchema), role_controller.role);
   app.post("/roles", validator.body(roleSchema), role_controller.createRole);
   app.get("/roles/:id", validator.response(roleSchema), validator.params(paramsStringRoleSchema), role_controller.readRole);
   app.patch("/roles/:id", validator.body(roleSchema), validator.params(paramsStringRoleSchema), role_controller.updateRole);
   app.delete("/roles/:id", validator.params(paramsStringRoleSchema), role_controller.deleteRole);
};
