import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    // State Manage
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // user register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Google Login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider) 
    }
    // Login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUSer) => {
            setUser(currentUSer);
            console.log(currentUSer)
            setLoading(false);
        })
        return unSubscribe;
    }, [])

    // UserProfile Update
    const profileUpdate = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    // Logout user
    const logOut = () => {
        return signOut(auth)
    }



    const authInfo = {
        loading,
        user,
        createUser,
        googleLogin,
        signIn,
        profileUpdate,
        logOut
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;