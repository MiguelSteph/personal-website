import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import firebase from "firebase";
import {LoggedUser} from "../../shared/models/logged-user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: firebase.User | null;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe(authState => {
      this.authState = authState;
    })
  }

  isAuthenticated(): boolean {
    return this.authState != null;
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.oAuthLogin(provider);
  }

  logout() {
    this.angularFireAuth.signOut().then(r => {});
  }

  get currentUser(): LoggedUser | null {
    if (this.authState == null) {
      return null;
    }
    return {
      displayName: this.authState.displayName,
      email: this.authState.email,
      pictureUrl: this.authState.photoURL
    };
  }

  private oAuthLogin(provider: any) {
    return this.angularFireAuth.signInWithPopup(provider)
  }
}
