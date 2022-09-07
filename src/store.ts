import { onAuthStateChanged, User } from 'firebase/auth'
import { reactive } from 'vue'
import firebase from './firebaseconfig'

interface Store {
    currentUser?: User,
    getCurrentUser: () => User | undefined
}


const store : Store = reactive({
    currentUser: undefined,
    getCurrentUser() {
        return this.currentUser
    }

})


// state listeners
onAuthStateChanged(firebase.auth, (user) => {
    if (user) {
        store.currentUser = user
    } else {
        store.currentUser = undefined
    }
})

export default store