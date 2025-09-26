import {
  init_zone_testing
} from "./chunk-3RPILKDD.js";
import {
  LoaderComponent,
  init_loader_component
} from "./chunk-RTH5DLGH.js";
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet,
  init_router
} from "./chunk-TVKKCGZO.js";
import "./chunk-DNNWWJOP.js";
import {
  CommonModule,
  init_common
} from "./chunk-24PN7RHC.js";
import "./chunk-YYFSG6UY.js";
import "./chunk-2O7PQ6HR.js";
import {
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
  init_core,
  init_testing,
  init_tslib_es6,
  signal
} from "./chunk-QKEEE2EE.js";

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = '<app-loader-component *ngIf="isLoading"></app-loader-component>\r\n<router-outlet/>';
  }
});

// angular:jit:style:src\app\app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.css"() {
    app_default2 = "/* src/app/app.css */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_common();
    init_core();
    init_router();
    init_loader_component();
    App = class App2 {
      router;
      title = signal("sfms-front");
      isLoading = false;
      constructor(router) {
        this.router = router;
        this.router.events.subscribe((event) => {
          if (event instanceof NavigationStart) {
            this.isLoading = true;
          } else if (event instanceof NavigationEnd) {
            this.isLoading = false;
          }
        });
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [RouterOutlet, CommonModule, LoaderComponent],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_zone_testing();
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, sfms-front");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
