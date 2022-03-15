const express = require("express");
const trackerController = require("../controllers/trackerController");

const router = express.Router();

router.get("/index", trackerController.tracker_index);
router.get("/:id", trackerController.tracker_details);
router.put("/update/:id", trackerController.tracker_update);

module.exports = router;
