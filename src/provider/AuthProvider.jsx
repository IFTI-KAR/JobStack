
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext=createContext()
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
const auth=getAuth(app);

const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    
        const [user,setUser]=useState(null);
        const [loading,setLoading]=useState(true)
      //  console.log(user)
        const createUser=(email,password)=>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password);
        }

        const signIn=(email,password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
        }
        const updateUser=(updatedDate)=>{
            return updateProfile(auth.currentUser,updatedDate)
        }
        const googleSignin=()=>{
            setLoading(true)
            return signInWithPopup(auth,googleProvider)
        }


        const logOut=()=>{
            return signOut(auth);
        }
        useEffect(()=>{
            const unsUbscribe=onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser)
                setLoading(false)

            });
            return ()=>{
                unsUbscribe();
            }
        },[])

        const authData={
            user,
            setUser,
            createUser,
            logOut,
            signIn,
            loading,
            setLoading,
            updateUser,
            googleSignin,
        }
               
        
      return (      <AuthContext value={authData}>
        {children}

      </AuthContext>  
    );
};

export default AuthProvider;