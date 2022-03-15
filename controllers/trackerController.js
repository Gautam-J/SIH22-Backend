const { db } = require("../config/db");
const {
  getDocs,
  getDoc,
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} = require("firebase/firestore");

const tracker_details = async (req, res) => {
  try {
    const { id } = req.params;
    const docRef = doc(db, `trackers/${id}`);
    const trackerSnapshot = await getDoc(docRef);
    const tracker = trackerSnapshot.data();
    res.send(tracker);
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

const tracker_update = async (req, res) => {
  try {
    const { id } = req.params;
    const docRef = doc(db, `trackers/${id}`);
    const { trackerStatus } = req.body;
    await updateDoc(docRef, { status: trackerStatus });
    res.send("Tracker updated");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const tracker_new = async (req, res) => {
  try {
    const { name, phone } = req.body;
    console.log(name, phone);
    const colRef = collection(db, "trackers");
    await addDoc(colRef, {
      name: name,
      phone: phone,
      status: "new",
      createdAt: serverTimestamp(),
    });
    res.send("New application created.");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  tracker_index,
  tracker_details,
  tracker_update,
  tracker_new,
};
