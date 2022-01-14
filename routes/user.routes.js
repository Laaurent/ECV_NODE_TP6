var user_controller = require("../controller/usersController");

module.exports = function (app, Joi, validator) {
   // USER
   const userSchema = Joi.object({
      role: Joi.number().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      username: Joi.string().required(),
      github: Joi.string().required(),
   });

   const arrayUserSchema = Joi.array().items(userSchema);

   const paramsStringUserSchema = Joi.object({
      id: Joi.number().required(),
   });

   app.get("/users", validator.response(arrayUserSchema), user_controller.user);
   app.post("/users", validator.body(userSchema), user_controller.createUser);
   app.get("/users/:id", validator.response(userSchema), validator.params(paramsStringUserSchema), user_controller.readUser);
   app.patch("/users/:id", validator.body(userSchema), validator.params(paramsStringUserSchema), user_controller.updateUser);
   app.delete("/users/:id", validator.params(paramsStringUserSchema), user_controller.deleteUser);
};
