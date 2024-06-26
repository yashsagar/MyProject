import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH_dM8hELuzofKqjF_mf3pxVk7z1pML5U",
  authDomain: "project-1-bff56.firebaseapp.com",
  projectId: "project-1-bff56",
  storageBucket: "project-1-bff56.appspot.com",
  messagingSenderId: "883016157459",
  appId: "1:883016157459:web:a73498cb994d0896f972e6",
};

initializeApp(firebaseConfig);
const db = getFirestore();

export const getData = async (collectionName) => {
  const collectionObj = collection(db, collectionName);
  const documentObj = getDocs(collectionObj);
  const data = [];
  await documentObj.then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      data.push({
        ...doc.data(),
        id: doc.id,
      });
    });
  });

  return data;
};
