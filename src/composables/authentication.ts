import firebase from '../firebaseconfig'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const googleProvider = new GoogleAuthProvider()

export async function authenticateWithGoogle() {
    try {
        return await signInWithPopup(firebase.auth, googleProvider)
    }
    catch {
        throw 'authenticationError'
    }
}   