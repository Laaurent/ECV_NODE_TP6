const Joi = require("joi");
var post_controller = require("./controller/postController");

module.exports = function (app, Joi, validator) {
   // POST
   const postSchema = Joi.object({
      title: Joi.string().required(),
      content: Joi.string().required(),
      date: Joi.string().isoDate().required(),
      author: Joi.number().min(1).required(),
   });

   const arrayPostSchema = Joi.array().items(postSchema);

   const queryStringPostSchema = Joi.number().min(1).required();

   app.get("/posts", validator.response(arrayPostSchema), post_controller.post);
   app.post("/posts", validator.body(postSchema), post_controller.createPost);
   app.get("/posts/:id", validator.response(postSchema), validator.query(queryStringPostSchema), post_controller.readPost);
   app.patch("/posts/:id", validator.body(postSchema), validator.query(queryStringPostSchema), post_controller.updatePost);
   app.delete("/posts/:id", validator.query(queryStringPostSchema), post_controller.deletePost);
};
