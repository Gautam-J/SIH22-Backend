const express = require("express");
const trackerController = require("../controllers/trackerController");

const router = express.Router();

router.get("/index", trackerController.tracker_index);
router.get("/:id", trackerController.tracker_details);

module.exports = router;
