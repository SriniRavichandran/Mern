import db from "../models";
const Sign_up = db.sign_up;
import {Request,Response} from  "express"
import { repoSignup } from "../repository/signup";
const jwt = require("jsonwebtoken");
// const signinRepo = require("../repository/signup");

const generateToken = (email:String) => {
  return jwt.sign({ email }, "srinivasan", { expiresIn: "3h" });
};

const create = async (req:Request, res:Response) => {
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

    const datas = await repoSignup.create(sign_up);
    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message:  new Error || "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: err || "Some error occurred .",
    });
  }
};

const findAll = async (req:Request, res:Response) => {
  try {
    const email:any = req.query.email;
    var condition = email
      ? { email: { $regex: new RegExp(email), $options: "i" } }
      : {};

    const datas = await repoSignup.findAll(condition);
    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message: new Error || "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: err || "Some error occurred .",
    });
  }
};

const findOne = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    const datas = await repoSignup.findOne(id);
    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message: "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({ message: "Error id" });
  }
};

const update = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    const datas = await repoSignup.update(id, req);

    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message: new Error || "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: "Error updating =",
    });
  }
};

const deleteOne = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    const datas = await repoSignup.deleteOne(id);
    if (datas) {
      res.send("delete successfully");
    } else {
      res.status(404).send({
        message:  new Error || "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: "Could not delete ",
    });
  }
};

const Login = async (req:Request, res:Response) => {
  try {
    const { email, password } = req.body;
    const user = await repoSignup.Login(email);
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

export const signup_Service={
Login,findAll,findOne,create,update,deleteOne
}