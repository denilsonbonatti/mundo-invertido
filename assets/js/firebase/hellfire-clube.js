import app from './app.js'
import { addDoc, collection, getFirestore} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellFireClub(subscription){
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'hellfire-clube')
     const docRef = await addDoc(hellfireClubCollection, subscription)
     return docRef.id
}