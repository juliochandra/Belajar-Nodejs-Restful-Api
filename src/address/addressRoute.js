const express = require("express");
const authenticate = require("../middleware/authenticate");

const router = express.Router();
const controller = require("./addressContoller");

router.use(authenticate);
router.post("/api/contact/:contact_id/address", controller.create);
router.get("/api/contact/:contact_id/address", controller.get);
router.put("/api/contact/:contact_id/address/:id", controller.update);
router.delete("/api/contact/:contact_id/address/:id", controller.remove);
router.get("/api/contact/:contact_id/address/list", controller.list);

module.exports = router;
