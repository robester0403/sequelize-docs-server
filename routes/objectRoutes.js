const express = require("express");
const objectController = require("../controllers/objectController");

const router = express.Router();

router.post("/", objectController.create);

module.exports = router;
