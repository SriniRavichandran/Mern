import db from "../models";
const Favourite_data = db.favourite_data;

// const Favouriterepo = require("../repository/favourite");

import { favourite_Repo } from "../repository/favourite";
import { Request,Response } from "express";


const create = async (req:Request, res:Response) => {
  try {
    const favourite_data = new Favourite_data({
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

    const datas = await favourite_Repo.create(favourite_data);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("data not found");
    }
  } catch (err) {
    res.status(404).send({
      message:  "Some error occurred .",
    });
  }
};

const findAll = async (req:Request, res:Response) => {
  try {
    const category = req.query.category;
    var condition = category ? { category: category } : {};

    const datas = await favourite_Repo.findAll(condition);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("data not found");
    }
  } catch (err) {
    res.status(500).send({
      message:  "Some error occurred .",
    });
  }
};

const findOne = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;
    const datas = await favourite_Repo.findOne(id);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("data not found");
    }
  } catch (err) {
    res.status(404).send({ message: "Error id=" });
  }
};

const update = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;
    const datas = await favourite_Repo.update(id, req);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("data not found");
    }
  } catch (err) {
    res.status(404).send({
      message: "Error updating",
    });
  }
};

const deleteOne = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    const datas = await favourite_Repo.deleteOne(id);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("data not found");
    }
  } catch (err) {
    res.status(404).send({
      message: "Could not delete ",
    });
  }
};

const particularData = async (req:Request, res:Response) => {
  try {
    const email = req.params.email;
    console.log("SDFGDF" + email);

    var condition = email ? { email: email } : {};

    await favourite_Repo.findAll({ email: email })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred .",
        });
      });
  } catch (err) {
    res.status(500).send({
      message:  "Some error occurred .",
    });
  }
};

export const serviceFavourite={
  particularData,create,update,findOne,deleteOne,findAll
}
