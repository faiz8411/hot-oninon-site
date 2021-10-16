import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const iniatializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default iniatializeAuthentication