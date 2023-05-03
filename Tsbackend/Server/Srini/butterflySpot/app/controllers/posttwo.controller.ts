// const post2Service = require("../service/posttwo.service");
// import particulardata from "../service/posttwo.service";
import { particularService } from "../service/posttwo.service";
import { Request,Response } from "express";
// exports.create = (req, res) => {
//   post2Service.createPost2(req, res);
// };

// exports.findAll = (req, res) => {
//   post2Service.findAll(req, res);
// };

// exports.findOne = (req, res) => {
//   post2Service.findOne(req, res);
// };

const controllerparticulardata = (req:Request, res:Response) => {
  particularService.particulardata(req, res);
};
export const  controllerparticular={
  controllerparticulardata
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
