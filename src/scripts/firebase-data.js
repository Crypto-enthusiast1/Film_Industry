import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config.js';

export async function loadProjectsData() {
   const q = query(
      collection(db, 'ProjectsData'),
      orderBy('order', 'asc')
   );
   const snapshot = await getDocs(q);
   return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
