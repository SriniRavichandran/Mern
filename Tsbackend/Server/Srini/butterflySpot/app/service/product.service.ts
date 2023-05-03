import db from "../models";
const Products_data = db.products_data;

// const productRepo = require("../repository/product");

import { repo_Product } from "../repository/product";
import { Request,Response } from "express";

const create = async (req:Request, res:Response) => {
  try {
    const products_data = new Products_data({
      category: req.body.category,
      subcategory: req.body.subcategory,
      title: req.body.title,
      price: req.body.price,
      brand: req.body.brand,
      offer: req.body.offer,
      description: req.body.description,
      image: req.body.image,
    });
    console.log(req.body.name);
    const datas = await repo_Product.create(products_data);
    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message:  "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({
      message:"Some error occurred .",
    });
  }
};

const findAll = async (req:Request, res:Response) => {
  try {
    const category = req.query.category;
    var condition = category ? { category: category } : {};

    const datas = await repo_Product.findAll(condition);
    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message:  "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({
      message:  "Some error occurred .",
    });
  }
};

const particularData = async (req:Request, res:Response) => {
  try {
    const subcategory = req.params.subcategory;

    var condition = subcategory ? { subcategory: subcategory } : {};

    const datas = await repo_Product.particularData(condition);

    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message:  "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Some error occurred .",
    });
  }
};

const findOne = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    const datas = await repo_Product.findOne(id);
    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message:  "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({ message: "Error id=" });
  }
};

const update = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    const datas = await repo_Product.update(id, req);
    if (datas) {
      res.send(datas);
    } else {
      res.status(404).send({
        message:  "Some error occurred .",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: "Error updating = id",
    });
  }
};

const deleteOne = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    const datas = await repo_Product.deleteOne(id);
    if (datas) {
      res.send(datas);
    } else {
      res.send({
        message: " deleted successfully!",
      });
    }
  } catch (err) {
    res.status(404).send({
      message: "Could not delete ",
    });
  }
};


export const serviceProduct={
  create,update,findAll,findOne,deleteOne,particularData
}