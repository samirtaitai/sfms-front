import {
  MatButtonToggleModule,
  init_button_toggle
} from "./chunk-B5YPRY7J.js";
import "./chunk-5BEYDXTT.js";
import {
  MatInputModule,
  init_input
} from "./chunk-ITGCIDAD.js";
import "./chunk-IMWK5FLG.js";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-G5Q5MP62.js";
import {
  Customer,
  init_customer
} from "./chunk-H4Q5FXLQ.js";
import {
  MatButton,
  init_button
} from "./chunk-ESUJ3PT7.js";
import {
  NavBar,
  init_nav_bar
} from "./chunk-3BJJBAUP.js";
import "./chunk-4TNG36QQ.js";
import "./chunk-TVKKCGZO.js";
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

// angular:jit:template:src\app\features\customer\create-customer\create-customer.html
var create_customer_default;
var init_create_customer = __esm({
  "angular:jit:template:src\\app\\features\\customer\\create-customer\\create-customer.html"() {
    create_customer_default = '<app-nav-bar></app-nav-bar>\r\n\r\n<div class="page-container">\r\n    <mat-card class="application-card" appearance="outlined">\r\n        <mat-card-header>\r\n            <mat-icon mat-card-avatar>web</mat-icon>\r\n            <mat-card-title>Create Customer</mat-card-title>\r\n            <mat-card-subtitle>Create a new customer to the platform</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content style="padding: 20px; display:flex; flex-direction: column;">\r\n            <p>To create a new customer, please provide the following details:</p>\r\n            <form [formGroup]="customerFormGroup" style="padding: 20px; display:flex; flex-direction: column;">\r\n                <mat-form-field appearance="fill" class="full-width">\r\n                    <mat-label>Customer Name</mat-label>\r\n                    <input formControlName="name" matInput placeholder="Enter the customer name">\r\n                </mat-form-field>\r\n                <mat-form-field appearance="fill" class="full-width">\r\n                    <mat-label>Customer Description</mat-label>\r\n                    <input formControlName="description" matInput placeholder="Enter the customer descripton">\r\n                </mat-form-field>\r\n                <mat-button-toggle-group formControlName="type" [hideSingleSelectionIndicator]="false">\r\n                    <mat-button-toggle value="PRODUCT OWNER">Product owner</mat-button-toggle>\r\n                    <mat-button-toggle value="ORG ENTITY">Org Entity</mat-button-toggle>\r\n                </mat-button-toggle-group>\r\n            </form>\r\n                    <button matButton="filled" style="display: flex; margin-left: auto; border-radius: 5px; height: 25px;"\r\n            (click)="createCustomer()">\r\n            <mat-icon>post_add</mat-icon>\r\n            Add Flow\r\n        </button>\r\n        </mat-card-content>\r\n\r\n    </mat-card>\r\n</div>';
  }
});

// angular:jit:style:src\app\features\customer\create-customer\create-customer.css
var create_customer_default2;
var init_create_customer2 = __esm({
  "angular:jit:style:src\\app\\features\\customer\\create-customer\\create-customer.css"() {
    create_customer_default2 = "/* src/app/features/customer/create-customer/create-customer.css */\n.page-container {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n.application-card {\n  width: 420px;\n  color: #006192;\n  background-color: white;\n}\n/*# sourceMappingURL=create-customer.css.map */\n";
  }
});

// src/app/features/customer/create-customer/create-customer.ts
var CreateCustomer;
var init_create_customer3 = __esm({
  "src/app/features/customer/create-customer/create-customer.ts"() {
    "use strict";
    init_tslib_es6();
    init_create_customer();
    init_create_customer2();
    init_core();
    init_button();
    init_common();
    init_forms();
    init_button_toggle();
    init_input();
    init_nav_bar();
    init_card();
    init_icon();
    init_customer();
    CreateCustomer = class CreateCustomer2 {
      customerSrv;
      _formBuilder = inject(FormBuilder);
      customerFormGroup;
      backHistory() {
        history.back();
      }
      constructor(customerSrv) {
        this.customerSrv = customerSrv;
        this.customerFormGroup = this._formBuilder.group({
          name: ["", Validators.required],
          description: ["", Validators.required],
          type: ["", Validators.required]
        });
      }
      createCustomer() {
        const { name, description, type } = this.customerFormGroup.value;
        if (name && description && type) {
          this.customerSrv.setCustomerData(name, description, type);
          this.customerSrv.createCustomer();
          this.customerFormGroup.reset();
        }
      }
      static ctorParameters = () => [
        { type: Customer }
      ];
    };
    CreateCustomer = __decorate([
      Component({
        selector: "app-create-customer",
        imports: [
          CommonModule,
          ReactiveFormsModule,
          MatButtonToggleModule,
          MatInputModule,
          MatButton,
          NavBar,
          MatCard,
          MatCardModule,
          MatIconModule
        ],
        standalone: true,
        template: create_customer_default,
        styles: [create_customer_default2]
      })
    ], CreateCustomer);
  }
});

// src/app/features/customer/create-customer/create-customer.spec.ts
var require_create_customer_spec = __commonJS({
  "src/app/features/customer/create-customer/create-customer.spec.ts"(exports) {
    init_testing();
    init_create_customer3();
    describe("CreateCustomer", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [CreateCustomer]
        }).compileComponents();
        fixture = TestBed.createComponent(CreateCustomer);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_create_customer_spec();
//# sourceMappingURL=spec-create-customer.spec.js.map
