const express = require("express");
const authenticate = require("../middleware/authenticate");

const router = express.Router();
const controller = require("./contactController");

router.use(authenticate);
router.post("/api/contact", controller.create);
router.get("/api/contact/:id", controller.get);
router.put("/api/contact/:id", controller.update);
router.delete("/api/contact/:id", controller.remove);
router.get("/api/contact", controller.search);

module.exports = router;
