const { auth } = require("../config/db");
const {
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
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
// const monitor_AuthState= async (req,res,next)=>{
//   onAuthStateChanged(auth, user=>{

//   })
// }
const user_logout = async(req,res,next)=>{

}

module.exports = {
  user_register,
  user_login,
};
