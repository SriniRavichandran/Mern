// const signupService = require("../service/signup.service");
import { signup_Service } from "../service/signup.service";
import { Request,Response } from "express";

const create = (req:Request, res:Response) => {
  signup_Service.create(req, res);
};

const findAll = (req:Request, res:Response) => {
  signup_Service.findAll(req, res);
};

const findOne = (req:Request, res:Response) => {
  signup_Service.findOne(req, res);
};

const update = (req:Request, res:Response) => {
  signup_Service.update(req, res);
};

const deleteOne = (req:Request, res:Response) => {
  signup_Service.deleteOne(req, res);
};

const Login = async (req:Request, res:Response) => {
  signup_Service.Login(req, res);
};


export const signupController={
  create,findAll,findOne,update,deleteOne,Login
}