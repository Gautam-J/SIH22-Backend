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
    res.send("All trackers.");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  tracker_index,
  tracker_details,
};
