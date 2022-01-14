const express = require("express");
const Joi = require("joi");
const validator = require("express-joi-validator").createValidator({});
const port = 3000;

const app = express();

app.use(express.json());

require("./routes/routes")(app, Joi, validator);
require("./routes/comment.routes")(app, Joi, validator);
require("./routes/post.routes")(app, Joi, validator);
require("./routes/role.routes")(app, Joi, validator);
require("./routes/user.routes")(app, Joi, validator);

app.get("/", (req, res) => {
   res.send("Hello, world!");
});

app.listen(port, () => {
   console.log("listening on port http://localhost:" + port);
});
