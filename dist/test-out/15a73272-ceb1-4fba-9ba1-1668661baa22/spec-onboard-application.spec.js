import {
  Stepper,
  init_stepper
} from "./chunk-RURC7CGD.js";
import "./chunk-JXNEVLCH.js";
import "./chunk-AELSV2DK.js";
import "./chunk-R2YUVFDF.js";
import "./chunk-7RMIKX75.js";
import "./chunk-MN2YSSDC.js";
import "./chunk-GV6NZENR.js";
import "./chunk-JPPIB4DL.js";
import "./chunk-MZDFVJIN.js";
import "./chunk-YMHZWFAK.js";
import {
  NavBar,
  init_nav_bar
} from "./chunk-NIMZMCZ2.js";
import "./chunk-4JPQHB6F.js";
import "./chunk-UKFYJ4AP.js";
import "./chunk-SI744TBM.js";
import "./chunk-VJR5CB3Z.js";
import "./chunk-SQGN5GSA.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-4VD7SSGS.js";
import "./chunk-JHPUAMGW.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-SOPFOKX4.js";
import "./chunk-NNMCWHJ3.js";
import "./chunk-WKFFMUYD.js";
import "./chunk-ZKOOMT2W.js";
import "./chunk-VPQRC7O5.js";
import "./chunk-J54CSFRO.js";
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
} from "./chunk-MN7Z2XXH.js";

// angular:jit:template:src\app\features\application\onboard-application\onboard-application.html
var onboard_application_default;
var init_onboard_application = __esm({
  "angular:jit:template:src\\app\\features\\application\\onboard-application\\onboard-application.html"() {
    onboard_application_default = '<app-nav-bar></app-nav-bar>\r\n<button matIconButton class="user-button" aria-label="Back History button" (click)="backHistory()">\r\n    <mat-icon>keyboard_backspace</mat-icon>\r\n</button>\r\n<div class="page-container">\r\n\r\n    <section style="margin-left: auto; margin-right: auto; color: #006192;">\r\n        <div style="display: flex; justify-content: space-between; align-items: center; ">\r\n            <h3 style=" font-weight: 500; font-size: 22px;">Application/Service Onboarding</h3>\r\n        </div>\r\n    </section>\r\n    <app-stepper></app-stepper>\r\n</div>';
  }
});

// angular:jit:style:src\app\features\application\onboard-application\onboard-application.css
var onboard_application_default2;
var init_onboard_application2 = __esm({
  "angular:jit:style:src\\app\\features\\application\\onboard-application\\onboard-application.css"() {
    onboard_application_default2 = "/* src/app/features/application/onboard-application/onboard-application.css */\n/*# sourceMappingURL=onboard-application.css.map */\n";
  }
});

// src/app/features/application/onboard-application/onboard-application.ts
var OnboardApplication;
var init_onboard_application3 = __esm({
  "src/app/features/application/onboard-application/onboard-application.ts"() {
    "use strict";
    init_tslib_es6();
    init_onboard_application();
    init_onboard_application2();
    init_core();
    init_stepper();
    init_nav_bar();
    init_icon();
    init_button();
    OnboardApplication = class OnboardApplication2 {
      backHistory() {
        history.back();
      }
    };
    OnboardApplication = __decorate([
      Component({
        selector: "app-onboard-application",
        imports: [
          Stepper,
          NavBar,
          MatIconModule,
          MatButtonModule
        ],
        standalone: true,
        template: onboard_application_default,
        styles: [onboard_application_default2]
      })
    ], OnboardApplication);
  }
});

// src/app/features/application/onboard-application/onboard-application.spec.ts
var require_onboard_application_spec = __commonJS({
  "src/app/features/application/onboard-application/onboard-application.spec.ts"(exports) {
    init_testing();
    init_onboard_application3();
    describe("OnboardApplication", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [OnboardApplication]
        }).compileComponents();
        fixture = TestBed.createComponent(OnboardApplication);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_onboard_application_spec();
//# sourceMappingURL=spec-onboard-application.spec.js.map
