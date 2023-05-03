import db from "../models";
const Order_data = db.order_data;
import { Request,Response } from "express";
// const orderRepo = require("../repository/order");
import { order_Repo } from "../repository/order";

const create = async (req:Request, res:Response) => {
  try {
    const order_data = new Order_data({
      email: req.body.email,
      Address: req.body.Address,
      phone: req.body.phone,
      place: req.body.place,
      pincode: req.body.pincode,
      state: req.body.state,
      name: req.body.name,
      productid: req.body.productid,
      title: req.body.title,
      price: req.body.price,
      offer: req.body.offer,
      quantity: req.body.quantity,
      value: req.body.value,
      discountprice: req.body.discountprice,
      image: req.body.image,
      orderstatus1: req.body.orderstatus1,
      orderdate: req.body.orderdate,
    });
    console.log(req.body.name);

    const datas = await order_Repo.create(order_data);

    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("Some error occurred");
    }
  } catch (err) {
    res.status(404).send({
      message:"Some error occurred .",
    });
  }
};

const findAll = async (req:Request, res:Response) => {
  try {
    const email = req.query.email;
    var condition = email ? { email: email } : {};

    const datas = await order_Repo.findAll(condition);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("Some error occurred");
    }
  } catch (err) {
    res.status(404).send({
      message: "Some error occurred .",
    });
  }
};

const findOne = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;

    const datas = await order_Repo.findOne(id);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("Some error occurred");
    }
  } catch (err) {
    res.status(404).send({ message: "Error id=" + err });
  }
};

const update = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;
    const datas = await order_Repo.update(id, req);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("Some error occurred");
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

    const datas = await order_Repo.deleteOne(id);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("Some error occurred");
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete ",
    });
  }
};


export const serviceOrder={
  deleteOne,findAll,findOne,create,update
}
