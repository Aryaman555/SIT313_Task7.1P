import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const app = initializeApp({
    apiKey: "AIzaSyDKLWb2DErH_OeM6Pj9SCW07xXK47Y984k",
    authDomain: "task7point1p-bb3f1.firebaseapp.com",
    projectId: "task7point1p-bb3f1",
    storageBucket: "task7point1p-bb3f1.appspot.com",
    messagingSenderId: "967032655652",
    appId: "1:967032655652:web:7a4c2949b9c1dd81ed2db1",
    measurementId: "G-45Y5JSX7T1"
});
export const auth = getAuth(app);
export default app;