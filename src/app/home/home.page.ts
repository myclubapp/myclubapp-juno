import { Component } from '@angular/core';
import { signIn, signOut, authSubscribe, User } from "@junobuild/core";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: User = <User>{};

  constructor() {
    authSubscribe((user: User | null) => {
      console.log("User:", user);
      this.user = user as User;
    });

  }

 async signInToJuno() {
    await signIn();
  }

async signOutToJuno() {
  await signOut();
}

}
