import {auth} from '../main'
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const googleProvider = new GoogleAuthProvider()

export function authenticateWithGoogle() {
    signInWithPopup(auth, googleProvider).then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        const user = result.user
    }).catch(error => {
        console.log(error)
        console.error('Something went wrong with google authentication.')
    })
}