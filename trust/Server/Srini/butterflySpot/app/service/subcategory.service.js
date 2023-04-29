const repoSubcatergory = require("../repository/subcategory");
const db = require("../models");
const Subcategory_data = db.subcategory_data;

exports.create = async (req, res) => {
  try {
    const subcategory_datas = new Subcategory_data({
      category: req.body.category,
      subcategory: req.body.subcategory,
      image: req.body.image,
    });
    const datas = await repoSubcatergory.create(subcategory_datas);
    if (datas) {
      res.status(200).send(datas);
    } else {
      if (err) {
        res.status(404).send("data is null");
      }
    }
  } catch (err) {
    res.status(404).send("data is null");
  }
};

exports.findAll = async (req, res) => {
  try {
    const category = req.query.category;
    var condition = category ? { category: category } : { condition };
    const datas = await repoSubcatergory.findAll();
    if (datas) {
      res.status(200).send(datas);
    } else {
      if (err) {
        res.status(404).send("data is null");
      }
    }
  } catch (err) {
    res.status(404).send("data is null");
  }
};

exports.findOne = async (req, res) => {
  try {
    const category = req.params.category;

    const data = await repoSubcatergory.findOne(category);
    console.log(data);
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send("some error occured");
    }
  } catch (err) {
    res.status(404).send({ message: "Error id" });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;

    const datas = repoSubcatergory.update(id, req);
    if (datas) {
      res.status(200).send(datas);
    } else {
      res.status(404).send({ message: "Error id=" });
    }
  } catch (err) {
    res.status(404).send({ message: "Error id=" });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;

    await repoSubcatergory
      .delete(id)
      .then((resp) => res.send("successfully deleted"))
      .catch((err) => {
        res.send("could not delete");
      });
  } catch (err) {
    res.status(404).send({
      message: "Could not delete ",
    });
  }
};
