import { inject, Injectable } from '@angular/core';
import { User } from '../models/User';
import { loginMock } from '../../../../__mocks__/login'
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private router = inject(Router);
  user: User = {
    userName: '',
    rol: ''
  };
  loadingLogin = new Subject<boolean>();

  subscribeToLoading(): Observable<boolean> {
    return this.loadingLogin.asObservable();
  }

  logOut() {
    this.user = {
      userName: '',
      rol: ''
    };
    this.router.navigate(['/login'])
  }

  async login(userName: string, password: string) {
    this.loadingLogin.next(true);
    (await loginMock(userName, password)).subscribe(
      {
        next: (response) => {
          if (response.length) {
            const { userName, rol } = response[0];
            this.user = new User(userName, rol);
            switch (this.user.rol) {
              case 'admin':
                this.router.navigate(['/administrator']);
                break;
              case 'agent':
                this.router.navigate(['/home']);
                break;
              default:
                break;
            }
          }
          this.loadingLogin.next(false);
        }
      }
    )

  }
}
