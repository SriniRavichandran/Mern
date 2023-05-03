const dbConfig = require("../config/dbconfig.js");

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;

db.sign_up = require("./signup.model")(mongoose);
// db.category_data=require("./category.model")(mongoose);
// db.post1_data=require("./post1.model")(mongoose);
// db.post2_data=require("./post2.model")(mongoose);
// db.subcategory_data=require("./subcategory.model")(mongoose);
// db.products_data=require("./product.model")(mongoose);
// db.addtobag_data=require("./addtobag.model")(mongoose);
// db.favourite_data=require("./favourite.model")(mongoose);
// db.order_data=require("./order.model")(mongoose);

module.exports = db;
