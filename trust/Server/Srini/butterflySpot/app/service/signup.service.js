const db = require("../models");
const Sign_up = db.sign_up;
const jwt = require("jsonwebtoken");
const signinRepo = require("../repository/signup");

const generateToken = (email) => {
  return jwt.sign({ email }, "srinivasan", { expiresIn: "3h" });
};

exports.create = async (req, res) => {
  try {
    const sign_up = new Sign_up({
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phoneno: req.body.phoneno,
      status: req.body.status,
      gender: req.body.gender,
      dateofbrith: req.body.dateofbrith,
    });
    console.log(req.body.email);

    const datas = await signinRepo.create(sign_up);
    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message: err.message || "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: err.message || "Some error occurred .",
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const email = req.query.email;
    var condition = email
      ? { email: { $regex: new RegExp(email), $options: "i" } }
      : {};

    const datas = await signinRepo.findAll(condition);
    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message: err.message || "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: err.message || "Some error occurred .",
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;

    const datas = await signinRepo.findOne(id);
    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message: err.message || "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({ message: "Error id" });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;

    const datas = await signinRepo.update(id, req);

    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message: err.message || "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: "Error updating =",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;

    const datas = await signinRepo.delete(id);
    if (datas) {
      res.send("delete successfully");
    } else {
      res.status(404).send({
        message: err.message || "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: "Could not delete ",
    });
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await signinRepo.Login(email);
    console.log("userdata", user);
    if (user && (await password) == user.password) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,

        idtoken: generateToken(req.body.email),
        status: user.status,
      });
    } else {
      return res.status(404).json({ msg: "invalid user Data" });
    }
  } catch (err) {
    return res.status(404).json({ msg: "invalid user Data" });
  }
};
