import db from "../models";
import {Request,Response} from "express"
const Products_data = db.addtobag_data;

import { repo_bag } from "../repository/addtobag";


const create = async (req: Request, res:Response) => {
  try {
    const product_data = new Products_data({
      image: req.body.image,
      productid: req.body.productid,
      title: req.body.title,
      price: req.body.price,
      offer: req.body.offer,
      quantity: req.body.quantity,
      value: req.body.value,
      discountprice: req.body.discountprice,
      email: req.body.email,
      order: req.body.order,
    });
    console.log(req.body.name);

    const datas = await repo_bag.create(product_data);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(404).send("data not found");
    }
  } catch (err:any) {
    res.status(404).send({
      message: err.message || "Some error occurred .",
    });
  }
};

const findAll = async (req:Request, res:Response) => {
  try {
    const category = req.query.category;
    var condition = category ? { category: category } : {};

    const datas = await repo_bag.findAll(condition);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(404).send("data not found");
    }
  } catch (err:any) {
    res.status(404).send({
      message: err.message || "Some error occurred .",
    });
  }
};

const findOne = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    const datas = await repo_bag.findOne(id);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(404).send("data not found");
    }
  } catch (err) {
    res.status(404).send({ message: "Error id=" });
  }
};

const update = async (req:Request, res:Response) => {
  try {
    const id:String  = req.params.id;
    
    const datas = await repo_bag.update(id, req);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(404).send("data not found");
    }
  } catch (err:any) {
    res.status(404).send({
      message: "Error updating =",
    });
  }
};

const deleteOne = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    const data = await repo_bag.deleteOne(id);
    if (data) {
      res.status(200).send({
        message: "Successfully deleted ",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: "Could not delete ",
    });
  }
};


export const Service_bag={
  deleteOne,findAll,findOne,create,update
}