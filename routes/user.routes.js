const Joi = require("joi");
var user_controller = require("../controller/usersController");

module.exports = function (app, Joi, validator) {
   // USER
   const userSchema = Joi.object({
      role: Joi.number().min(1).required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      username: Joi.string().required(),
      github: Joi.string().required(),
   });

   const arrayUserSchema = Joi.array().items(userSchema);

   const queryStringUserSchema = Joi.number().min(1).required();

   app.get("/users", validator.response(arrayUserSchema), user_controller.user);
   app.post("/users", validator.body(userSchema), user_controller.createUser);
   app.get("/users/:id", validator.response(userSchema), validator.query(queryStringUserSchema), user_controller.readUser);
   app.patch("/users/:id", validator.body(userSchema), validator.query(queryStringUserSchema), user_controller.updateUser);
   app.delete("/users/:id", validator.query(queryStringUserSchema), user_controller.deleteUser);
};
