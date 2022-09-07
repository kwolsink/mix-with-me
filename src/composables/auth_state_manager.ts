import firebase from "../firebaseconfig";
import { onAuthStateChanged, User } from "firebase/auth";

export const getAuthStateManager = function() {
    let usr: User | null = null
    onAuthStateChanged(firebase.auth, (user) => {
        usr = user
    })

    return {
        getCurrentUser() {
            return usr
        }
    }
}