const express = require("express");
const authenticate = require("../middleware/authenticate");

const router = express.Router();
const controller = require("./userController");

router.post("/api/users/register", controller.register);
router.post("/api/users/login", controller.login);

router.use(authenticate);
router.get("/api/users/current", controller.get);

module.exports = router;
