const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const db = require("./app/models");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("common"));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome application." });
});

function middle(err, req, res, next) {
  console.error(err.stack);
  res.status(404).send("Something broke!");
}

require("./app/route/signup.route")(app);
require("./app/route/category.route")(app);
require("./app/route/postone.route")(app);
require("./app/route/posttwo.route")(app);
require("./app/route/subcategory.route")(app);
require("./app/route/products.route")(app);
require("./app/route/addtobag.route")(app);
require("./app/route/favourite.route")(app);
require("./app/route/order.route")(app);

const PORT = process.env.PORT || 7600;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
