const Joi = require("joi");
var comment_controller = require("../controller/commentsController");

module.exports = function (app, Joi, validator) {
   // COMMENT
   const commentSchema = Joi.object({
      comment: Joi.number().required(),
      content: Joi.string().required(),
      date: Joi.string().isoDate().required(),
      author: Joi.number().required(),
   });

   const arrayCommentSchema = Joi.array().items(commentSchema);

   const paramsStringCommentSchema = Joi.object({
      id: Joi.number().required(),
   });

   app.get("/comments", validator.response(arrayCommentSchema), comment_controller.indexComment);
   app.comment("/comments", validator.body(commentSchema), comment_controller.createComment);
   app.get("/comments/:id", validator.response(commentSchema), validator.params(paramsStringCommentSchema), comment_controller.readComment);
   app.patch("/comments/:id", validator.body(commentSchema), validator.params(paramsStringCommentSchema), comment_controller.updateComment);
   app.delete("/comments/:id", validator.params(paramsStringCommentSchema), comment_controller.deleteComment);
};
