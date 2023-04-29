const signupService = require("../service/signup.service");

exports.create = (req, res) => {
  signupService.create(req, res);
};

exports.findAll = (req, res) => {
  signupService.findAll(req, res);
};

exports.findOne = (req, res) => {
  signupService.findOne(req, res);
};

exports.update = (req, res) => {
  signupService.update(req, res);
};

exports.delete = (req, res) => {
  signupService.delete(req, res);
};

exports.Login = async (req, res) => {
  signupService.Login(req, res);
};
