import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../login/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuth: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  login(user: User) {
    if (user.name === 'usuario' && user.password === '123456') {
      this.userAuth = true;

      this.showMenuEmitter.emit(true);

      this.router.navigate(['/']);
    } else {
      alert('Usuário ou senha incorretos')
      
      this.userAuth = false;

      this.showMenuEmitter.emit(false);
    }
  }

  userIsAuth() {
    return this.userAuth;
  }
}
