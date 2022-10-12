const db = require("../models");
const Object = db.object; // object model
// const Op = db.Sequelize.Op;

const findAllObject = async (_, res) => {
  await Object.findAll().then((data) => {
    res.status(200).send(data);
  });
};

const createObject = async (req, res) => {
  const { title, description } = req.body;

  try {
    await Object.create({ title, description }).then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    console.error(error);
  }
};

// this will be a post route used by devs
const createManyObjects = async (req, res) => {
  try {
    await Object.bulkCreate(req.body);
    res.status(200).send(req.body);
  } catch (error) {
    res.status(404).json({ message: error.message, error: error });
  }
};

const deleteObject = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    res.status(400).json({ error: "Please provide an id" });
  }

  try {
    await Object.destroy({
      where: {
        id: id,
      },
    }).then(res.status(200).json({ message: "you did it" })); // dont understand the use of the redirect here
  } catch (error) {
    res.status(500).json({ error: `Id not deleted from the DB` });
  }
  return null;
};

const updateObject = async (req, res) => {
  const { id, title, description } = req.body;
  try {
    await Object.update(
      { title, description },
      {
        where: {
          id: id,
        },
      }
    ).then((data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to update object with id: ${id}.` });
  }
};

exports.findAllObject = findAllObject;
exports.createObject = createObject;
exports.createManyObjects = createManyObjects;
exports.deleteObject = deleteObject;
exports.updateObject = updateObject;
