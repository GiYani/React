import firebase from "firebase/app";
import 'firebase/firestore'

const app= firebase.initializeApp ({
    apiKey: "AIzaSyAeZJipuWfREYhDPghlwQKDXM9JQv2jz2Q",
    authDomain: "prueba-coderouse.firebaseapp.com",
    projectId: "prueba-coderouse",
    storageBucket: "prueba-coderouse.appspot.com",
    messagingSenderId: "316171909584",
    appId: "1:316171909584:web:3d5aa8b7b8d70d3c56e1d5"
});

export const getFirebase =()=>{
     return app
    };
export const getFirestore=()=>{
    return firebase.firestore(app)
};