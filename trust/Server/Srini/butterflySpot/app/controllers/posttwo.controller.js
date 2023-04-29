const post2Service = require("../service/posttwo.service");

// exports.create = (req, res) => {
//   post2Service.createPost2(req, res);
// };

// exports.findAll = (req, res) => {
//   post2Service.findAll(req, res);
// };

// exports.findOne = (req, res) => {
//   post2Service.findOne(req, res);
// };

exports.particulardata = (req, res) => {
  post2Service.particulardata(req, res);
};

// exports.update = (req, res) => {
//   post2Service.update(req, res);
// };

// exports.delete = (req, res) => {
//   post2Service.delete(req, res);
// };

// exports.deleteAll = (req, res) => {
//   post2Service.deleteAll(req, res);
// };
