import { Injectable, WritableSignal, signal } from '@angular/core';
import {
  collection,
  query,
  onSnapshot,
  QuerySnapshot,
  DocumentData,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { environment } from "src/environments/environment";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = environment.firebaseConfig;
const collectionName = environment.collectionName;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  public allData$: WritableSignal<any> = signal([]);
  public isMobile$: WritableSignal<boolean> = signal(false);

  getDataFromCollection() {
    const col = collection(db, collectionName);
    const q = query(col);
    onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
      const allData: any = [];
      snapshot.forEach((doc: any) => {
        const feedback = doc?.data();
        feedback.id = doc?.id;
        allData.push(feedback);
      });
      console.log(allData);
      this.allData$.set(allData);
    });
  }

  async addDocToCollection(data: any) {
    return await addDoc(collection(db, collectionName), data);
  }


  async deleteDocument(id: string) {
    return await deleteDoc(doc(db, collectionName, id));

  }

}
