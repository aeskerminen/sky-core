import { initializeApp } from "firebase/app";
import { getDatabase, ref, update, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBnYWP06n84p_vLSQpUPYdIapnhyh2H9Zw",
  authDomain: "skm2022-3667a.firebaseapp.com",
  projectId: "skm2022-3667a",
  storageBucket: "skm2022-3667a.appspot.com",
  messagingSenderId: "163232549889",
  appId: "1:163232549889:web:8bf0aa897e1f9eb01e4400",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);
export function writeNoteData(userId, selection, content, name) {
  update(ref(db, "users/" + userId + "/notes/" + selection), {
    selection: selection,
    content: content,
    name: name,
  });
}
export function deleteNoteData(userId, selection) {
  remove(ref(db, "users/" + userId + "/notes/" + selection), null);
}
