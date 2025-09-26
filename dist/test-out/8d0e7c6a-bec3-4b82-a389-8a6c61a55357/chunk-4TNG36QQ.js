import {
  Router,
  init_router
} from "./chunk-TVKKCGZO.js";
import {
  Injectable,
  Subject,
  __async,
  __decorate,
  __esm,
  delay,
  init_core,
  init_esm,
  init_tslib_es6,
  inject,
  of
} from "./chunk-QKEEE2EE.js";

// __mocks__/login.ts
function loginMock(userName, password) {
  return __async(this, null, function* () {
    const filtredUsers = of(users.filter((user) => user.userName == userName && user.password == password)).pipe(delay(2e3));
    return filtredUsers;
  });
}
var users;
var init_login = __esm({
  "__mocks__/login.ts"() {
    "use strict";
    init_esm();
    users = [
      { userName: "admin", password: "admin", rol: "admin" },
      { userName: "user", password: "user", rol: "agent" }
    ];
  }
});

// src/app/core/models/User.ts
var User;
var init_User = __esm({
  "src/app/core/models/User.ts"() {
    "use strict";
    User = class {
      userName;
      rol;
      constructor(userName, rol) {
        this.userName = userName;
        this.rol = rol;
      }
    };
  }
});

// src/app/core/auth.ts
var Auth;
var init_auth = __esm({
  "src/app/core/auth.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_login();
    init_esm();
    init_router();
    init_User();
    Auth = class Auth2 {
      router = inject(Router);
      user = {
        userName: "",
        rol: ""
      };
      loadingLogin = new Subject();
      subscribeToLoading() {
        return this.loadingLogin.asObservable();
      }
      logOut() {
        this.user = {
          userName: "",
          rol: ""
        };
        this.router.navigate(["/login"]);
      }
      login(userName, password) {
        return __async(this, null, function* () {
          this.loadingLogin.next(true);
          (yield loginMock(userName, password)).subscribe({
            next: (response) => {
              if (response.length) {
                const { userName: userName2, rol } = response[0];
                this.user = new User(userName2, rol);
                switch (this.user.rol) {
                  case "admin":
                    this.router.navigate(["/admin-distributive"]);
                    break;
                  case "agent":
                    this.router.navigate(["/home"]);
                    break;
                  default:
                    break;
                }
              }
              this.loadingLogin.next(false);
            }
          });
        });
      }
    };
    Auth = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], Auth);
  }
});

export {
  Auth,
  init_auth
};
//# sourceMappingURL=chunk-4TNG36QQ.js.map
