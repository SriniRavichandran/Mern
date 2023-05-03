import db from "../models";
const Sign_up = db.sign_up;
import { Request } from "express";

const create = async (sign_up:any) => {
  const datas = await sign_up.save(sign_up);
  return datas;
};

const findAll = async (condition:any) => {
  const datas = await Sign_up.find(condition);
  return datas;
};

const findOne = async (id:String) => {
  const datas = await Sign_up.findById(id);
  return datas;
};

const update = async (id:String, req:Request) => {
  const datas = await Sign_up.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  });
  return datas;
};

const deleteOne = async (id:String) => {
  const datas = await Sign_up.findByIdAndRemove(id);
  return datas;
};

const Login = async (email:String) => {
  const user = await Sign_up.findOne({ email });
  return user;
};


export const repoSignup={
  Login,deleteOne,update,findAll,findOne,create
}