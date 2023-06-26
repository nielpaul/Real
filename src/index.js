import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './LandingPage';
import Investors from './Investors';
import Podcasters from './Podcasters';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
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

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const env = dotenv.config();

/* CONFIGURATIONS */
const app = express();
app.use(express.json());
app.use(cors());

submitData.addEventListener('click', (e) => {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var isPodcaster = document.getElementById("isPodcaster").value;

    addDoc(collection(firestore, "users"), {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      isPodcaster: isPodcaster
    });

  alert('Added to the waitlist!');


});

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

