// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Firebase Config ของคุณ
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

console.log("Firebase Config:", firebaseConfig);


// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ฟังก์ชันดึงข้อมูลโปรเจกต์
async function getProjects() {
  const projectsCol = collection(db, "projects");
  const projectsSnapshot = await getDocs(projectsCol);
  return projectsSnapshot.docs.map((doc) => doc.data());
}

// เรียกใช้งานและแสดงที่ console ทันที
getProjects().then((data) => {
  console.log("📦 โปรเจกต์ทั้งหมดจาก Firestore:");
  console.log(data);
}).catch((err) => {
  console.error("❌ ดึงข้อมูลล้มเหลว:", err);
});

export { db, getProjects };
