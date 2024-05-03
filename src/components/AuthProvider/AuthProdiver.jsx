import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
const provider = new GoogleAuthProvider();
const auth=getAuth(app)

export const  AuthContext = createContext(null);

const AuthProdiver = ({children}) => {
    const [user, setuser] = useState({});
    const [loading,setloading] = useState(false)

    //Usersignup----------->
    const UserSignup = (email, password) => {
        // setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //UserLOgin----------->
    const UserLogin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    //google login--------------->
    const UserGoogleLogin = () => {
        return signInWithPopup(auth, provider);
    }
    // Auth state change------------>
    useEffect(() => {
        onAuthStateChanged(auth, (current) => {
            setuser(current);
            setloading(false)
        })
    }, [])
    // console.log(user)
    //UserLogout------->
    const UserLogout = () => {
        setloading(true)
        return signOut(auth);
    }
    const Authinfo = {
        UserLogin,
        UserLogout,
        UserSignup,
        user,
        loading,
        UserGoogleLogin,
    }
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProdiver;