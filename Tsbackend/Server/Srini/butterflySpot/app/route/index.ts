exports.routeData = (app) => {
  require("./app/route/signup.route")(app);
  require("./app/route/category.route")(app);
  require("./app/route/postone.route")(app);
  require("./app/route/posttwo.route")(app);
  require("./app/route/subcategory.route")(app);
  require("./app/route/products.route")(app);
  require("./app/route/addtobag.route")(app);
  require("./app/route/favourite.route")(app);
  require("./app/route/order.route")(app);
};
