import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react';
import app from './../../../dist/Fireabase/Firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const registerWithForm = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithForm = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        registerWithForm,
        loginWithForm,
        signWithGoogle,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;