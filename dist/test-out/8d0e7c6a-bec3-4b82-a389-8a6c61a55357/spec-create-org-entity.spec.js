import {
  MatSelectModule,
  init_select
} from "./chunk-XDP6ZBFA.js";
import "./chunk-JZAMVFKW.js";
import {
  Customer,
  init_customer
} from "./chunk-H4Q5FXLQ.js";
import "./chunk-5BEYDXTT.js";
import {
  MatInputModule,
  init_input
} from "./chunk-ITGCIDAD.js";
import {
  NavBar,
  init_nav_bar
} from "./chunk-3BJJBAUP.js";
import "./chunk-4TNG36QQ.js";
import "./chunk-TVKKCGZO.js";
import "./chunk-ASAJABVR.js";
import "./chunk-IMWK5FLG.js";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-G5Q5MP62.js";
import {
  MatButton,
  init_button
} from "./chunk-ESUJ3PT7.js";
import {
  MatCard,
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
  init_tslib_es6,
  inject
} from "./chunk-QKEEE2EE.js";

// angular:jit:template:src\app\features\organization-entity\create-org-entity\create-org-entity.html
var create_org_entity_default;
var init_create_org_entity = __esm({
  "angular:jit:template:src\\app\\features\\organization-entity\\create-org-entity\\create-org-entity.html"() {
    create_org_entity_default = '<app-nav-bar></app-nav-bar>\r\n\r\n<div class="page-container">\r\n    <mat-card class="application-card" appearance="outlined">\r\n        <mat-card-header>\r\n            <mat-icon mat-card-avatar>web</mat-icon>\r\n            <mat-card-title>Create ORG Entity</mat-card-title>\r\n            <mat-card-subtitle>Create a new ORG Entity to the platform</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content style="padding: 20px; display:flex; flex-direction: column;">\r\n            <p>To create a new ORG Entity, please provide the following details:</p>\r\n            <form [formGroup]="oeFormGroup" style="padding: 20px; display:flex; flex-direction: column;">\r\n                <mat-form-field appearance="fill" class="full-width">\r\n                    <mat-label>ORG Entity Name</mat-label>\r\n                    <input formControlName="name" matInput placeholder="Enter the ORG Entity name">\r\n                </mat-form-field>\r\n                <mat-form-field appearance="fill" class="full-width">\r\n                    <mat-label>ORG Entity Code</mat-label>\r\n                    <input formControlName="code" matInput placeholder="Enter the ORG Entity code">\r\n                </mat-form-field>\r\n                <mat-form-field appearance="fill" class="full-width">\r\n                    <mat-label>ORG Entity debtor</mat-label>\r\n                    <input formControlName="debtor" matInput placeholder="Enter ORG Entity debtor">\r\n                </mat-form-field>\r\n            </form>\r\n            <button matButton="filled" style="display: flex; margin-left: auto; border-radius: 5px; height: 25px;"(click)="createOe()">\r\n                <mat-icon>post_add</mat-icon>\r\n                Add Flow\r\n            </button>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\features\organization-entity\create-org-entity\create-org-entity.css
var create_org_entity_default2;
var init_create_org_entity2 = __esm({
  "angular:jit:style:src\\app\\features\\organization-entity\\create-org-entity\\create-org-entity.css"() {
    create_org_entity_default2 = "/* src/app/features/organization-entity/create-org-entity/create-org-entity.css */\n.page-container {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n.application-card {\n  width: 420px;\n  color: #006192;\n  background-color: white;\n}\n/*# sourceMappingURL=create-org-entity.css.map */\n";
  }
});

// src/app/features/organization-entity/create-org-entity/create-org-entity.ts
var CreateOrgEntity;
var init_create_org_entity3 = __esm({
  "src/app/features/organization-entity/create-org-entity/create-org-entity.ts"() {
    "use strict";
    init_tslib_es6();
    init_create_org_entity();
    init_create_org_entity2();
    init_core();
    init_forms();
    init_card();
    init_select();
    init_icon();
    init_nav_bar();
    init_common();
    init_input();
    init_button();
    init_customer();
    CreateOrgEntity = class CreateOrgEntity2 {
      customerSrv;
      _formBuilder = inject(FormBuilder);
      oeFormGroup;
      constructor(customerSrv) {
        this.customerSrv = customerSrv;
        this.oeFormGroup = this._formBuilder.group({
          name: ["", Validators.required],
          code: ["", Validators.required],
          debtor: ["", Validators.required]
        });
      }
      createOe() {
        const { name, code, debtor } = this.oeFormGroup.value;
        if (name && code && debtor) {
          this.customerSrv.setOrgName(name);
          this.customerSrv.setOrgCode(code);
          this.customerSrv.setOrgDebtor(debtor);
          this.customerSrv.createOe();
          this.oeFormGroup.reset();
        }
      }
      static ctorParameters = () => [
        { type: Customer }
      ];
    };
    CreateOrgEntity = __decorate([
      Component({
        selector: "app-create-org-entity",
        imports: [
          CommonModule,
          MatCard,
          MatCardModule,
          MatSelectModule,
          ReactiveFormsModule,
          MatIconModule,
          NavBar,
          MatInputModule,
          MatButton
        ],
        template: create_org_entity_default,
        styles: [create_org_entity_default2]
      })
    ], CreateOrgEntity);
  }
});

// src/app/features/organization-entity/create-org-entity/create-org-entity.spec.ts
var require_create_org_entity_spec = __commonJS({
  "src/app/features/organization-entity/create-org-entity/create-org-entity.spec.ts"(exports) {
    init_testing();
    init_create_org_entity3();
    describe("CreateOrgEntity", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [CreateOrgEntity]
        }).compileComponents();
        fixture = TestBed.createComponent(CreateOrgEntity);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_create_org_entity_spec();
//# sourceMappingURL=spec-create-org-entity.spec.js.map
