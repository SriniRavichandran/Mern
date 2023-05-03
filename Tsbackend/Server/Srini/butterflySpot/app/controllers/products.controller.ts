import db from "../models";
// const Products_data = db.products_data;

import { serviceProduct } from "../service/product.service";
import { Response,Request } from "express";

// const productService = require("../service/product.service");

const create = (req:Request, res:Response) => {
  serviceProduct.create(req, res);
};

const findAll = (req:Request, res:Response) => {
  serviceProduct.findAll(req, res);
};

const particularData = (req:Request, res:Response) => {
  serviceProduct.particularData(req, res);
};

const findOne = (req:Request, res:Response) => {
  serviceProduct.findOne(req, res);
};

const update = (req:Request, res:Response) => {
  serviceProduct.update(req, res);
};

const deleteOne = (req:Request, res:Response) => {
  serviceProduct.deleteOne(req, res);
};

export const productController={
  create,findAll,findOne,particularData,update,deleteOne
}
