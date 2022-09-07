import firebase from '../firebaseconfig'
import { User } from 'firebase/auth'
import { ref, update } from 'firebase/database'
import Profile from '../interfaces/Profile'
 
export const saveProfile = function(user: User, profile: Partial<Profile>) {
    const uid = user.uid
    const dbRef = ref(firebase.database, `/users/${uid}/profile`)
    return update(dbRef, profile)
}