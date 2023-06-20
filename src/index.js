import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './LandingPage';
import Investors from './Investors';
import Podcasters from './Podcasters';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, res, child, push, update } from "firebase/database";
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf9f-UBY2N1G_jYqiiheCJPZ__4Ih6Z1s",
  authDomain: "lollywest-abfa6.firebaseapp.com",
  databaseURL: "https://lollywest-abfa6-default-rtdb.firebaseio.com",
  projectId: "lollywest-abfa6",
  storageBucket: "lollywest-abfa6.appspot.com",
  messagingSenderId: "773997592011",
  appId: "1:773997592011:web:28bdd397dec30c44a48a4e",
  measurementId: "G-LZXP6QF51X"
};

const env = dotenv.config()

/* CONFIGURATIONS */
const app = express();
app.use(express.json());
app.use(cors());

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);


document.getElementById('waitlist-form').addEventListener('submit', saveUser);

function saveUser(name, email, phoneNumber, isPodcaster) {
  e.preventDefault();

  /* Throw error if user does not fill out all of the fields */
  if (!name || !email || !phoneNumber) {
    res.status(422).json({ error: "Please complete all of the necessary fields." })
  }

  var newUser = newUser.push();
  newUser.set(ref(db, 'users/' +userID), {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    isPodcaster: document.getElementById("isPodcaster").value,
  });
  alert("Welcome to Lollywest")
  document.getElementById('waitlist-form').reset();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Podcasters" element={<Podcasters />} />
      <Route path="/Investors" element={<Investors />} />
    </Routes>
  </Router>
);

