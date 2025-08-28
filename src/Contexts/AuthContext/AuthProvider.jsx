import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


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
        return signInWithPopup(auth, provider) 
    }



    const authInfo = {
        loading,
        user,
        createUser,
        googleLogin
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;