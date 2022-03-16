const express = require("express");
const trackerController = require("../controllers/trackerController");

const router = express.Router();

// /api/trackers/........

router.get("/index", trackerController.tracker_index);
router.get("/:id", trackerController.tracker_details);
router.put("/update/:id", trackerController.tracker_update);
router.post("/new", trackerController.tracker_new);
router.delete("/delete/:id", trackerController.tracker_delete);

module.exports = router;
