module.exports = (sequelize, Sequelize) => {
  const Object = sequelize.define("object", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  return Object;
};
