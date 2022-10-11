const db = require("../models");
const Object = db.object; // object model
// const Op = db.Sequelize.Op;

const findAllObject = async (_, res) => {
  await Object.findAll().then((data) => {
    res.send(data);
  });
};

const createObject = async (req, res) => {
  const { title, description } = req.body;

  try {
    await Object.create({ title, description }).then((data) => {
      res.send(data);
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteObject = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    res.status(404).json({ error: `We cannot find ${id} from the DB` });
  }

  try {
    await Object.destroy({
      where: {
        id: id,
      },
    }).then(res.status(200).json({ message: "you did it" })); // dont understand the use of the redirect here
  } catch (error) {
    return res.status(400).json({ error: `Id not deleted from the DB` });
  }
  return null;
};

exports.findAllObject = findAllObject;
exports.createObject = createObject;
exports.deleteObject = deleteObject;
