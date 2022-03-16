const { auth, db } = require("../config/db");
const {
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} = require("firebase/auth");

const user_login = async (req, res) => {
  try {
    const { loginEmail, loginPass } = req.body;
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPass
    );
    console.log(userCredentials.user.email);
    res.send("User logged in.");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const user_register = async (req, res) => {
  try {
    const { loginEmail,   loginPass } = req.body;
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

const monitor_AuthState = async (req, res, next) => {
  onAuthStateChanged(auth, (user) => {
    if(user){
      console.log(user.displayName);
    }
    else{
      console.log('No user logged in');
    }
  });
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
const aadhar_auth = async (req, res) => {
  try {
    const { aadhaar_no, mobile_no, name } = req.body;
    
    const aadharRef = collection(db, "aadhaar");
    const q = query(aadharRef, where("aadhaar_number", "==", aadhaar_no));
    const querySnapshot = await getDocs(q);
    res.send("Aadhar Verified!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  user_register,
  user_login,
  logout,
  monitor_AuthState
};
