import firebase from '../firebaseconfig'
import { onAuthStateChanged, User } from 'firebase/auth'
import { ref, set, update } from 'firebase/database'
import Profile from '../interfaces/Profile'
 
let storedUser: User | null = null

onAuthStateChanged(firebase.auth, (user) => {
    if (user) {
        storedUser = user
        console.log('logged in')
    } else {
        console.log('logged out')
    }
})

export const saveProfile = function(profile: Partial<Profile>) {
    if (storedUser == null) {
        throw 'unauthenticated'
    }
    const uid = storedUser.uid
    const dbRef = ref(firebase.database, `/users/${uid}/profile`)
    return update(dbRef, profile)
}