const db = require("../models");
const Object = db.object;
// const Op = db.Sequelize.Op;

const create = async (req, res) => {
  const { title, description } = req.body;

  try {
    Object.create({ title, description }).then((data) => {
      res.send(data);
    });
  } catch (error) {
    console.error(error);
  }
};

exports.create = create;
