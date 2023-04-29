const db = require("../models");
const Category_data = db.category_data;

exports.findAll = async () => {
  const users = await Category_data.find({});
  return users;
};

exports.create = async (name) => {
  const category_data = new Category_data({
    name: name,
  });
  console.log(name);
  const datas = category_data.save(category_data);

  return datas;
};

exports.findOne = async (id) => {
  const datas = await Category_data.findById(id);

  return datas;
};

exports.update = async (id, req) => {
  const datas = await Category_data.findByIdAndUpdate(req.body, {
    useFindAndModify: false,
  });
  return datas;
};

exports.delete = async (id) => {
  return await Category_data.findByIdAndRemove(id);
};
