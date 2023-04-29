const db = require("../models");
const Order_data = db.order_data;

const orderRepo = require("../repository/order");

exports.create = async (req, res) => {
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

    const datas = await orderRepo.create(order_data);

    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("Some error occurred");
    }
  } catch (err) {
    res.status(404).send({
      message: err.message || "Some error occurred .",
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const email = req.query.email;
    var condition = email ? { email: email } : {};

    const datas = await orderRepo.findAll(condition);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("Some error occurred");
    }
  } catch (err) {
    res.status(404).send({
      message: err.message || "Some error occurred .",
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;

    const datas = await orderRepo.findOne(id);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(400).send("Some error occurred");
    }
  } catch (err) {
    res.status(404).send({ message: "Error id=" + err });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const datas = await orderRepo.update(id, req);
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

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;

    const datas = await orderRepo.delete(id);
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
