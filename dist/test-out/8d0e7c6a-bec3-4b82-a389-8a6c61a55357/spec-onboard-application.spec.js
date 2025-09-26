import {
  Stepper,
  init_stepper
} from "./chunk-KWONNRWY.js";
import "./chunk-XDP6ZBFA.js";
import "./chunk-CZ6R4KF7.js";
import "./chunk-WQSOWEIB.js";
import "./chunk-JZAMVFKW.js";
import "./chunk-DGGHHNHY.js";
import "./chunk-H4Q5FXLQ.js";
import "./chunk-B5YPRY7J.js";
import "./chunk-5BEYDXTT.js";
import "./chunk-ITGCIDAD.js";
import {
  NavBar,
  init_nav_bar
} from "./chunk-3BJJBAUP.js";
import "./chunk-4TNG36QQ.js";
import "./chunk-TVKKCGZO.js";
import "./chunk-ASAJABVR.js";
import "./chunk-IMWK5FLG.js";
import "./chunk-G5Q5MP62.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-ESUJ3PT7.js";
import "./chunk-VSIGYHHC.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-BGUUV7IW.js";
import "./chunk-IZ5VFSKW.js";
import "./chunk-DNNWWJOP.js";
import "./chunk-24PN7RHC.js";
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
