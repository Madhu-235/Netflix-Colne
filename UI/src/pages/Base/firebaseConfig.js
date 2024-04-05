// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const  handleChange = async(e)=>{
    
//     try{
// await create
//     }catch{

//     }
// }

// async function a(){
//  try{
//     await create
//  }catch{

//  }
// }
const firebaseConfig = {
  apiKey: "AIzaSyCEV66EWy0To4DttDSCCxIR96qxU52TtpE",
  authDomain: "netflix-react-18155.firebaseapp.com",
  projectId: "netflix-react-18155",
  storageBucket: "netflix-react-18155.appspot.com",
  messagingSenderId: "1058835599672",
  appId: "1:1058835599672:web:c82f68902c2ab87087b1cd",
  measurementId: "G-K4RF0LYR34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAuth(app);
export const  firebaseAuth=getAuth(app);