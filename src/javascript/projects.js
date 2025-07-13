// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Firebase Config ของคุณ
const firebaseConfig = {
  apiKey: "AIzaSyBamuowbj549lW8Q-gEEyWX5kibHLYFPWc",
  authDomain: "projects-b3f73.firebaseapp.com",
  projectId: "projects-b3f73",
  storageBucket: "projects-b3f73.firebasestorage.app",
  messagingSenderId: "513883546274",
  appId: "1:513883546274:web:a6b23c3b739b69d34c2dfb",
  measurementId: "G-PZEKYVC1QG",
};

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
