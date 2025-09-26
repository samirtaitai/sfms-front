import {
  NavBar,
  init_nav_bar
} from "./chunk-NIMZMCZ2.js";
import "./chunk-4JPQHB6F.js";
import {
  RouterLink,
  init_router
} from "./chunk-UKFYJ4AP.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-4VD7SSGS.js";
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardSubtitle,
  init_card
} from "./chunk-JHPUAMGW.js";
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

// angular:jit:template:src\app\features\application\configured-applications\configured-applications.html
var configured_applications_default;
var init_configured_applications = __esm({
  "angular:jit:template:src\\app\\features\\application\\configured-applications\\configured-applications.html"() {
    configured_applications_default = '<app-nav-bar></app-nav-bar>\r\n\r\n<div class="page-container">\r\n    <h1>Configured Applications/Services</h1>\r\n\r\n    <div style=" padding: 100px;">\r\n        <mat-card class="actions-card">\r\n            <mat-card-header>\r\n                <mat-card-subtitle class="sub-tittle">All Applications Table</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-actions>\r\n                <button matButton class="dist-button" routerLink="/onboard-application">\r\n                    <mat-icon>cloud_upload</mat-icon>\r\n                    Onboard Application/Service\r\n                </button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n        <table id="customers">\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Description</th>\r\n            </tr>\r\n\r\n            @for (application of configuredApps; track application) {\r\n            <tr>\r\n                <td>{{application.name}}</td>\r\n                <td>{{application.description}}</td>\r\n            </tr>\r\n            }\r\n        </table>\r\n    </div>\r\n</div>';
  }
});

// angular:jit:style:src\app\features\application\configured-applications\configured-applications.css
var configured_applications_default2;
var init_configured_applications2 = __esm({
  "angular:jit:style:src\\app\\features\\application\\configured-applications\\configured-applications.css"() {
    configured_applications_default2 = "/* src/app/features/application/configured-applications/configured-applications.css */\n#customers {\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  background-color: white;\n  margin-top: 10px;\n}\n#customers td,\n#customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n#customers tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n#customers tr:hover {\n  background-color: #ddd;\n}\n#customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #006192;\n  color: white;\n}\n.actions-card {\n  border: none;\n  border-radius: 2px;\n  background-color: white;\n  box-shadow: none;\n}\n.dist-button {\n  display: flex;\n  justify-content: start;\n  margin-left: auto;\n}\n/*# sourceMappingURL=configured-applications.css.map */\n";
  }
});

// src/app/features/application/configured-applications/configured-applications.ts
var ConfiguredApplications;
var init_configured_applications3 = __esm({
  "src/app/features/application/configured-applications/configured-applications.ts"() {
    "use strict";
    init_tslib_es6();
    init_configured_applications();
    init_configured_applications2();
    init_core();
    init_nav_bar();
    init_card();
    init_icon();
    init_button();
    init_router();
    ConfiguredApplications = class ConfiguredApplications2 {
      configuredApps = [
        { name: "App One", description: "Description for App One" },
        { name: "App Two", description: "Description for App Two" },
        { name: "App Three", description: "Description for App Three" }
      ];
    };
    ConfiguredApplications = __decorate([
      Component({
        selector: "app-configured-applications",
        standalone: true,
        imports: [
          NavBar,
          MatCard,
          MatCardHeader,
          MatCardSubtitle,
          MatCardActions,
          MatIconModule,
          MatButtonModule,
          RouterLink
        ],
        template: configured_applications_default,
        styles: [configured_applications_default2]
      })
    ], ConfiguredApplications);
  }
});

// src/app/features/application/configured-applications/configured-applications.spec.ts
var require_configured_applications_spec = __commonJS({
  "src/app/features/application/configured-applications/configured-applications.spec.ts"(exports) {
    init_testing();
    init_configured_applications3();
    describe("ConfiguredApplications", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ConfiguredApplications]
        }).compileComponents();
        fixture = TestBed.createComponent(ConfiguredApplications);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_configured_applications_spec();
//# sourceMappingURL=spec-configured-applications.spec.js.map
