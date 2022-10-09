const { Sequelize } = require("sequelize"),
  express = require("express"),
  cors = require("cors");

const sequelize = new Sequelize("sequelize-server", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
});

const PORT = process.env.PORT || 8070;
const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api/object", require("./routes/objectRoutes"));

  try {
    await app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
      console.log("Happy coding.");
    });
  } catch (err) {
    console.log(`An error occurred while listening on ${PORT}: `, err);
  }
};

main();
