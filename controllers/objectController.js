const Object = require("../models/Object");

const create = async (req, res, next) => {
  const { name, description } = req.body;

  const object = new Object({ name, description });
  try {
    await Object.create(req.body);
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ message: "New object created.", object });
};

exports.create = create;
