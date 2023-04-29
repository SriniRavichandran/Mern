const repoCategory = require("../repository/category");

exports.create = async (req, res) => {
  try {
    const datas = await repoCategory.create(req.body.name);
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
    const datas = await repoCategory.findAll();
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
    const datas = await repoCategory.findOne(req.params.id);
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

exports.update = async (req, res) => {
  try {
    const datas = await repoCategory.update(req.params.id, req);
    if (datas) {
      res.status(200).send(datas);
    } else {
      throw new Error("Something went wrong");
      // res.status(404).send("data is null");
    }
  } catch (err) {
    // res.status(404).send("data is null");
  }
};

exports.delete = async (req, res) => {
  try {
    await repoCategory
      .delete(req.params.id)
      .then((res) => {
        res.send("okay");
      })
      .catch((err) => {
        res.send("not okay" + err.message);
      });
  } catch (err) {
    res.status(404).send("data is null");
  }
};
