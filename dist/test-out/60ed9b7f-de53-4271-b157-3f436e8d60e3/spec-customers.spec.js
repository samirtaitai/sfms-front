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

// angular:jit:template:src\app\features\customer\customers\customers.html
var customers_default;
var init_customers = __esm({
  "angular:jit:template:src\\app\\features\\customer\\customers\\customers.html"() {
    customers_default = '<app-nav-bar></app-nav-bar>\r\n<button matIconButton class="user-button" aria-label="Back History button" (click)="backHistory()">\r\n    <mat-icon>keyboard_backspace</mat-icon>\r\n</button>\r\n<div style=" padding: 100px;">\r\n    <mat-card class="actions-card">\r\n        <mat-card-header>\r\n            <mat-card-subtitle class="sub-tittle">All Customers Table</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button style="margin-left: auto;" matButton routerLink="/create-customer">Create New Customer</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n    <table id="customers">\r\n        <tr>\r\n            <th>Name</th>\r\n            <th>Description</th>\r\n        </tr>\r\n\r\n        @for (customer of customers; track customer) {\r\n        <tr>\r\n            <td>{{customer.name}}</td>\r\n            <td>{{customer.description}}</td>\r\n        </tr>\r\n        }\r\n    </table>\r\n</div>';
  }
});

// angular:jit:style:src\app\features\customer\customers\customers.css
var customers_default2;
var init_customers2 = __esm({
  "angular:jit:style:src\\app\\features\\customer\\customers\\customers.css"() {
    customers_default2 = "/* src/app/features/customer/customers/customers.css */\n#customers {\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  background-color: white;\n  margin-top: 10px;\n}\n#customers td,\n#customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n#customers tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n#customers tr:hover {\n  background-color: #ddd;\n}\n#customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #006192;\n  color: white;\n}\n.actions-card {\n  border: none;\n  border-radius: 2px;\n  background-color: white;\n  box-shadow: none;\n}\n.user-button {\n  background-color: transparent;\n  margin-left: 10px;\n  color: #006192;\n  border: none;\n  transition: 0.9s;\n}\n/*# sourceMappingURL=customers.css.map */\n";
  }
});

// src/app/features/customer/customers/customers.ts
var Customers;
var init_customers3 = __esm({
  "src/app/features/customer/customers/customers.ts"() {
    "use strict";
    init_tslib_es6();
    init_customers();
    init_customers2();
    init_core();
    init_nav_bar();
    init_card();
    init_button();
    init_icon();
    init_router();
    init_customer();
    Customers = class Customers2 {
      customer;
      customers = [];
      constructor(customer) {
        this.customer = customer;
        this.customers = this.customer.getAllCustomers();
      }
      backHistory() {
        history.back();
      }
      static ctorParameters = () => [
        { type: Customer }
      ];
    };
    Customers = __decorate([
      Component({
        selector: "app-customers",
        standalone: true,
        imports: [NavBar, MatCard, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
        template: customers_default,
        styles: [customers_default2]
      })
    ], Customers);
  }
});

// src/app/features/customer/customers/customers.spec.ts
var require_customers_spec = __commonJS({
  "src/app/features/customer/customers/customers.spec.ts"(exports) {
    init_testing();
    init_customers3();
    describe("Customers", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Customers]
        }).compileComponents();
        fixture = TestBed.createComponent(Customers);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_customers_spec();
//# sourceMappingURL=spec-customers.spec.js.map
