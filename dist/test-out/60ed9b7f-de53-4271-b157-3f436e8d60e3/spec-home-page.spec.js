import {
  NavBar,
  init_nav_bar
} from "./chunk-3BJJBAUP.js";
import "./chunk-4TNG36QQ.js";
import "./chunk-TVKKCGZO.js";
import {
  MatCardModule,
  init_card
} from "./chunk-VSIGYHHC.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-BGUUV7IW.js";
import "./chunk-IZ5VFSKW.js";
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
  init_tslib_es6
} from "./chunk-QKEEE2EE.js";

// angular:jit:template:src\app\pages\home-page\home-page.html
var home_page_default;
var init_home_page = __esm({
  "angular:jit:template:src\\app\\pages\\home-page\\home-page.html"() {
    home_page_default = '<div style="min-width: 100%; min-height: 100%; display: flex; flex-direction: column; position: relative;">\r\n<app-nav-bar></app-nav-bar>\r\n\r\n<mat-card class="presentation-card" appearance="outlined">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class="example-header-image"></div>\r\n    <mat-card-title class="tittle">SFMS</mat-card-title>\r\n    <mat-card-subtitle class="sub-tittle">Protencting Today, Securing Tomorrow...</mat-card-subtitle>\r\n  </mat-card-header>\r\n</mat-card>\r\n\r\n<mat-icon class="icon">security</mat-icon>\r\n</div>';
  }
});

// angular:jit:style:src\app\pages\home-page\home-page.css
var home_page_default2;
var init_home_page2 = __esm({
  "angular:jit:style:src\\app\\pages\\home-page\\home-page.css"() {
    home_page_default2 = "/* src/app/pages/home-page/home-page.css */\n.presentation-card {\n  width: 500px;\n  margin: auto;\n  border: none;\n  border-radius: 2px;\n  padding: 20px;\n}\n.tittle {\n  font-size: 50px;\n  font-weight: 400;\n  font-family:\n    Verdana,\n    Geneva,\n    Tahoma,\n    sans-serif;\n  color: #006192;\n}\n.sub-tittle {\n  color: #006192;\n}\n.icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 200px;\n  width: 200px;\n  height: 200px;\n  z-index: 0;\n  color: #00619222;\n}\n/*# sourceMappingURL=home-page.css.map */\n";
  }
});

// src/app/pages/home-page/home-page.ts
var HomePage;
var init_home_page3 = __esm({
  "src/app/pages/home-page/home-page.ts"() {
    "use strict";
    init_tslib_es6();
    init_home_page();
    init_home_page2();
    init_core();
    init_nav_bar();
    init_common();
    init_card();
    init_icon();
    HomePage = class HomePage2 {
    };
    HomePage = __decorate([
      Component({
        selector: "app-home-page",
        imports: [CommonModule, NavBar, MatCardModule, MatIconModule],
        standalone: true,
        template: home_page_default,
        styles: [home_page_default2]
      })
    ], HomePage);
  }
});

// src/app/pages/home-page/home-page.spec.ts
var require_home_page_spec = __commonJS({
  "src/app/pages/home-page/home-page.spec.ts"(exports) {
    init_testing();
    init_home_page3();
    describe("HomePage", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [HomePage]
        }).compileComponents();
        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_page_spec();
//# sourceMappingURL=spec-home-page.spec.js.map
