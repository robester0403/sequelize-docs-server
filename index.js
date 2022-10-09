const { Sequelize } = require("sequelize");

const main = async () => {
  const sequelize = new Sequelize("sequelize-server", "postgres", "123456", {
    host: "localhost",
    dialect: "postgres",
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
