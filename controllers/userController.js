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
    res.send("New application submitted.");
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
