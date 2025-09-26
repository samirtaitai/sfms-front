import {
  Customer,
  init_customer
} from "./chunk-H4Q5FXLQ.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-ESUJ3PT7.js";
import {
  NavBar,
  init_nav_bar
} from "./chunk-3BJJBAUP.js";
import "./chunk-4TNG36QQ.js";
import {
  RouterLink,
  init_router
} from "./chunk-TVKKCGZO.js";
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

// angular:jit:template:src\app\features\organization-entity\organization-entities-page\organization-entities.html
var organization_entities_default;
var init_organization_entities = __esm({
  "angular:jit:template:src\\app\\features\\organization-entity\\organization-entities-page\\organization-entities.html"() {
    organization_entities_default = '<app-nav-bar></app-nav-bar>\r\n<button matIconButton class="user-button" aria-label="Back History button" (click)="backHistory()">\r\n    <mat-icon>keyboard_backspace</mat-icon>\r\n</button>\r\n<div style=" padding: 100px;">\r\n    <mat-card class="actions-card">\r\n        <mat-card-header>\r\n            <mat-card-subtitle class="sub-tittle">All OE`S Table</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-actions>\r\n            <button style="margin-left: auto;" matButton routerLink="/create-org-entity">Create New OE</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n    <table id="customers">\r\n        <tr>\r\n            <th>Name</th>\r\n            <th>Code</th>\r\n        </tr>\r\n\r\n        @for (oe of oes; track oe) {\r\n        <tr>\r\n            <td>{{oe.name}}</td>\r\n            <td>{{oe.code}}</td>\r\n        </tr>\r\n        }\r\n    </table>\r\n</div>';
  }
});

// angular:jit:style:src\app\features\organization-entity\organization-entities-page\organization-entities.css
var organization_entities_default2;
var init_organization_entities2 = __esm({
  "angular:jit:style:src\\app\\features\\organization-entity\\organization-entities-page\\organization-entities.css"() {
    organization_entities_default2 = "/* src/app/features/organization-entity/organization-entities-page/organization-entities.css */\n#customers {\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  background-color: white;\n  margin-top: 10px;\n}\n#customers td,\n#customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n#customers tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n#customers tr:hover {\n  background-color: #ddd;\n}\n#customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #006192;\n  color: white;\n}\n.actions-card {\n  border: none;\n  border-radius: 2px;\n  background-color: white;\n  box-shadow: none;\n}\n/*# sourceMappingURL=organization-entities.css.map */\n";
  }
});

// src/app/features/organization-entity/organization-entities-page/organization-entities.ts
var OrganizationEntities;
var init_organization_entities3 = __esm({
  "src/app/features/organization-entity/organization-entities-page/organization-entities.ts"() {
    "use strict";
    init_tslib_es6();
    init_organization_entities();
    init_organization_entities2();
    init_core();
    init_nav_bar();
    init_card();
    init_button();
    init_icon();
    init_router();
    init_customer();
    OrganizationEntities = class OrganizationEntities2 {
      customer;
      oes = [];
      constructor(customer) {
        this.customer = customer;
        this.oes = this.customer.getAllOe();
      }
      backHistory() {
        history.back();
      }
      static ctorParameters = () => [
        { type: Customer }
      ];
    };
    OrganizationEntities = __decorate([
      Component({
        selector: "app-organization-entities",
        imports: [NavBar, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
        standalone: true,
        template: organization_entities_default,
        styles: [organization_entities_default2]
      })
    ], OrganizationEntities);
  }
});

// src/app/features/organization-entity/organization-entities-page/organization-entities.spec.ts
var require_organization_entities_spec = __commonJS({
  "src/app/features/organization-entity/organization-entities-page/organization-entities.spec.ts"(exports) {
    init_testing();
    init_organization_entities3();
    describe("OrganizationEntities", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [OrganizationEntities]
        }).compileComponents();
        fixture = TestBed.createComponent(OrganizationEntities);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_organization_entities_spec();
//# sourceMappingURL=spec-organization-entities.spec.js.map
