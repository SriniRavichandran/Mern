const auth = require("../middleware/authMiddleware.js");

var multer = require("multer");

module.exports = (app) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../public/image");
      ("");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now + "_" + file.originalname);
    },
  });

  const upload = multer({ storage: storage });

  const signup = require("../controllers/signup.controller");

  var router = require("express").Router();

  router.post("/user", upload.single("profile"), signup.create);

  router.get("/user", auth, signup.findAll);

  router.get("/user/:id", signup.findOne);

  router.put("/user/:id", signup.update);

  router.delete("/user/:id", signup.delete);

  router.delete("/user", signup.deleteAll);

  router.post("/user/login", signup.Login);

  router.get("/me", signup.getMe);

  app.use("/api", router);
};
