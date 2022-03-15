const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getAuth } = require("firebase/auth");
const config = require("config");

// get config from ./default.json
const firebaseConfig = {
  apiKey: config.get("apiKey"),
  authDomain: config.get("authDomain"),
  projectId: config.get("projectId"),
  storageBucket: config.get("storageBucket"),
  messagingSenderId: config.get("messagingSenderId"),
  appId: config.get("appId"),
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

module.exports = { db, auth };
