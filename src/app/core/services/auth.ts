import { inject, Injectable } from '@angular/core';
import { loginMock } from '../../../../__mocks__/login';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { INTERNAL_ROUTES } from '../../consts/routes';

class User {
  userName: string;
  rol: string;
  constructor(userName: string, rol: string) {
    this.userName = userName;
    this.rol = rol;
  }
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private router = inject(Router);
  user: any = {
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
    this.router.navigate([INTERNAL_ROUTES.LOGIN])
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
                this.router.navigate([INTERNAL_ROUTES.HOME]);
                break;
              case 'agent':
                this.router.navigate([INTERNAL_ROUTES.HOME]);
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
