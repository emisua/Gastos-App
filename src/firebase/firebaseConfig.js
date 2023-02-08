// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_REACT_APP_APIKEY,
	authDomain: import.meta.env.VITE_REACT_APP_AUTHDOMAIN,
	storageBucket: import.meta.env.VITE_REACT_APP_STORAGEBUCKET,
	messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGINGSENDERID,
	appId: import.meta.env.VITE_REACT_APP_APPID,
	measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENTID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth()
const db = getFirestore()

export { auth, db }
