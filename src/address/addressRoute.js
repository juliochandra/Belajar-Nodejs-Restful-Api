const express = require("express");
const authenticate = require("../middleware/authenticate");

const router = express.Router();
const controller = require("./addressContoller");

router.use(authenticate);


module.exports = router;
