const db = require("../models");
const Post2Data = db.post2_data;

exports.particulardatas = async (data) => {
  const datas = await Post2Data.find({ category: data });
  return datas;
};
