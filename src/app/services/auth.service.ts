import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private uid?: string;
  constructor(private router: Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        this.uid = uid;
        console.log('User is logged in', uid );
        router.navigate(['/home']);

      } else {
        this.uid = undefined;
      }
    });
  }
  registerUser(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User registered', { user })
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });

  }
  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({ user })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Invalid email or password')
      });
  }
  logOut(){
    const auth = getAuth();
    signOut(auth).then(()=>{
      console.log('Signed out');
    }).catch((error) => {
      console.log('Error while signing out',error)
    });
  }
  isAuthenticated(){
    return this.uid ? true :false
  }
  getUid(){
    return this.uid;
  }
}
