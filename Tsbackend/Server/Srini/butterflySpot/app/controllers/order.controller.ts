// const orderServices = require("../service/order.service");

import { serviceOrder } from "../service/order.service";
import { Request,Response } from "express";

const create = (req:Request, res:Response) => {
  serviceOrder.create(req, res);
};

const findAll = (req:Request, res:Response) => {
  serviceOrder.findAll(req, res);
};

const findOne = (req:Request, res:Response) => {
  serviceOrder.findOne(req, res);
};

const update = (req:Request, res:Response) => {
  serviceOrder.update(req, res);
};

const deleteOne = (req:Request, res:Response) => {
  serviceOrder.deleteOne(req, res);
};

export const orderController={
  deleteOne,update,findAll,findOne,create
}