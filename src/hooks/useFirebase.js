import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import iniatializeAuthentication from "../Firebase/firebase.init";
iniatializeAuthentication()

const useFirebase = () => {
    const googlProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const auth = getAuth()
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googlProvider)

    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            }
        })
    }, [])
    return {
        user,
        signInUsingGoogle,
        logOut

    }
}
export default useFirebase