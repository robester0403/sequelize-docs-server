const db = require("../models");
const Object = db.object;
// const Op = db.Sequelize.Op;

const create = async (req, res, next) => {
  const { name, description } = req.body;

  const object = new Object({ name, description });
  try {
    await Object.create(req.body).then((data) => {
      res.status(201).send(data);
      return null;
    });
  } catch (err) {
    return console.log(err);
  }

  return null;
};

exports.create = create;
