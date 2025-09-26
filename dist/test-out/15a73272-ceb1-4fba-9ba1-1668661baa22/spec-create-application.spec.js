import {
  MatListModule,
  init_list
} from "./chunk-R2YUVFDF.js";
import "./chunk-7RMIKX75.js";
import {
  Application,
  init_application
} from "./chunk-MN2YSSDC.js";
import {
  MatButtonToggleModule,
  init_button_toggle
} from "./chunk-JPPIB4DL.js";
import "./chunk-MZDFVJIN.js";
import {
  MatInputModule,
  init_input
} from "./chunk-YMHZWFAK.js";
import {
  NavBar,
  init_nav_bar
} from "./chunk-NIMZMCZ2.js";
import "./chunk-4JPQHB6F.js";
import "./chunk-UKFYJ4AP.js";
import "./chunk-VJR5CB3Z.js";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-SQGN5GSA.js";
import {
  MatButton,
  init_button
} from "./chunk-4VD7SSGS.js";
import {
  MatCard,
  MatCardModule,
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

// angular:jit:template:src\app\features\application\create-application\create-application.html
var create_application_default;
var init_create_application = __esm({
  "angular:jit:template:src\\app\\features\\application\\create-application\\create-application.html"() {
    create_application_default = '<app-nav-bar></app-nav-bar>\r\n<button [disabled]="workflowForm.invalid" matIconButton aria-label="Back History button" (click)="backHistory()">\r\n    <mat-icon>keyboard_backspace</mat-icon>\r\n</button>\r\n<button matButton style="display: flex; margin-left: auto; border-radius: 5px; height: 35px;"\r\n    (click)="createApplication()">\r\n    <mat-icon>save</mat-icon>\r\n    Create Application\r\n</button>\r\n<div class="page-container">\r\n    <mat-card class="application-card" appearance="outlined">\r\n        <mat-card-header>\r\n            <mat-icon mat-card-avatar>web</mat-icon>\r\n            <mat-card-title>Create Application</mat-card-title>\r\n            <mat-card-subtitle>Create a new application to the platform</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content style="padding: 20px; display:flex; flex-direction: column;">\r\n            <p>To create a new application, please provide the following details:</p>\r\n            <form [formGroup]="applicationForm" style="padding: 20px; display:flex; flex-direction: column;">\r\n                <mat-form-field  appearance="fill" class="full-width">\r\n                    <mat-label>Application Name</mat-label>\r\n                    <input formControlName="name" matInput placeholder="Enter the application name">\r\n                </mat-form-field>\r\n                <mat-form-field  appearance="fill" class="full-width">\r\n                    <mat-label>Application Description</mat-label>\r\n                    <input formControlName="description" matInput placeholder="Enter the application descripton">\r\n                </mat-form-field>\r\n            </form>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class="application-card" appearance="outlined">\r\n        <mat-card-header>\r\n            <mat-icon mat-card-avatar>web</mat-icon>\r\n            <mat-card-title>Flows</mat-card-title>\r\n            <mat-card-subtitle>Added flows</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content style="padding: 20px; display:flex; flex-direction: column;">\r\n            <form [formGroup]="workflowForm">\r\n                <div style="display: flex; align-items: center; ">\r\n                    <mat-form-field style=" height: 70px;">\r\n                        <mat-label>Code</mat-label>\r\n                        <input matInput placeholder="Flow Code" formControlName="name" required>\r\n                    </mat-form-field>\r\n                    <mat-form-field style="margin-left: 10px; height: 70px">\r\n                        <mat-label>Description</mat-label>\r\n                        <input matInput placeholder="Flow Description" formControlName="description" required>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n                <button matButton="filled" style="display: flex; margin-left: auto; border-radius: 5px; height: 25px;"\r\n                    (click)="addAcction()">\r\n                    <mat-icon>post_add</mat-icon>\r\n                    Add Flow\r\n                </button>\r\n            </form>\r\n            <div class="container2">\r\n                @for (flow of applicationFlows; track flow) {\r\n                <div\r\n                    style="padding: 5px; display: flex; justify-content: space-between; align-items: center; height: 20px; margin-top: 5px; background-color: rgba(103, 117, 143, 0.08); min-width: 100%;">\r\n                    <div style="display: flex; align-items: centery;width: 50%;">\r\n                        <h5 style="margin-right: auto;">{{flow.name}}</h5>\r\n                        <h5 style="margin-left: auto;">{{flow.description}}</h5>\r\n                    </div>\r\n                    <button style="color: rgb(148, 49, 49);" matButton matMiniFab (click)="deleteAction(flow)">\r\n                        <mat-icon color="danger">delete</mat-icon>\r\n                    </button>\r\n                </div>\r\n                }\r\n            </div>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n</div>';
  }
});

// angular:jit:style:src\app\features\application\create-application\create-application.css
var create_application_default2;
var init_create_application2 = __esm({
  "angular:jit:style:src\\app\\features\\application\\create-application\\create-application.css"() {
    create_application_default2 = "/* src/app/features/application/create-application/create-application.css */\n.page-container {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n.application-card {\n  width: 420px;\n  color: #006192;\n  background-color: white;\n}\n/*# sourceMappingURL=create-application.css.map */\n";
  }
});

// src/app/features/application/create-application/create-application.ts
var CreateApplication;
var init_create_application3 = __esm({
  "src/app/features/application/create-application/create-application.ts"() {
    "use strict";
    init_tslib_es6();
    init_create_application();
    init_create_application2();
    init_core();
    init_list();
    init_button_toggle();
    init_input();
    init_nav_bar();
    init_icon();
    init_card();
    init_forms();
    init_button();
    init_application();
    CreateApplication = class CreateApplication2 {
      _formBuilder;
      application;
      applicationForm;
      workflowForm;
      applicationFlows = [];
      constructor(_formBuilder, application) {
        this._formBuilder = _formBuilder;
        this.application = application;
        this.workflowForm = this._formBuilder.group({
          name: ["", Validators.required],
          description: ["", Validators.required]
        });
        this.applicationForm = this._formBuilder.group({
          name: ["", Validators.required],
          description: ["", Validators.required]
        });
      }
      backHistory() {
        window.history.back();
      }
      addAcction() {
        if (this.workflowForm.valid) {
          this.applicationFlows.push(this.workflowForm.value);
          this.workflowForm.reset();
        } else {
          console.error("Form is invalid");
        }
      }
      deleteAction(file) {
        const index = this.applicationFlows.indexOf(file);
        if (index > -1) {
          this.applicationFlows.splice(index, 1);
        }
      }
      createApplication() {
        const application = {
          name: this.applicationForm.value.name,
          description: this.applicationForm.value.description,
          flows: this.applicationFlows
        };
        console.log("Creating application:", application);
        if (application.flows.length > 0 && this.applicationForm.valid) {
          this.application.createApplication(application.name, application.description, this.applicationFlows);
          this.workflowForm.reset();
          this.applicationForm.reset();
          this.applicationFlows = [];
          alert("Application created successfully!");
        } else {
          alert("Please add at least one flow before creating the application.");
        }
      }
      static ctorParameters = () => [
        { type: FormBuilder },
        { type: Application }
      ];
    };
    CreateApplication = __decorate([
      Component({
        selector: "app-create-application",
        imports: [
          MatListModule,
          MatButtonToggleModule,
          MatInputModule,
          NavBar,
          MatIconModule,
          MatCard,
          MatCardModule,
          ReactiveFormsModule,
          MatButton
        ],
        template: create_application_default,
        styles: [create_application_default2]
      })
    ], CreateApplication);
  }
});

// src/app/features/application/create-application/create-application.spec.ts
var require_create_application_spec = __commonJS({
  "src/app/features/application/create-application/create-application.spec.ts"(exports) {
    init_testing();
    init_create_application3();
    describe("CreateApplication", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [CreateApplication]
        }).compileComponents();
        fixture = TestBed.createComponent(CreateApplication);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_create_application_spec();
//# sourceMappingURL=spec-create-application.spec.js.map
