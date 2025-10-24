// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase config for GoFast
const firebaseConfig = {
  apiKey: "AIzaSyCjpoH763y2GH4VDc181IUBaZHqE_ryZ1c",
  authDomain: "gofast-a5f94.firebaseapp.com",
  projectId: "gofast-a5f94",
  storageBucket: "gofast-a5f94.firebasestorage.app",
  messagingSenderId: "500941094498",
  appId: "1:500941094498:web:4008d94b89a9e3a4889b3b",
  measurementId: "G-CQ0GJCJLXX"
};

// Initialize Firebase with error handling
let app, auth, analytics;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  analytics = getAnalytics(app);
  console.log("✅ Firebase initialized successfully");
} catch (error) {
  console.error("❌ Firebase initialization error:", error);
  // Fallback initialization
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
}

// Handle IndexedDB errors globally
window.addEventListener('error', (event) => {
  if (event.error && event.error.message && event.error.message.includes('IndexedDB')) {
    console.warn("⚠️ IndexedDB error detected, this is usually harmless:", event.error.message);
    event.preventDefault();
  }
});

export { app, auth, analytics };

