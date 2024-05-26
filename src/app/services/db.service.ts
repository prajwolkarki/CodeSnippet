import { Injectable } from '@angular/core';
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Snippet } from './../models/snippet';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db = getFirestore();

  constructor(private authService: AuthService, private router: Router) {}

  async addSnippets(data: Snippet) {
    try {
      const uid = this.authService.getUid();
      if (!uid) {
        throw new Error('User not authenticated');
      }
      const docRef = await addDoc(collection(this.db, "snippets"), {
        ...data,
        by: uid
      });
      console.log("Document written with ID: ", docRef.id);
      this.router.navigate(['/home']);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert('Error while adding document');
    }
  }

  async getAllSnippets() {
    try {
      const snippets: any[] = [];
      const querySnapshot = await getDocs(collection(this.db, "snippets"));
      querySnapshot.forEach((doc) => {
        snippets.push({
          id: doc.id,
          ...doc.data()
        });
      });
      return snippets;
    } catch (e) {
      console.error("Error getting documents: ", e);
      alert('Error while fetching snippets');
      return [];
    }
  }

  async getSnippet(id: string) {
    try {
      const docRef = doc(this.db, "snippets", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        console.log("No such document!");
        return {
          id: 'not found',
          title: 'not found',
          code: 'not found',
        };
      }
    } catch (e) {
      console.error("Error getting document: ", e);
      alert('Error while fetching snippet');
      return {
        id: 'not found',
        title: 'not found',
        code: 'not found',
      };
    }
  }
}
