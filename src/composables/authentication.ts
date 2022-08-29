import { auth } from '../main'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const googleProvider = new GoogleAuthProvider()

export async function authenticateWithGoogle() {
    try {
        const result = await signInWithPopup(auth, googleProvider)
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        const user = result.user
        return true
    }
    catch {
        console.error('Something went wrong with google authentication.')
        return false
    }
}   