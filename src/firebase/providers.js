import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        const {displayName, email, photoURL , uid} = result.user
        return {
            // Aprobacion de que se recibio la info
            ok: true,
            //user info
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const singInWithEmailAndPassword = async({email, displayName, password}) => {
        try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL} = resp.user
        await updateProfile(FirebaseAuth.currentUser, { displayName})
        return {
            // Aprobacion de que se recibio la info
            ok: true,
            //user info
            email,
            photoURL,
            uid
        }
    } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const loginWithEmailAndPassword =  async({email, password}) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL, displayName} = resp.user
        return {
            // Aprobacion de que se recibio la info
            ok: true,
            //user info
            email,
            photoURL,
            uid,
            displayName
        }
    } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
