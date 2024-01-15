import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYlWaC4v4O5fXY8tsw-_6VxO-3TZjzla4',
  authDomain: 'jamshid-chat-c18ee.firebaseapp.com',
  projectId: 'jamshid-chat-c18ee',
  storageBucket: 'jamshid-chat-c18ee.appspot.com',
  messagingSenderId: '1006466782422',
  appId: '1:1006466782422:web:f8b043d5f128f56073e577'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db
