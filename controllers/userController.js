const { collection, addDoc, serverTimestamp } = require("firebase/firestore");
const { db } = require("../config/db");

const user_login = async (req, res) => {
  try {
    res.send("User logged in.");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const user_register = async (req, res) => {
  try {
    res.send("New user registered.");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const new_application = async (req, res) => {
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
  user_register,
  user_login,
  new_application,
};
