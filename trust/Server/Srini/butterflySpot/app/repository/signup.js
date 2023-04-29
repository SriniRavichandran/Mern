const db = require("../models");
const Sign_up = db.sign_up;

exports.create = async (sign_up) => {
  const datas = await sign_up.save(sign_up);
  return datas;
};

exports.findAll = async (condition) => {
  const datas = await Sign_up.find(condition);
  return datas;
};

exports.findOne = async (id) => {
  const datas = await Sign_up.findById(id);
  return datas;
};

exports.update = async (id, req) => {
  const datas = await Sign_up.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  });
  return datas;
};

exports.delete = async (id) => {
  const datas = await Sign_up.findByIdAndRemove(id);
  return datas;
};

exports.Login = async (email) => {
  const user = await Sign_up.findOne({ email });
  return user;
};
