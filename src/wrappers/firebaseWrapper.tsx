import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRABASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRABASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRABASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRABASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRABASE_APP_ID,
  measurementId: process.env.REACT_APP_FIRABASE_MEASUREMENT_ID
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore(firebaseApp)
const analytics = getAnalytics()

export { auth, db, analytics }
export default firebaseApp
