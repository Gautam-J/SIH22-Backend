const { auth } = require("../config/db");
const {
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier,
} = require("firebase/auth");

const user_login = async (req, res) => {
  try {
    const { loginEmail, loginPass } = req.body;
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPass
    );
    console.log(userCredentials.user);
    res.send("User logged in.");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const user_register = async (req, res) => {
  try {
    const { loginEmail, loginPass } = req.body;
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      loginEmail,
      loginPass
    );
    console.log(userCredentials.user);
    res.send("New user registered.");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const logout = async (req, res, next) => {
  try {
    await signOut(auth);
    console.log("User successfully logged out");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Logout error");
  }
  res.end();
};

const monitor_AuthState = async (req, res, next) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.displayName);
    } else {
      console.log("No user logged in");
    }
    res.end();
  });
};

const phoneSignIn = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = {
  user_register,
  user_login,
  logout,
  monitor_AuthState,
  phoneSignIn,
};
