const { db } = require("../config/db");
const { getDocs, collection } = require("firebase/firestore");

const tracker_details = async (req, res) => {
  try {
    res.send(`Tracker details for ${req.params.id}`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const tracker_index = async (req, res) => {
  try {
    const colRef = collection(db, "trackers");
    const trackerSnapshot = await getDocs(colRef);
    const trackerList = trackerSnapshot.docs.map((doc) => doc.data());
    res.send(trackerList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  tracker_index,
  tracker_details,
};
