import {
  CdkPortalOutlet,
  ComponentPortal,
  MatSelectModule,
  OverlayModule,
  PortalModule,
  TemplatePortal,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  init_overlay,
  init_portal,
  init_select
} from "./chunk-XDP6ZBFA.js";
import {
  init_form_field
} from "./chunk-CZ6R4KF7.js";
import {
  MatListModule,
  init_list
} from "./chunk-WQSOWEIB.js";
import {
  Application,
  init_application
} from "./chunk-DGGHHNHY.js";
import {
  Customer,
  init_customer
} from "./chunk-H4Q5FXLQ.js";
import {
  MatButtonToggleModule,
  init_button_toggle
} from "./chunk-B5YPRY7J.js";
import {
  SelectionModel,
  UniqueSelectionDispatcher,
  init_collections,
  init_selection_model_BCgC8uEN,
  init_unique_selection_dispatcher_Cewa_Eg3
} from "./chunk-5BEYDXTT.js";
import {
  ErrorStateMatcher,
  MAT_FORM_FIELD,
  MatFormFieldControl,
  MatFormFieldModule,
  MatInputModule,
  _ErrorStateTracker,
  init_error_options_DCNQlTOA,
  init_error_state_Dtb1IHM,
  init_form_field_CFbrnFED,
  init_input
} from "./chunk-ITGCIDAD.js";
import {
  CdkScrollableModule,
  ScrollDispatcher,
  init_scrolling
} from "./chunk-ASAJABVR.js";
import {
  init_data_source_D34wiQZj,
  isDataSource
} from "./chunk-IMWK5FLG.js";
import {
  ControlContainer,
  FormBuilder,
  FormGroupDirective,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgForm,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-G5Q5MP62.js";
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatButtonModule,
  MatRipple,
  MatRippleLoader,
  MatRippleModule,
  _StructuralStylesLoader,
  _animationsDisabled,
  coerceBooleanProperty,
  init_animation_DfMFjxHu,
  init_button,
  init_coercion,
  init_index_BFRo2fUq,
  init_ripple_BYgV4oZC,
  init_ripple_loader_BnMiRtmT,
  init_structural_styles_CObeNzjn
} from "./chunk-ESUJ3PT7.js";
import {
  MatCardModule,
  init_card
} from "./chunk-VSIGYHHC.js";
import {
  MatIcon,
  MatIconModule,
  init_icon
} from "./chunk-BGUUV7IW.js";
import {
  A11yModule,
  AriaDescriber,
  BACKSPACE,
  BidiModule,
  DELETE,
  DOWN_ARROW,
  Directionality,
  ENTER,
  ESCAPE,
  FocusKeyManager,
  FocusMonitor,
  MatCommonModule,
  Platform,
  SPACE,
  TAB,
  TREE_KEY_MANAGER,
  UP_ARROW,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _VisuallyHiddenLoader,
  _getFocusedElementPierceShadowDom,
  coerceNumberProperty,
  coerceObservable,
  hasModifierKey,
  init_a11y,
  init_bidi,
  init_common_module_cKSwHniA,
  init_directionality_CChdj3az,
  init_focus_key_manager_CPmlyB_c,
  init_id_generator_LuoRZSid,
  init_keycodes,
  init_keycodes_CpHkExLC,
  init_platform,
  init_private,
  init_private2,
  init_shadow_dom_B0oHn41l,
  init_tree_key_manager_KnCoIkIC,
  normalizePassiveListenerOptions
} from "./chunk-IZ5VFSKW.js";
import {
  CommonModule,
  NgClass,
  NgTemplateOutlet,
  init_common
} from "./chunk-24PN7RHC.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  HOST_TAG_NAME,
  HostAttributeToken,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NgModule,
  NgZone,
  Optional,
  Output,
  QueryList,
  Renderer2,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  __decorate,
  __esm,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  combineLatest,
  computed,
  concat,
  concatMap,
  core_exports,
  distinctUntilChanged,
  filter,
  forwardRef,
  init_core,
  init_esm,
  init_operators,
  init_tslib_es6,
  inject,
  isObservable,
  map,
  merge,
  numberAttribute,
  of,
  reduce,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-QKEEE2EE.js";

// angular:jit:template:src\app\components\stepper\stepper.html
var stepper_default;
var init_stepper = __esm({
  "angular:jit:template:src\\app\\components\\stepper\\stepper.html"() {
    stepper_default = `<mat-stepper class="stepper" [linear]="isLinear" #stepper>\r
    <mat-step [stepControl]="applicationConfigFormGroup" label="Select Customer">\r
        <section>\r
            <form [formGroup]="applicationConfigFormGroup" style="display: flex; flex-direction: column;">\r
                <div>\r
                    <mat-form-field style="margin-left: 20px; height: 70px">\r
                        <mat-select formControlName="customer" placeholder="Select Customer">\r
                            @for (customer of customers; track customer) {\r
                            <mat-option [value]="customer">{{customer.name}}</mat-option>\r
                            }\r
                        </mat-select>\r
                    </mat-form-field>\r
                    <mat-form-field style="margin-left: 20px; height: 70px">\r
                        <mat-select formControlName="OrgEntity" placeholder="Select OrgEntity">\r
                            @for (oe of orgEntities; track oe) {\r
                            <mat-option [value]="oe">{{oe.name}}</mat-option>\r
                            }\r
                        </mat-select>\r
                    </mat-form-field>\r
                    <mat-form-field style="margin-left: 20px; height: 70px">\r
                        <mat-select formControlName="application" placeholder="Select application">\r
                            @for (application of applications; track application) {\r
                            <mat-option [value]="application">{{application.name}}</mat-option>\r
                            }\r
                        </mat-select>\r
                    </mat-form-field>\r
                </div>\r
                <div style="display:flex;">\r
                    <mat-form-field style="margin-left: 20px; height: 70px">\r
                        <mat-select formControlName="oidcProviders" placeholder="Select oidcProvider">\r
                            @for (oidcProvider of oidcProviders; track oidcProvider) {\r
                            <mat-option [value]="oidcProvider">{{oidcProvider}}</mat-option>\r
                            }\r
                        </mat-select>\r
                    </mat-form-field>\r
                    <mat-form-field style="margin-left: 20px; height: 70px">\r
                        <mat-label>Introspection endpoint</mat-label>\r
                        <input [value]="instros" matInput placeholder="Introspection enpoints"\r
                            formControlName="instrospecionEndpoint" required>\r
                    </mat-form-field>\r
                    <mat-form-field style="margin-left: 20px; height: 70px">\r
                        <mat-label>Storege region</mat-label>\r
                        <input matInput placeholder="storage region" formControlName="storageRegion" required>\r
                    </mat-form-field>\r
                </div>\r
                <div style="display:flex; gap: 20px; margin-left: 20px; align-items: center;">\r
                    <p>Active <mat-slide-toggle [checked]="true" formControlName="status" labelPosition="before"></mat-slide-toggle></p>\r
                    <p>Enabled<mat-slide-toggle formControlName="enabled" labelPosition="before"></mat-slide-toggle></p>\r
                </div>\r
            </form>\r
\r
        </section>\r
        <div class="stepper-footer">\r
            <button matButton matStepperNext class="no-radius">Next</button>\r
        </div>\r
    </mat-step>\r
\r
    <mat-step label="Role Configuration" style="display: flex;">\r
        <div style="display: flex; flex-direction: column; width: 500px; margin-left: auto; margin-right: auto;">\r
            @for (flow of selectedApplication?.flows; track flow) {\r
            <mat-form-field>\r
                <mat-label>Roles config {{flow.name}}</mat-label>\r
                <mat-select>\r
                    @for (food of roles; track food) {\r
                    <mat-option [value]="food.value">{{food.viewValue}}</mat-option>\r
                    }\r
                </mat-select>\r
            </mat-form-field>\r
            }\r
        </div>\r
        <div class="stepper-footer">\r
            <button matButton matStepperPrevious>Back</button>\r
            <button matButton matStepperNext class="no-radius">Next</button>\r
        </div>\r
    </mat-step>\r
\r
    <mat-step label="Configure flows" style="display: flex;">\r
        @for (flow of selectedApplication.flows; track flow) {\r
\r
        <div style="display: flex; justify-content: space-evenly; align-items: center;">\r
            <mat-card class="application-card" appearance="filled">\r
                <mat-card-header style="display: flex; align-items: center;justify-content: center;padding: 5px;">\r
                    <mat-card-subtitle>{{flow.code}} Configuration</mat-card-subtitle>\r
                </mat-card-header>\r
                <mat-card-content style="padding: 20px; display:flex;flex-direction: column; height: 400px;">\r
                    <div>\r
                        <form [formGroup]="fileTypesForm" style="display:flex; gap: 10px;">\r
                            <mat-form-field style=" height: 70px">\r
                                <mat-label>Action</mat-label>\r
                                <mat-select formControlName="action" required>\r
                                    @for (food of action; track food) {\r
                                    <mat-option [value]="food.value">{{food.viewValue}}</mat-option>\r
                                    }\r
                                </mat-select>\r
                            </mat-form-field>\r
                            <mat-form-field style="height: 70px">\r
                                <mat-label>Type</mat-label>\r
                                <mat-select formControlName="type" required>\r
                                    @for (food of foods; track food) {\r
                                    <mat-option [value]="food.value">{{food.viewValue}}</mat-option>\r
                                    }\r
                                </mat-select>\r
                            </mat-form-field>\r
                            <mat-form-field style=" height: 70px">\r
                                <mat-label>File size</mat-label>\r
                                <input matInput placeholder="Application description" formControlName="size" required>\r
                            </mat-form-field>\r
                        </form>\r
                        <div style="display: flex; gap: 10px; justify-content: flex-end;">\r
                            <button [disabled]="!selectedConfiguration" (click)="copyConfiguration(flow.code)"\r
                                matButton="outlined" style="display: flex;; border-radius: 5px; height: 25px;">\r
                                <mat-icon>content_copy</mat-icon>\r
                                Clone\r
                            </button>\r
                            <button (click)="addConfiguration(flow.code)" matButton="filled"\r
                                style="display: flex; border-radius: 5px; height: 25px;">\r
                                <mat-icon>playlist_add</mat-icon>\r
                                Add\r
                            </button>\r
                        </div>\r
                        <div\r
                            style="margin-top: 10px; height: 200px; overflow-y: auto; display: flex; flex-direction: column;">\r
                            @for (config of configurations; track config) {\r
                            @if (config.flowName === flow.code) {\r
                            <mat-chip-listbox class="mat-mdc-chip-set-stacked" aria-label="Cutest dog breeds">\r
                                <mat-chip-option color="primary" [selected]="consfigurationSelected(config.id)"\r
                                    (click)="selectConfiguration(config)">\r
                                    Type: {{config.type}} | Action: {{config.action}} | Size: {{config.size}}MB\r
                                    <button matChipRemove (click)="deleteConfiguration(configurations.indexOf(config))">\r
                                        <mat-icon>cancel</mat-icon>\r
                                    </button>\r
                                </mat-chip-option>\r
                            </mat-chip-listbox>\r
                            }}\r
                        </div>\r
\r
                        <div *ngIf="!hasConfiguration(flow.code)"\r
                            style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">\r
                            No configuration added yet. Please add configuration.\r
\r
                            <mat-icon style="color: rgba(161, 211, 255, 0.61);">settings_b_roll</mat-icon>\r
                        </div>\r
                    </div>\r
                </mat-card-content>\r
            </mat-card>\r
\r
        </div>\r
        <hr>\r
        }\r
        <div class="stepper-footer">\r
            <button matButton matStepperPrevious>Back</button>\r
            <button matButton matStepperNext class="no-radius">Next</button>\r
        </div>\r
    </mat-step>\r
\r
    <mat-step label="Onboard Application">\r
\r
        <h3 style="text-align: center; margin-bottom: 20px;">Review Application Configuration</h3>\r
        <mat-card class="application-card" appearance="outlined"\r
            style="width: 600px; margin-left: auto; margin-right: auto; height: auto;">\r
            <mat-card-header\r
                style="background-color: aliceblue; border-radius: 10px 10px 0 0; display: flex; align-items: center;justify-content: center;padding: 5px;">\r
                <mat-card-subtitle>Application Summary</mat-card-subtitle>\r
            </mat-card-header>\r
            <mat-card-content style="padding: 20px;">\r
                <div style="display: flex; flex-direction: column; gap: 10px;">\r
                    <div style="display: flex; justify-content: space-between;">\r
                        <span><strong>Customer:</strong></span>\r
                        <span>{{applicationConfigFormGroup.get('customer')?.value?.name}}</span>\r
                    </div>\r
                    <div style="display: flex; justify-content: space-between;">\r
                        <span><strong>OrgEntity:</strong></span>\r
                        <span>{{applicationConfigFormGroup.get('OrgEntity')?.value?.name}}</span>\r
                    </div>\r
                    <div style="display: flex; justify-content: space-between;">\r
                        <span><strong>Application:</strong></span>\r
                        <span>{{applicationConfigFormGroup.get('application')?.value?.name}}</span>\r
                    </div>\r
                    <div style="display: flex; justify-content: space-between;">\r
                        <span><strong>OIDC Provider:</strong></span>\r
                        <span>{{applicationConfigFormGroup.get('oidcProviders')?.value}}</span>\r
                    </div>\r
                    <div style="display: flex; justify-content: space-between;">\r
                        <span><strong>Introspection Endpoint:</strong></span>\r
                        <span>{{applicationConfigFormGroup.get('instrospecionEndpoint')?.value}}</span>\r
                    </div>\r
                    <div style="display: flex; justify-content: space-between;">\r
                        <span><strong>Storage Region:</strong></span>\r
                        <span>{{applicationConfigFormGroup.get('storageRegion')?.value}}</span>\r
                    </div>\r
                    <div style="display: flex; justify-content: space-between;">\r
                        <span><strong>Status:</strong></span>\r
                        <span>{{applicationConfigFormGroup.get('status')?.value}}</span>\r
                    </div>\r
                </div>\r
                <div\r
                    style="display: flex; flex-direction: column; justify-content: space-between; align-items: center;">\r
                    <span><strong>Configurations:</strong></span>\r
                    <div\r
                        style="display: flex; flex-direction: column; width:500px; max-height: 200px; overflow-y: auto;">\r
                        @for (config of configurations; track config) {\r
                        <mat-chip-listbox class="mat-mdc-chip-set-stacked" aria-label="Cutest dog breeds">\r
                            <mat-chip-option color="primary">\r
                                Type: {{config.type}} | Action: {{config.action}} | Size: {{config.size}}MB\r
                                <button matChipRemove (click)="deleteConfiguration(configurations.indexOf(config))">\r
                                    <mat-icon>cancel</mat-icon>\r
                                </button>\r
                            </mat-chip-option>\r
                        </mat-chip-listbox>\r
                        }\r
                        @if (configurations.length === 0) {\r
                        <span style="font-size: 14px; color: gray;">No configurations added.</span>\r
                        }\r
                    </div>\r
                </div>\r
            </mat-card-content>\r
            <button matButton="filled" style="display: flex; margin-left: auto; border-radius: 5px; height: 25px;">\r
                <mat-icon>cloud_upload</mat-icon>\r
                Confirm Onbording\r
            </button>\r
        </mat-card>\r
        <div class="stepper-footer">\r
            <button matButton matStepperPrevious>Back</button>\r
        </div>\r
    </mat-step>\r
</mat-stepper>`;
  }
});

// angular:jit:style:src\app\components\stepper\stepper.css
var stepper_default2;
var init_stepper2 = __esm({
  "angular:jit:style:src\\app\\components\\stepper\\stepper.css"() {
    stepper_default2 = "/* src/app/components/stepper/stepper.css */\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n}\n.form-body {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: start;\n}\n.container {\n  display: flex;\n}\n.resume-cards {\n  display: flex;\n  flex-direction: column;\n}\n.stepper {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n  max-width: 90%;\n  background: white;\n}\n.stepper-footer {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  background-color: rgba(186, 205, 244, 0.116);\n  border-radius: 5px;\n}\n.no-radius {\n  border-radius: 0px;\n}\n.fomr-tittle-section {\n  margin-left: auto;\n  margin-right: auto;\n  font-weight: 500;\n  color: #006192;\n}\n.form-tittle {\n  font-weight: 500;\n  color: #006192;\n}\n.application-card {\n  color: #006192;\n  background-color: rgba(246, 246, 246, 0.429);\n  height: 400px;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=stepper.css.map */\n";
  }
});

// node_modules/@angular/cdk/fesm2022/stepper.mjs
var CdkStepHeader, CdkStepLabel, STEP_STATE, STEPPER_GLOBAL_OPTIONS, CdkStep, CdkStepper, CdkStepperNext, CdkStepperPrevious, CdkStepperModule;
var init_stepper3 = __esm({
  "node_modules/@angular/cdk/fesm2022/stepper.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_forms();
    init_esm();
    init_operators();
    init_directionality_CChdj3az();
    init_id_generator_LuoRZSid();
    init_focus_key_manager_CPmlyB_c();
    init_keycodes();
    init_keycodes_CpHkExLC();
    init_shadow_dom_B0oHn41l();
    init_bidi();
    CdkStepHeader = class _CdkStepHeader {
      _elementRef = inject(ElementRef);
      constructor() {
      }
      /** Focuses the step header. */
      focus() {
        this._elementRef.nativeElement.focus();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkStepHeader, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkStepHeader, isStandalone: true, selector: "[cdkStepHeader]", host: { attributes: { "role": "tab" } }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkStepHeader, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkStepHeader]",
        host: {
          "role": "tab"
        }
      }]
    }], ctorParameters: () => [] });
    CdkStepLabel = class _CdkStepLabel {
      template = inject(TemplateRef);
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkStepLabel, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkStepLabel, isStandalone: true, selector: "[cdkStepLabel]", ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkStepLabel, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkStepLabel]"
      }]
    }], ctorParameters: () => [] });
    STEP_STATE = {
      NUMBER: "number",
      EDIT: "edit",
      DONE: "done",
      ERROR: "error"
    };
    STEPPER_GLOBAL_OPTIONS = new InjectionToken("STEPPER_GLOBAL_OPTIONS");
    CdkStep = class _CdkStep {
      _stepperOptions;
      _stepper = inject(CdkStepper);
      _displayDefaultIndicatorType;
      /** Template for step label if it exists. */
      stepLabel;
      /** Forms that have been projected into the step. */
      _childForms;
      /** Template for step content. */
      content;
      /** The top level abstract control of the step. */
      stepControl;
      /** Whether user has attempted to move away from the step. */
      get interacted() {
        return this._interacted();
      }
      set interacted(value) {
        this._interacted.set(value);
      }
      _interacted = signal(false);
      /** Emits when the user has attempted to move away from the step. */
      interactedStream = new EventEmitter();
      /** Plain text label of the step. */
      label;
      /** Error message to display when there's an error. */
      errorMessage;
      /** Aria label for the tab. */
      ariaLabel;
      /**
       * Reference to the element that the tab is labelled by.
       * Will be cleared if `aria-label` is set at the same time.
       */
      ariaLabelledby;
      /** State of the step. */
      get state() {
        return this._state();
      }
      set state(value) {
        this._state.set(value);
      }
      _state = signal(void 0);
      /** Whether the user can return to this step once it has been marked as completed. */
      get editable() {
        return this._editable();
      }
      set editable(value) {
        this._editable.set(value);
      }
      _editable = signal(true);
      /** Whether the completion of step is optional. */
      optional = false;
      /** Whether step is marked as completed. */
      get completed() {
        const override = this._completedOverride();
        const interacted = this._interacted();
        if (override != null) {
          return override;
        }
        return interacted && (!this.stepControl || this.stepControl.valid);
      }
      set completed(value) {
        this._completedOverride.set(value);
      }
      _completedOverride = signal(null);
      /** Current index of the step within the stepper. */
      index = signal(-1);
      /** Whether the step is selected. */
      isSelected = computed(() => this._stepper.selectedIndex === this.index());
      /** Type of indicator that should be shown for the step. */
      indicatorType = computed(() => {
        const selected = this.isSelected();
        const completed = this.completed;
        const defaultState = this._state() ?? STEP_STATE.NUMBER;
        const editable = this._editable();
        if (this._showError() && this.hasError && !selected) {
          return STEP_STATE.ERROR;
        }
        if (this._displayDefaultIndicatorType) {
          if (!completed || selected) {
            return STEP_STATE.NUMBER;
          }
          return editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
        } else {
          if (completed && !selected) {
            return STEP_STATE.DONE;
          } else if (completed && selected) {
            return defaultState;
          }
          return editable && selected ? STEP_STATE.EDIT : defaultState;
        }
      });
      /** Whether the user can navigate to the step. */
      isNavigable = computed(() => {
        const isSelected = this.isSelected();
        const isCompleted = this.completed;
        return isCompleted || isSelected || !this._stepper.linear;
      });
      /** Whether step has an error. */
      get hasError() {
        const customError = this._customError();
        return customError == null ? this._getDefaultError() : customError;
      }
      set hasError(value) {
        this._customError.set(value);
      }
      _customError = signal(null);
      _getDefaultError() {
        return this.interacted && !!this.stepControl?.invalid;
      }
      constructor() {
        const stepperOptions = inject(STEPPER_GLOBAL_OPTIONS, { optional: true });
        this._stepperOptions = stepperOptions ? stepperOptions : {};
        this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
      }
      /** Selects this step component. */
      select() {
        this._stepper.selected = this;
      }
      /** Resets the step to its initial state. Note that this includes resetting form data. */
      reset() {
        this._interacted.set(false);
        if (this._completedOverride() != null) {
          this._completedOverride.set(false);
        }
        if (this._customError() != null) {
          this._customError.set(false);
        }
        if (this.stepControl) {
          this._childForms?.forEach((form) => form.resetForm?.());
          this.stepControl.reset();
        }
      }
      ngOnChanges() {
        this._stepper._stateChanged();
      }
      _markAsInteracted() {
        if (!this._interacted()) {
          this._interacted.set(true);
          this.interactedStream.emit(this);
        }
      }
      /** Determines whether the error state can be shown. */
      _showError() {
        return this._stepperOptions.showError ?? this._customError() != null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkStep, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _CdkStep, isStandalone: true, selector: "cdk-step", inputs: { stepControl: "stepControl", label: "label", errorMessage: "errorMessage", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], state: "state", editable: ["editable", "editable", booleanAttribute], optional: ["optional", "optional", booleanAttribute], completed: ["completed", "completed", booleanAttribute], hasError: ["hasError", "hasError", booleanAttribute] }, outputs: { interactedStream: "interacted" }, queries: [{ propertyName: "stepLabel", first: true, predicate: CdkStepLabel, descendants: true }, { propertyName: "_childForms", predicate: (
        // Note: we look for `ControlContainer` here, because both `NgForm` and `FormGroupDirective`
        // provides themselves as such, but we don't want to have a concrete reference to both of
        // the directives. The type is marked as `Partial` in case we run into a class that provides
        // itself as `ControlContainer` but doesn't have the same interface as the directives.
        ControlContainer
      ), descendants: true }], viewQueries: [{ propertyName: "content", first: true, predicate: TemplateRef, descendants: true, static: true }], exportAs: ["cdkStep"], usesOnChanges: true, ngImport: core_exports, template: "<ng-template><ng-content/></ng-template>", isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkStep, decorators: [{
      type: Component,
      args: [{
        selector: "cdk-step",
        exportAs: "cdkStep",
        template: "<ng-template><ng-content/></ng-template>",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush
      }]
    }], ctorParameters: () => [], propDecorators: { stepLabel: [{
      type: ContentChild,
      args: [CdkStepLabel]
    }], _childForms: [{
      type: ContentChildren,
      args: [
        // Note: we look for `ControlContainer` here, because both `NgForm` and `FormGroupDirective`
        // provides themselves as such, but we don't want to have a concrete reference to both of
        // the directives. The type is marked as `Partial` in case we run into a class that provides
        // itself as `ControlContainer` but doesn't have the same interface as the directives.
        ControlContainer,
        {
          descendants: true
        }
      ]
    }], content: [{
      type: ViewChild,
      args: [TemplateRef, { static: true }]
    }], stepControl: [{
      type: Input
    }], interactedStream: [{
      type: Output,
      args: ["interacted"]
    }], label: [{
      type: Input
    }], errorMessage: [{
      type: Input
    }], ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }], state: [{
      type: Input
    }], editable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], optional: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], completed: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], hasError: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    CdkStepper = class _CdkStepper {
      _dir = inject(Directionality, { optional: true });
      _changeDetectorRef = inject(ChangeDetectorRef);
      _elementRef = inject(ElementRef);
      /** Emits when the component is destroyed. */
      _destroyed = new Subject();
      /** Used for managing keyboard focus. */
      _keyManager;
      /** Full list of steps inside the stepper, including inside nested steppers. */
      _steps;
      /** Steps that belong to the current stepper, excluding ones from nested steppers. */
      steps = new QueryList();
      /** The list of step headers of the steps in the stepper. */
      _stepHeader;
      /** List of step headers sorted based on their DOM order. */
      _sortedHeaders = new QueryList();
      /** Whether the validity of previous steps should be checked or not. */
      linear = false;
      /** The index of the selected step. */
      get selectedIndex() {
        return this._selectedIndex();
      }
      set selectedIndex(index) {
        if (this._steps) {
          if (!this._isValidIndex(index) && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw Error("cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.");
          }
          if (this.selectedIndex !== index) {
            this.selected?._markAsInteracted();
            if (!this._anyControlsInvalidOrPending(index) && (index >= this.selectedIndex || this.steps.toArray()[index].editable)) {
              this._updateSelectedItemIndex(index);
            }
          }
        } else {
          this._selectedIndex.set(index);
        }
      }
      _selectedIndex = signal(0);
      /** The step that is selected. */
      get selected() {
        return this.steps ? this.steps.toArray()[this.selectedIndex] : void 0;
      }
      set selected(step) {
        this.selectedIndex = step && this.steps ? this.steps.toArray().indexOf(step) : -1;
      }
      /** Event emitted when the selected step has changed. */
      selectionChange = new EventEmitter();
      /** Output to support two-way binding on `[(selectedIndex)]` */
      selectedIndexChange = new EventEmitter();
      /** Used to track unique ID for each stepper component. */
      _groupId = inject(_IdGenerator).getId("cdk-stepper-");
      /** Orientation of the stepper. */
      get orientation() {
        return this._orientation;
      }
      set orientation(value) {
        this._orientation = value;
        if (this._keyManager) {
          this._keyManager.withVerticalOrientation(value === "vertical");
        }
      }
      _orientation = "horizontal";
      constructor() {
      }
      ngAfterContentInit() {
        this._steps.changes.pipe(startWith(this._steps), takeUntil(this._destroyed)).subscribe((steps) => {
          this.steps.reset(steps.filter((step) => step._stepper === this));
          this.steps.forEach((step, index) => step.index.set(index));
          this.steps.notifyOnChanges();
        });
      }
      ngAfterViewInit() {
        this._stepHeader.changes.pipe(startWith(this._stepHeader), takeUntil(this._destroyed)).subscribe((headers) => {
          this._sortedHeaders.reset(headers.toArray().sort((a, b) => {
            const documentPosition = a._elementRef.nativeElement.compareDocumentPosition(b._elementRef.nativeElement);
            return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
          }));
          this._sortedHeaders.notifyOnChanges();
        });
        this._keyManager = new FocusKeyManager(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === "vertical");
        this._keyManager.updateActiveItem(this.selectedIndex);
        (this._dir ? this._dir.change : of()).pipe(startWith(this._layoutDirection()), takeUntil(this._destroyed)).subscribe((direction) => this._keyManager?.withHorizontalOrientation(direction));
        this._keyManager.updateActiveItem(this.selectedIndex);
        this.steps.changes.subscribe(() => {
          if (!this.selected) {
            this._selectedIndex.set(Math.max(this.selectedIndex - 1, 0));
          }
        });
        if (!this._isValidIndex(this.selectedIndex)) {
          this._selectedIndex.set(0);
        }
        if (this.linear && this.selectedIndex > 0) {
          const visitedSteps = this.steps.toArray().slice(0, this._selectedIndex());
          for (const step of visitedSteps) {
            step._markAsInteracted();
          }
        }
      }
      ngOnDestroy() {
        this._keyManager?.destroy();
        this.steps.destroy();
        this._sortedHeaders.destroy();
        this._destroyed.next();
        this._destroyed.complete();
      }
      /** Selects and focuses the next step in list. */
      next() {
        this.selectedIndex = Math.min(this._selectedIndex() + 1, this.steps.length - 1);
      }
      /** Selects and focuses the previous step in list. */
      previous() {
        this.selectedIndex = Math.max(this._selectedIndex() - 1, 0);
      }
      /** Resets the stepper to its initial state. Note that this includes clearing form data. */
      reset() {
        this._updateSelectedItemIndex(0);
        this.steps.forEach((step) => step.reset());
        this._stateChanged();
      }
      /** Returns a unique id for each step label element. */
      _getStepLabelId(i) {
        return `${this._groupId}-label-${i}`;
      }
      /** Returns unique id for each step content element. */
      _getStepContentId(i) {
        return `${this._groupId}-content-${i}`;
      }
      /** Marks the component to be change detected. */
      _stateChanged() {
        this._changeDetectorRef.markForCheck();
      }
      /** Returns position state of the step with the given index. */
      _getAnimationDirection(index) {
        const position = index - this._selectedIndex();
        if (position < 0) {
          return this._layoutDirection() === "rtl" ? "next" : "previous";
        } else if (position > 0) {
          return this._layoutDirection() === "rtl" ? "previous" : "next";
        }
        return "current";
      }
      /** Returns the index of the currently-focused step header. */
      _getFocusIndex() {
        return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex();
      }
      _updateSelectedItemIndex(newIndex) {
        const stepsArray = this.steps.toArray();
        const selectedIndex = this._selectedIndex();
        this.selectionChange.emit({
          selectedIndex: newIndex,
          previouslySelectedIndex: selectedIndex,
          selectedStep: stepsArray[newIndex],
          previouslySelectedStep: stepsArray[selectedIndex]
        });
        if (this._keyManager) {
          this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
        }
        this._selectedIndex.set(newIndex);
        this.selectedIndexChange.emit(newIndex);
        this._stateChanged();
      }
      _onKeydown(event) {
        const hasModifier = hasModifierKey(event);
        const keyCode = event.keyCode;
        const manager = this._keyManager;
        if (manager?.activeItemIndex != null && !hasModifier && (keyCode === SPACE || keyCode === ENTER)) {
          this.selectedIndex = manager.activeItemIndex;
          event.preventDefault();
        } else {
          manager?.setFocusOrigin("keyboard").onKeydown(event);
        }
      }
      _anyControlsInvalidOrPending(index) {
        if (this.linear && index >= 0) {
          return this.steps.toArray().slice(0, index).some((step) => {
            const control = step.stepControl;
            const isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
            return isIncomplete && !step.optional && !step._completedOverride();
          });
        }
        return false;
      }
      _layoutDirection() {
        return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
      }
      /** Checks whether the stepper contains the focused element. */
      _containsFocus() {
        const stepperElement = this._elementRef.nativeElement;
        const focusedElement = _getFocusedElementPierceShadowDom();
        return stepperElement === focusedElement || stepperElement.contains(focusedElement);
      }
      /** Checks whether the passed-in index is a valid step index. */
      _isValidIndex(index) {
        return index > -1 && (!this.steps || index < this.steps.length);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkStepper, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkStepper, isStandalone: true, selector: "[cdkStepper]", inputs: { linear: ["linear", "linear", booleanAttribute], selectedIndex: ["selectedIndex", "selectedIndex", numberAttribute], selected: "selected", orientation: "orientation" }, outputs: { selectionChange: "selectionChange", selectedIndexChange: "selectedIndexChange" }, queries: [{ propertyName: "_steps", predicate: CdkStep, descendants: true }, { propertyName: "_stepHeader", predicate: CdkStepHeader, descendants: true }], exportAs: ["cdkStepper"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkStepper, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkStepper]",
        exportAs: "cdkStepper"
      }]
    }], ctorParameters: () => [], propDecorators: { _steps: [{
      type: ContentChildren,
      args: [CdkStep, { descendants: true }]
    }], _stepHeader: [{
      type: ContentChildren,
      args: [CdkStepHeader, { descendants: true }]
    }], linear: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], selectedIndex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], selected: [{
      type: Input
    }], selectionChange: [{
      type: Output
    }], selectedIndexChange: [{
      type: Output
    }], orientation: [{
      type: Input
    }] } });
    CdkStepperNext = class _CdkStepperNext {
      _stepper = inject(CdkStepper);
      /** Type of the next button. Defaults to "submit" if not specified. */
      type = "submit";
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkStepperNext, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkStepperNext, isStandalone: true, selector: "button[cdkStepperNext]", inputs: { type: "type" }, host: { listeners: { "click": "_stepper.next()" }, properties: { "type": "type" } }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkStepperNext, decorators: [{
      type: Directive,
      args: [{
        selector: "button[cdkStepperNext]",
        host: {
          "[type]": "type",
          "(click)": "_stepper.next()"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { type: [{
      type: Input
    }] } });
    CdkStepperPrevious = class _CdkStepperPrevious {
      _stepper = inject(CdkStepper);
      /** Type of the previous button. Defaults to "button" if not specified. */
      type = "button";
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkStepperPrevious, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkStepperPrevious, isStandalone: true, selector: "button[cdkStepperPrevious]", inputs: { type: "type" }, host: { listeners: { "click": "_stepper.previous()" }, properties: { "type": "type" } }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkStepperPrevious, decorators: [{
      type: Directive,
      args: [{
        selector: "button[cdkStepperPrevious]",
        host: {
          "[type]": "type",
          "(click)": "_stepper.previous()"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { type: [{
      type: Input
    }] } });
    CdkStepperModule = class _CdkStepperModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkStepperModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkStepperModule, imports: [
        BidiModule,
        CdkStep,
        CdkStepper,
        CdkStepHeader,
        CdkStepLabel,
        CdkStepperNext,
        CdkStepperPrevious
      ], exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkStepperModule, imports: [BidiModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkStepperModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          BidiModule,
          CdkStep,
          CdkStepper,
          CdkStepHeader,
          CdkStepLabel,
          CdkStepperNext,
          CdkStepperPrevious
        ],
        exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/stepper.mjs
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatStepperIntl();
}
var MatStepLabel, MatStepperIntl, MAT_STEPPER_INTL_PROVIDER, MatStepHeader, MatStepperIcon, MatStepContent, MatStep, MatStepper, MatStepperNext, MatStepperPrevious, MatStepperModule;
var init_stepper4 = __esm({
  "node_modules/@angular/material/fesm2022/stepper.mjs"() {
    "use strict";
    init_portal();
    init_stepper3();
    init_core();
    init_core();
    init_a11y();
    init_esm();
    init_common();
    init_private();
    init_icon();
    init_structural_styles_CObeNzjn();
    init_ripple_BYgV4oZC();
    init_platform();
    init_operators();
    init_error_options_DCNQlTOA();
    init_animation_DfMFjxHu();
    init_common_module_cKSwHniA();
    init_index_BFRo2fUq();
    MatStepLabel = class _MatStepLabel extends CdkStepLabel {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatStepLabel, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatStepLabel, isStandalone: true, selector: "[matStepLabel]", usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatStepLabel, decorators: [{
      type: Directive,
      args: [{
        selector: "[matStepLabel]"
      }]
    }] });
    MatStepperIntl = class _MatStepperIntl {
      /**
       * Stream that emits whenever the labels here are changed. Use this to notify
       * components if the labels have changed after initialization.
       */
      changes = new Subject();
      /** Label that is rendered below optional steps. */
      optionalLabel = "Optional";
      /** Label that is used to indicate step as completed to screen readers. */
      completedLabel = "Completed";
      /** Label that is used to indicate step as editable to screen readers. */
      editableLabel = "Editable";
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatStepperIntl, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatStepperIntl, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatStepperIntl, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    MAT_STEPPER_INTL_PROVIDER = {
      provide: MatStepperIntl,
      deps: [[new Optional(), new SkipSelf(), MatStepperIntl]],
      useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
    };
    MatStepHeader = class _MatStepHeader extends CdkStepHeader {
      _intl = inject(MatStepperIntl);
      _focusMonitor = inject(FocusMonitor);
      _intlSubscription;
      /** State of the given step. */
      state;
      /** Label of the given step. */
      label;
      /** Error message to display when there's an error. */
      errorMessage;
      /** Overrides for the header icons, passed in via the stepper. */
      iconOverrides;
      /** Index of the given step. */
      index;
      /** Whether the given step is selected. */
      selected;
      /** Whether the given step label is active. */
      active;
      /** Whether the given step is optional. */
      optional;
      /** Whether the ripple should be disabled. */
      disableRipple;
      /**
       * Theme color of the step header. This API is supported in M2 themes only, it
       * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      constructor() {
        super();
        const styleLoader = inject(_CdkPrivateStyleLoader);
        styleLoader.load(_StructuralStylesLoader);
        styleLoader.load(_VisuallyHiddenLoader);
        const changeDetectorRef = inject(ChangeDetectorRef);
        this._intlSubscription = this._intl.changes.subscribe(() => changeDetectorRef.markForCheck());
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true);
      }
      ngOnDestroy() {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._elementRef);
      }
      /** Focuses the step header. */
      focus(origin, options) {
        if (origin) {
          this._focusMonitor.focusVia(this._elementRef, origin, options);
        } else {
          this._elementRef.nativeElement.focus(options);
        }
      }
      /** Returns string label of given step if it is a text label. */
      _stringLabel() {
        return this.label instanceof MatStepLabel ? null : this.label;
      }
      /** Returns MatStepLabel if the label of given step is a template label. */
      _templateLabel() {
        return this.label instanceof MatStepLabel ? this.label : null;
      }
      /** Returns the host HTML element. */
      _getHostElement() {
        return this._elementRef.nativeElement;
      }
      _getDefaultTextForState(state) {
        if (state == "number") {
          return `${this.index + 1}`;
        }
        if (state == "edit") {
          return "create";
        }
        if (state == "error") {
          return "warning";
        }
        return state;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatStepHeader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatStepHeader, isStandalone: true, selector: "mat-step-header", inputs: { state: "state", label: "label", errorMessage: "errorMessage", iconOverrides: "iconOverrides", index: "index", selected: "selected", active: "active", optional: "optional", disableRipple: "disableRipple", color: "color" }, host: { attributes: { "role": "tab" }, properties: { "class": '"mat-" + (color || "primary")' }, classAttribute: "mat-step-header" }, usesInheritance: true, ngImport: core_exports, template: `<div class="mat-step-header-ripple mat-focus-indicator" matRipple
     [matRippleTrigger]="_getHostElement()"
     [matRippleDisabled]="disableRipple"></div>

<div class="mat-step-icon-state-{{state}} mat-step-icon" [class.mat-step-icon-selected]="selected">
  <div class="mat-step-icon-content">
    @if (iconOverrides && iconOverrides[state]) {
      <ng-container
        [ngTemplateOutlet]="iconOverrides[state]"
        [ngTemplateOutletContext]="{index, active, optional}"></ng-container>
    } @else {
      @switch (state) {
        @case ('number') {
          <span aria-hidden="true">{{_getDefaultTextForState(state)}}</span>
        }

        @default {
          @if (state === 'done') {
            <span class="cdk-visually-hidden">{{_intl.completedLabel}}</span>
          } @else if (state === 'edit') {
            <span class="cdk-visually-hidden">{{_intl.editableLabel}}</span>
          }

          <mat-icon aria-hidden="true">{{_getDefaultTextForState(state)}}</mat-icon>
        }
      }
    }
  </div>
</div>
<div class="mat-step-label"
     [class.mat-step-label-active]="active"
     [class.mat-step-label-selected]="selected"
     [class.mat-step-label-error]="state == 'error'">
  @if (_templateLabel(); as templateLabel) {
    <!-- If there is a label template, use it. -->
    <div class="mat-step-text-label">
      <ng-container [ngTemplateOutlet]="templateLabel.template"></ng-container>
    </div>
  } @else if (_stringLabel()) {
    <!-- If there is no label template, fall back to the text label. -->
    <div class="mat-step-text-label">{{label}}</div>
  }

  @if (optional && state != 'error') {
    <div class="mat-step-optional">{{_intl.optionalLabel}}</div>
  }

  @if (state === 'error') {
    <div class="mat-step-sub-label-error">{{errorMessage}}</div>
  }
</div>

`, styles: ['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium))}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium))}@media(hover: none){.mat-step-header:hover{background:none}}@media(forced-colors: active){.mat-step-header{outline:solid 1px}.mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.mat-step-header[aria-disabled=true]{outline-color:GrayText}.mat-step-header[aria-disabled=true] .mat-step-label,.mat-step-header[aria-disabled=true] .mat-step-icon,.mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));background-color:var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant))}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color, transparent);color:var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error))}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));font-size:var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size))}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight))}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary))}\n'], dependencies: [{ kind: "directive", type: MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatStepHeader, decorators: [{
      type: Component,
      args: [{ selector: "mat-step-header", host: {
        "class": "mat-step-header",
        "[class]": '"mat-" + (color || "primary")',
        "role": "tab"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [MatRipple, NgTemplateOutlet, MatIcon], template: `<div class="mat-step-header-ripple mat-focus-indicator" matRipple
     [matRippleTrigger]="_getHostElement()"
     [matRippleDisabled]="disableRipple"></div>

<div class="mat-step-icon-state-{{state}} mat-step-icon" [class.mat-step-icon-selected]="selected">
  <div class="mat-step-icon-content">
    @if (iconOverrides && iconOverrides[state]) {
      <ng-container
        [ngTemplateOutlet]="iconOverrides[state]"
        [ngTemplateOutletContext]="{index, active, optional}"></ng-container>
    } @else {
      @switch (state) {
        @case ('number') {
          <span aria-hidden="true">{{_getDefaultTextForState(state)}}</span>
        }

        @default {
          @if (state === 'done') {
            <span class="cdk-visually-hidden">{{_intl.completedLabel}}</span>
          } @else if (state === 'edit') {
            <span class="cdk-visually-hidden">{{_intl.editableLabel}}</span>
          }

          <mat-icon aria-hidden="true">{{_getDefaultTextForState(state)}}</mat-icon>
        }
      }
    }
  </div>
</div>
<div class="mat-step-label"
     [class.mat-step-label-active]="active"
     [class.mat-step-label-selected]="selected"
     [class.mat-step-label-error]="state == 'error'">
  @if (_templateLabel(); as templateLabel) {
    <!-- If there is a label template, use it. -->
    <div class="mat-step-text-label">
      <ng-container [ngTemplateOutlet]="templateLabel.template"></ng-container>
    </div>
  } @else if (_stringLabel()) {
    <!-- If there is no label template, fall back to the text label. -->
    <div class="mat-step-text-label">{{label}}</div>
  }

  @if (optional && state != 'error') {
    <div class="mat-step-optional">{{_intl.optionalLabel}}</div>
  }

  @if (state === 'error') {
    <div class="mat-step-sub-label-error">{{errorMessage}}</div>
  }
</div>

`, styles: ['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium))}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium))}@media(hover: none){.mat-step-header:hover{background:none}}@media(forced-colors: active){.mat-step-header{outline:solid 1px}.mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.mat-step-header[aria-disabled=true]{outline-color:GrayText}.mat-step-header[aria-disabled=true] .mat-step-label,.mat-step-header[aria-disabled=true] .mat-step-icon,.mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));background-color:var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant))}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color, transparent);color:var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error))}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));font-size:var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size))}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight))}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary))}\n'] }]
    }], ctorParameters: () => [], propDecorators: { state: [{
      type: Input
    }], label: [{
      type: Input
    }], errorMessage: [{
      type: Input
    }], iconOverrides: [{
      type: Input
    }], index: [{
      type: Input
    }], selected: [{
      type: Input
    }], active: [{
      type: Input
    }], optional: [{
      type: Input
    }], disableRipple: [{
      type: Input
    }], color: [{
      type: Input
    }] } });
    MatStepperIcon = class _MatStepperIcon {
      templateRef = inject(TemplateRef);
      /** Name of the icon to be overridden. */
      name;
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatStepperIcon, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatStepperIcon, isStandalone: true, selector: "ng-template[matStepperIcon]", inputs: { name: ["matStepperIcon", "name"] }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatStepperIcon, decorators: [{
      type: Directive,
      args: [{
        selector: "ng-template[matStepperIcon]"
      }]
    }], ctorParameters: () => [], propDecorators: { name: [{
      type: Input,
      args: ["matStepperIcon"]
    }] } });
    MatStepContent = class _MatStepContent {
      _template = inject(TemplateRef);
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatStepContent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatStepContent, isStandalone: true, selector: "ng-template[matStepContent]", ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatStepContent, decorators: [{
      type: Directive,
      args: [{
        selector: "ng-template[matStepContent]"
      }]
    }], ctorParameters: () => [] });
    MatStep = class _MatStep extends CdkStep {
      _errorStateMatcher = inject(ErrorStateMatcher, { skipSelf: true });
      _viewContainerRef = inject(ViewContainerRef);
      _isSelected = Subscription.EMPTY;
      /** Content for step label given by `<ng-template matStepLabel>`. */
      // We need an initializer here to avoid a TS error.
      stepLabel = void 0;
      /**
       * Theme color for the particular step. This API is supported in M2 themes
       * only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /** Content that will be rendered lazily. */
      _lazyContent;
      /** Currently-attached portal containing the lazy content. */
      _portal;
      ngAfterContentInit() {
        this._isSelected = this._stepper.steps.changes.pipe(switchMap(() => {
          return this._stepper.selectionChange.pipe(map((event) => event.selectedStep === this), startWith(this._stepper.selected === this));
        })).subscribe((isSelected) => {
          if (isSelected && this._lazyContent && !this._portal) {
            this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
          }
        });
      }
      ngOnDestroy() {
        this._isSelected.unsubscribe();
      }
      /** Custom error state matcher that additionally checks for validity of interacted form. */
      isErrorState(control, form) {
        const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
        const customErrorState = !!(control && control.invalid && this.interacted);
        return originalErrorState || customErrorState;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatStep, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatStep, isStandalone: true, selector: "mat-step", inputs: { color: "color" }, host: { attributes: { "hidden": "" } }, providers: [
        { provide: ErrorStateMatcher, useExisting: _MatStep },
        { provide: CdkStep, useExisting: _MatStep }
      ], queries: [{ propertyName: "stepLabel", first: true, predicate: MatStepLabel, descendants: true }, { propertyName: "_lazyContent", first: true, predicate: MatStepContent, descendants: true }], exportAs: ["matStep"], usesInheritance: true, ngImport: core_exports, template: '<ng-template>\n  <ng-content></ng-content>\n  <ng-template [cdkPortalOutlet]="_portal"></ng-template>\n</ng-template>\n', dependencies: [{ kind: "directive", type: CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatStep, decorators: [{
      type: Component,
      args: [{ selector: "mat-step", providers: [
        { provide: ErrorStateMatcher, useExisting: MatStep },
        { provide: CdkStep, useExisting: MatStep }
      ], encapsulation: ViewEncapsulation.None, exportAs: "matStep", changeDetection: ChangeDetectionStrategy.OnPush, imports: [CdkPortalOutlet], host: {
        "hidden": ""
        // Hide the steps so they don't affect the layout.
      }, template: '<ng-template>\n  <ng-content></ng-content>\n  <ng-template [cdkPortalOutlet]="_portal"></ng-template>\n</ng-template>\n' }]
    }], propDecorators: { stepLabel: [{
      type: ContentChild,
      args: [MatStepLabel]
    }], color: [{
      type: Input
    }], _lazyContent: [{
      type: ContentChild,
      args: [MatStepContent, { static: false }]
    }] } });
    MatStepper = class _MatStepper extends CdkStepper {
      _ngZone = inject(NgZone);
      _renderer = inject(Renderer2);
      _animationsDisabled = _animationsDisabled();
      _cleanupTransition;
      _isAnimating = signal(false);
      /** The list of step headers of the steps in the stepper. */
      _stepHeader = void 0;
      /** Elements hosting the step animations. */
      _animatedContainers;
      /** Full list of steps inside the stepper, including inside nested steppers. */
      _steps = void 0;
      /** Steps that belong to the current stepper, excluding ones from nested steppers. */
      steps = new QueryList();
      /** Custom icon overrides passed in by the consumer. */
      _icons;
      /** Event emitted when the current step is done transitioning in. */
      animationDone = new EventEmitter();
      /** Whether ripples should be disabled for the step headers. */
      disableRipple;
      /**
       * Theme color for all of the steps in stepper. This API is supported in M2
       * themes only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /**
       * Whether the label should display in bottom or end position.
       * Only applies in the `horizontal` orientation.
       */
      labelPosition = "end";
      /**
       * Position of the stepper's header.
       * Only applies in the `horizontal` orientation.
       */
      headerPosition = "top";
      /** Consumer-specified template-refs to be used to override the header icons. */
      _iconOverrides = {};
      /** Duration for the animation. Will be normalized to milliseconds if no units are set. */
      get animationDuration() {
        return this._animationDuration;
      }
      set animationDuration(value) {
        this._animationDuration = /^\d+$/.test(value) ? value + "ms" : value;
      }
      _animationDuration = "";
      /** Whether the stepper is rendering on the server. */
      _isServer = !inject(Platform).isBrowser;
      constructor() {
        super();
        const elementRef = inject(ElementRef);
        const nodeName = elementRef.nativeElement.nodeName.toLowerCase();
        this.orientation = nodeName === "mat-vertical-stepper" ? "vertical" : "horizontal";
      }
      ngAfterContentInit() {
        super.ngAfterContentInit();
        this._icons.forEach(({ name, templateRef }) => this._iconOverrides[name] = templateRef);
        this.steps.changes.pipe(takeUntil(this._destroyed)).subscribe(() => this._stateChanged());
        this.selectedIndexChange.pipe(takeUntil(this._destroyed)).subscribe(() => {
          const duration = this._getAnimationDuration();
          if (duration === "0ms" || duration === "0s") {
            this._onAnimationDone();
          } else {
            this._isAnimating.set(true);
          }
        });
        this._ngZone.runOutsideAngular(() => {
          if (!this._animationsDisabled) {
            setTimeout(() => {
              this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled");
              this._cleanupTransition = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._handleTransitionend);
            }, 200);
          }
        });
      }
      ngAfterViewInit() {
        super.ngAfterViewInit();
        if (typeof queueMicrotask === "function") {
          let hasEmittedInitial = false;
          this._animatedContainers.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => queueMicrotask(() => {
            if (!hasEmittedInitial) {
              hasEmittedInitial = true;
              this.animationDone.emit();
            }
            this._stateChanged();
          }));
        }
      }
      ngOnDestroy() {
        super.ngOnDestroy();
        this._cleanupTransition?.();
      }
      _getAnimationDuration() {
        if (this._animationsDisabled) {
          return "0ms";
        }
        if (this.animationDuration) {
          return this.animationDuration;
        }
        return this.orientation === "horizontal" ? "500ms" : "225ms";
      }
      _handleTransitionend = (event) => {
        const target = event.target;
        if (!target) {
          return;
        }
        const isHorizontalActiveElement = this.orientation === "horizontal" && event.propertyName === "transform" && target.classList.contains("mat-horizontal-stepper-content-current");
        const isVerticalActiveElement = this.orientation === "vertical" && event.propertyName === "grid-template-rows" && target.classList.contains("mat-vertical-content-container-active");
        const shouldEmit = (isHorizontalActiveElement || isVerticalActiveElement) && this._animatedContainers.find((ref) => ref.nativeElement === target);
        if (shouldEmit) {
          this._onAnimationDone();
        }
      };
      _onAnimationDone() {
        this._isAnimating.set(false);
        this.animationDone.emit();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatStepper, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatStepper, isStandalone: true, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: { disableRipple: "disableRipple", color: "color", labelPosition: "labelPosition", headerPosition: "headerPosition", animationDuration: "animationDuration" }, outputs: { animationDone: "animationDone" }, host: { attributes: { "role": "tablist" }, properties: { "class.mat-stepper-horizontal": 'orientation === "horizontal"', "class.mat-stepper-vertical": 'orientation === "vertical"', "class.mat-stepper-label-position-end": 'orientation === "horizontal" && labelPosition == "end"', "class.mat-stepper-label-position-bottom": 'orientation === "horizontal" && labelPosition == "bottom"', "class.mat-stepper-header-position-bottom": 'headerPosition === "bottom"', "class.mat-stepper-animating": "_isAnimating()", "style.--mat-stepper-animation-duration": "_getAnimationDuration()", "attr.aria-orientation": "orientation" } }, providers: [{ provide: CdkStepper, useExisting: _MatStepper }], queries: [{ propertyName: "_steps", predicate: MatStep, descendants: true }, { propertyName: "_icons", predicate: MatStepperIcon, descendants: true }], viewQueries: [{ propertyName: "_stepHeader", predicate: MatStepHeader, descendants: true }, { propertyName: "_animatedContainers", predicate: ["animatedContainer"], descendants: true }], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"], usesInheritance: true, ngImport: core_exports, template: `<!--
  We need to project the content somewhere to avoid hydration errors. Some observations:
  1. This is only necessary on the server.
  2. We get a hydration error if there aren't any nodes after the \`ng-content\`.
  3. We get a hydration error if \`ng-content\` is wrapped in another element.
-->
@if (_isServer) {
  <ng-content/>
}

@switch (orientation) {
  @case ('horizontal') {
    <div class="mat-horizontal-stepper-wrapper">
      <div class="mat-horizontal-stepper-header-container">
        @for (step of steps; track step) {
          <ng-container
            [ngTemplateOutlet]="stepTemplate"
            [ngTemplateOutletContext]="{step}"/>
          @if (!$last) {
            <div class="mat-stepper-horizontal-line"></div>
          }
        }
      </div>

      <div class="mat-horizontal-content-container">
        @for (step of steps; track step) {
          <div
            #animatedContainer
            class="mat-horizontal-stepper-content"
            role="tabpanel"
            [id]="_getStepContentId($index)"
            [attr.aria-labelledby]="_getStepLabelId($index)"
            [class]="'mat-horizontal-stepper-content-' + _getAnimationDirection($index)"
            [attr.inert]="selectedIndex === $index ? null : ''">
            <ng-container [ngTemplateOutlet]="step.content"/>
          </div>
        }
      </div>
    </div>
  }

  @case ('vertical') {
    @for (step of steps; track step) {
      <div class="mat-step">
        <ng-container
          [ngTemplateOutlet]="stepTemplate"
          [ngTemplateOutletContext]="{step}"/>
        <div
          #animatedContainer
          class="mat-vertical-content-container"
          [class.mat-stepper-vertical-line]="!$last"
          [class.mat-vertical-content-container-active]="selectedIndex === $index"
          [attr.inert]="selectedIndex === $index ? null : ''">
          <div class="mat-vertical-stepper-content"
            role="tabpanel"
            [id]="_getStepContentId($index)"
            [attr.aria-labelledby]="_getStepLabelId($index)">
            <div class="mat-vertical-content">
              <ng-container [ngTemplateOutlet]="step.content"/>
            </div>
          </div>
        </div>
      </div>
    }
  }
}

<!-- Common step templating -->
<ng-template let-step="step" #stepTemplate>
  <mat-step-header
    [class.mat-horizontal-stepper-header]="orientation === 'horizontal'"
    [class.mat-vertical-stepper-header]="orientation === 'vertical'"
    (click)="step.select()"
    (keydown)="_onKeydown($event)"
    [tabIndex]="_getFocusIndex() === step.index() ? 0 : -1"
    [id]="_getStepLabelId(step.index())"
    [attr.aria-posinset]="step.index() + 1"
    [attr.aria-setsize]="steps.length"
    [attr.aria-controls]="_getStepContentId(step.index())"
    [attr.aria-selected]="step.isSelected()"
    [attr.aria-label]="step.ariaLabel || null"
    [attr.aria-labelledby]="(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null"
    [attr.aria-disabled]="step.isNavigable() ? null : true"
    [index]="step.index()"
    [state]="step.indicatorType()"
    [label]="step.stepLabel || step.label"
    [selected]="step.isSelected()"
    [active]="step.isNavigable()"
    [optional]="step.optional"
    [errorMessage]="step.errorMessage"
    [iconOverrides]="_iconOverrides"
    [disableRipple]="disableRipple || !step.isNavigable()"
    [color]="step.color || color"/>
</ng-template>
`, styles: ['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));background:var(--mat-stepper-container-color, var(--mat-sys-surface))}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height, 72px)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{visibility:hidden;overflow:hidden;outline:0;height:0}.mat-stepper-animations-enabled .mat-horizontal-stepper-content{transition:transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous{transform:translate3d(-100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next{transform:translate3d(100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{visibility:visible;transform:none;height:auto}.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{overflow:visible}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}@media(forced-colors: active){.mat-horizontal-content-container{outline:solid 1px}}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{display:grid;grid-template-rows:0fr;grid-template-columns:100%;margin-left:36px;border:0;position:relative}.mat-stepper-animations-enabled .mat-vertical-content-container{transition:grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1)}.mat-vertical-content-container.mat-vertical-content-container-active{grid-template-rows:1fr}.mat-step:last-child .mat-vertical-content-container{border:none}@media(forced-colors: active){.mat-vertical-content-container{outline:solid 1px}}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}@supports not (grid-template-rows: 0fr){.mat-vertical-content-container{height:0}.mat-vertical-content-container.mat-vertical-content-container-active{height:auto}}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color, var(--mat-sys-outline));top:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0;visibility:hidden}.mat-stepper-animations-enabled .mat-vertical-stepper-content{transition:visibility var(--mat-stepper-animation-duration, 0) linear}.mat-vertical-content-container-active>.mat-vertical-stepper-content{visibility:visible}.mat-vertical-content{padding:0 24px 24px 24px}\n'], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: MatStepHeader, selector: "mat-step-header", inputs: ["state", "label", "errorMessage", "iconOverrides", "index", "selected", "active", "optional", "disableRipple", "color"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatStepper, decorators: [{
      type: Component,
      args: [{ selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", exportAs: "matStepper, matVerticalStepper, matHorizontalStepper", host: {
        "[class.mat-stepper-horizontal]": 'orientation === "horizontal"',
        "[class.mat-stepper-vertical]": 'orientation === "vertical"',
        "[class.mat-stepper-label-position-end]": 'orientation === "horizontal" && labelPosition == "end"',
        "[class.mat-stepper-label-position-bottom]": 'orientation === "horizontal" && labelPosition == "bottom"',
        "[class.mat-stepper-header-position-bottom]": 'headerPosition === "bottom"',
        "[class.mat-stepper-animating]": "_isAnimating()",
        "[style.--mat-stepper-animation-duration]": "_getAnimationDuration()",
        "[attr.aria-orientation]": "orientation",
        "role": "tablist"
      }, providers: [{ provide: CdkStepper, useExisting: MatStepper }], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [NgTemplateOutlet, MatStepHeader], template: `<!--
  We need to project the content somewhere to avoid hydration errors. Some observations:
  1. This is only necessary on the server.
  2. We get a hydration error if there aren't any nodes after the \`ng-content\`.
  3. We get a hydration error if \`ng-content\` is wrapped in another element.
-->
@if (_isServer) {
  <ng-content/>
}

@switch (orientation) {
  @case ('horizontal') {
    <div class="mat-horizontal-stepper-wrapper">
      <div class="mat-horizontal-stepper-header-container">
        @for (step of steps; track step) {
          <ng-container
            [ngTemplateOutlet]="stepTemplate"
            [ngTemplateOutletContext]="{step}"/>
          @if (!$last) {
            <div class="mat-stepper-horizontal-line"></div>
          }
        }
      </div>

      <div class="mat-horizontal-content-container">
        @for (step of steps; track step) {
          <div
            #animatedContainer
            class="mat-horizontal-stepper-content"
            role="tabpanel"
            [id]="_getStepContentId($index)"
            [attr.aria-labelledby]="_getStepLabelId($index)"
            [class]="'mat-horizontal-stepper-content-' + _getAnimationDirection($index)"
            [attr.inert]="selectedIndex === $index ? null : ''">
            <ng-container [ngTemplateOutlet]="step.content"/>
          </div>
        }
      </div>
    </div>
  }

  @case ('vertical') {
    @for (step of steps; track step) {
      <div class="mat-step">
        <ng-container
          [ngTemplateOutlet]="stepTemplate"
          [ngTemplateOutletContext]="{step}"/>
        <div
          #animatedContainer
          class="mat-vertical-content-container"
          [class.mat-stepper-vertical-line]="!$last"
          [class.mat-vertical-content-container-active]="selectedIndex === $index"
          [attr.inert]="selectedIndex === $index ? null : ''">
          <div class="mat-vertical-stepper-content"
            role="tabpanel"
            [id]="_getStepContentId($index)"
            [attr.aria-labelledby]="_getStepLabelId($index)">
            <div class="mat-vertical-content">
              <ng-container [ngTemplateOutlet]="step.content"/>
            </div>
          </div>
        </div>
      </div>
    }
  }
}

<!-- Common step templating -->
<ng-template let-step="step" #stepTemplate>
  <mat-step-header
    [class.mat-horizontal-stepper-header]="orientation === 'horizontal'"
    [class.mat-vertical-stepper-header]="orientation === 'vertical'"
    (click)="step.select()"
    (keydown)="_onKeydown($event)"
    [tabIndex]="_getFocusIndex() === step.index() ? 0 : -1"
    [id]="_getStepLabelId(step.index())"
    [attr.aria-posinset]="step.index() + 1"
    [attr.aria-setsize]="steps.length"
    [attr.aria-controls]="_getStepContentId(step.index())"
    [attr.aria-selected]="step.isSelected()"
    [attr.aria-label]="step.ariaLabel || null"
    [attr.aria-labelledby]="(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null"
    [attr.aria-disabled]="step.isNavigable() ? null : true"
    [index]="step.index()"
    [state]="step.indicatorType()"
    [label]="step.stepLabel || step.label"
    [selected]="step.isSelected()"
    [active]="step.isNavigable()"
    [optional]="step.optional"
    [errorMessage]="step.errorMessage"
    [iconOverrides]="_iconOverrides"
    [disableRipple]="disableRipple || !step.isNavigable()"
    [color]="step.color || color"/>
</ng-template>
`, styles: ['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));background:var(--mat-stepper-container-color, var(--mat-sys-surface))}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height, 72px)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{visibility:hidden;overflow:hidden;outline:0;height:0}.mat-stepper-animations-enabled .mat-horizontal-stepper-content{transition:transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous{transform:translate3d(-100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next{transform:translate3d(100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{visibility:visible;transform:none;height:auto}.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{overflow:visible}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}@media(forced-colors: active){.mat-horizontal-content-container{outline:solid 1px}}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{display:grid;grid-template-rows:0fr;grid-template-columns:100%;margin-left:36px;border:0;position:relative}.mat-stepper-animations-enabled .mat-vertical-content-container{transition:grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1)}.mat-vertical-content-container.mat-vertical-content-container-active{grid-template-rows:1fr}.mat-step:last-child .mat-vertical-content-container{border:none}@media(forced-colors: active){.mat-vertical-content-container{outline:solid 1px}}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}@supports not (grid-template-rows: 0fr){.mat-vertical-content-container{height:0}.mat-vertical-content-container.mat-vertical-content-container-active{height:auto}}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color, var(--mat-sys-outline));top:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0;visibility:hidden}.mat-stepper-animations-enabled .mat-vertical-stepper-content{transition:visibility var(--mat-stepper-animation-duration, 0) linear}.mat-vertical-content-container-active>.mat-vertical-stepper-content{visibility:visible}.mat-vertical-content{padding:0 24px 24px 24px}\n'] }]
    }], ctorParameters: () => [], propDecorators: { _stepHeader: [{
      type: ViewChildren,
      args: [MatStepHeader]
    }], _animatedContainers: [{
      type: ViewChildren,
      args: ["animatedContainer"]
    }], _steps: [{
      type: ContentChildren,
      args: [MatStep, { descendants: true }]
    }], _icons: [{
      type: ContentChildren,
      args: [MatStepperIcon, { descendants: true }]
    }], animationDone: [{
      type: Output
    }], disableRipple: [{
      type: Input
    }], color: [{
      type: Input
    }], labelPosition: [{
      type: Input
    }], headerPosition: [{
      type: Input
    }], animationDuration: [{
      type: Input
    }] } });
    MatStepperNext = class _MatStepperNext extends CdkStepperNext {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatStepperNext, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatStepperNext, isStandalone: true, selector: "button[matStepperNext]", host: { properties: { "type": "type" }, classAttribute: "mat-stepper-next" }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatStepperNext, decorators: [{
      type: Directive,
      args: [{
        selector: "button[matStepperNext]",
        host: {
          "class": "mat-stepper-next",
          "[type]": "type"
        }
      }]
    }] });
    MatStepperPrevious = class _MatStepperPrevious extends CdkStepperPrevious {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatStepperPrevious, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatStepperPrevious, isStandalone: true, selector: "button[matStepperPrevious]", host: { properties: { "type": "type" }, classAttribute: "mat-stepper-previous" }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatStepperPrevious, decorators: [{
      type: Directive,
      args: [{
        selector: "button[matStepperPrevious]",
        host: {
          "class": "mat-stepper-previous",
          "[type]": "type"
        }
      }]
    }] });
    MatStepperModule = class _MatStepperModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatStepperModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatStepperModule, imports: [
        MatCommonModule,
        PortalModule,
        CdkStepperModule,
        MatIconModule,
        MatRippleModule,
        MatStep,
        MatStepLabel,
        MatStepper,
        MatStepperNext,
        MatStepperPrevious,
        MatStepHeader,
        MatStepperIcon,
        MatStepContent
      ], exports: [
        MatCommonModule,
        MatStep,
        MatStepLabel,
        MatStepper,
        MatStepperNext,
        MatStepperPrevious,
        MatStepHeader,
        MatStepperIcon,
        MatStepContent
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatStepperModule, providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher], imports: [
        MatCommonModule,
        PortalModule,
        CdkStepperModule,
        MatIconModule,
        MatRippleModule,
        MatStepper,
        MatStepHeader,
        MatCommonModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatStepperModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          MatCommonModule,
          PortalModule,
          CdkStepperModule,
          MatIconModule,
          MatRippleModule,
          MatStep,
          MatStepLabel,
          MatStepper,
          MatStepperNext,
          MatStepperPrevious,
          MatStepHeader,
          MatStepperIcon,
          MatStepContent
        ],
        exports: [
          MatCommonModule,
          MatStep,
          MatStepLabel,
          MatStepper,
          MatStepperNext,
          MatStepperPrevious,
          MatStepHeader,
          MatStepperIcon,
          MatStepContent
        ],
        providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/internal-form-field-D5iFxU6d.mjs
var _MatInternalFormField;
var init_internal_form_field_D5iFxU6d = __esm({
  "node_modules/@angular/material/fesm2022/internal-form-field-D5iFxU6d.mjs"() {
    "use strict";
    init_core();
    init_core();
    _MatInternalFormField = class __MatInternalFormField {
      /** Position of the label relative to the content. */
      labelPosition;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __MatInternalFormField, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: __MatInternalFormField, isStandalone: true, selector: "div[mat-internal-form-field]", inputs: { labelPosition: "labelPosition" }, host: { properties: { "class.mdc-form-field--align-end": 'labelPosition === "before"' }, classAttribute: "mdc-form-field mat-internal-form-field" }, ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatInternalFormField, decorators: [{
      type: Component,
      args: [{ selector: "div[mat-internal-form-field]", template: "<ng-content></ng-content>", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      }, styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"] }]
    }], propDecorators: { labelPosition: [{
      type: Input,
      args: [{ required: true }]
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/checkbox.mjs
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    clickAction: "check-indeterminate",
    disabledInteractive: false
  };
}
var MAT_CHECKBOX_DEFAULT_OPTIONS, TransitionCheckState, MatCheckboxChange, defaults, MatCheckbox, MatCheckboxModule;
var init_checkbox = __esm({
  "node_modules/@angular/material/fesm2022/checkbox.mjs"() {
    "use strict";
    init_a11y();
    init_core();
    init_core();
    init_forms();
    init_private();
    init_internal_form_field_D5iFxU6d();
    init_animation_DfMFjxHu();
    init_structural_styles_CObeNzjn();
    init_ripple_BYgV4oZC();
    init_common_module_cKSwHniA();
    MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
      providedIn: "root",
      factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
    });
    (function(TransitionCheckState2) {
      TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
      TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
      TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
      TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
    })(TransitionCheckState || (TransitionCheckState = {}));
    MatCheckboxChange = class {
      /** The source checkbox of the event. */
      source;
      /** The new `checked` value of the checkbox. */
      checked;
    };
    defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
    MatCheckbox = class _MatCheckbox {
      _elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _ngZone = inject(NgZone);
      _animationsDisabled = _animationsDisabled();
      _options = inject(MAT_CHECKBOX_DEFAULT_OPTIONS, {
        optional: true
      });
      /** Focuses the checkbox. */
      focus() {
        this._inputElement.nativeElement.focus();
      }
      /** Creates the change event that will be emitted by the checkbox. */
      _createChangeEvent(isChecked) {
        const event = new MatCheckboxChange();
        event.source = this;
        event.checked = isChecked;
        return event;
      }
      /** Gets the element on which to add the animation CSS classes. */
      _getAnimationTargetElement() {
        return this._inputElement?.nativeElement;
      }
      /** CSS classes to add when transitioning between the different checkbox states. */
      _animationClasses = {
        uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
        uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
        checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
        checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
        indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
        indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
      };
      /**
       * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
       * take precedence so this may be omitted.
       */
      ariaLabel = "";
      /**
       * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
       */
      ariaLabelledby = null;
      /** The 'aria-describedby' attribute is read after the element's label and field type. */
      ariaDescribedby;
      /**
       * Users can specify the `aria-expanded` attribute which will be forwarded to the input element
       */
      ariaExpanded;
      /**
       * Users can specify the `aria-controls` attribute which will be forwarded to the input element
       */
      ariaControls;
      /** Users can specify the `aria-owns` attribute which will be forwarded to the input element */
      ariaOwns;
      _uniqueId;
      /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
      id;
      /** Returns the unique id for the visual hidden input. */
      get inputId() {
        return `${this.id || this._uniqueId}-input`;
      }
      /** Whether the checkbox is required. */
      required;
      /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
      labelPosition = "after";
      /** Name value will be applied to the input element if present */
      name = null;
      /** Event emitted when the checkbox's `checked` value changes. */
      change = new EventEmitter();
      /** Event emitted when the checkbox's `indeterminate` value changes. */
      indeterminateChange = new EventEmitter();
      /** The value attribute of the native input element */
      value;
      /** Whether the checkbox has a ripple. */
      disableRipple;
      /** The native `<input type="checkbox">` element */
      _inputElement;
      /** The native `<label>` element */
      _labelElement;
      /** Tabindex for the checkbox. */
      tabIndex;
      // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
      // the lack of type checking previously and assigning random strings.
      /**
       * Theme color of the checkbox. This API is supported in M2 themes only, it
       * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/checkbox/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /** Whether the checkbox should remain interactive when it is disabled. */
      disabledInteractive;
      /**
       * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
       * @docs-private
       */
      _onTouched = () => {
      };
      _currentAnimationClass = "";
      _currentCheckState = TransitionCheckState.Init;
      _controlValueAccessorChangeFn = () => {
      };
      _validatorChangeFn = () => {
      };
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        const tabIndex = inject(new HostAttributeToken("tabindex"), { optional: true });
        this._options = this._options || defaults;
        this.color = this._options.color || defaults.color;
        this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
        this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-checkbox-");
        this.disabledInteractive = this._options?.disabledInteractive ?? false;
      }
      ngOnChanges(changes) {
        if (changes["required"]) {
          this._validatorChangeFn();
        }
      }
      ngAfterViewInit() {
        this._syncIndeterminate(this.indeterminate);
      }
      /** Whether the checkbox is checked. */
      get checked() {
        return this._checked;
      }
      set checked(value) {
        if (value != this.checked) {
          this._checked = value;
          this._changeDetectorRef.markForCheck();
        }
      }
      _checked = false;
      /** Whether the checkbox is disabled. */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        if (value !== this.disabled) {
          this._disabled = value;
          this._changeDetectorRef.markForCheck();
        }
      }
      _disabled = false;
      /**
       * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
       * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
       * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
       * set to false.
       */
      get indeterminate() {
        return this._indeterminate();
      }
      set indeterminate(value) {
        const changed = value != this._indeterminate();
        this._indeterminate.set(value);
        if (changed) {
          if (value) {
            this._transitionCheckState(TransitionCheckState.Indeterminate);
          } else {
            this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
          }
          this.indeterminateChange.emit(value);
        }
        this._syncIndeterminate(value);
      }
      _indeterminate = signal(false);
      _isRippleDisabled() {
        return this.disableRipple || this.disabled;
      }
      /** Method being called whenever the label text changes. */
      _onLabelTextChange() {
        this._changeDetectorRef.detectChanges();
      }
      // Implemented as part of ControlValueAccessor.
      writeValue(value) {
        this.checked = !!value;
      }
      // Implemented as part of ControlValueAccessor.
      registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
      }
      // Implemented as part of ControlValueAccessor.
      registerOnTouched(fn) {
        this._onTouched = fn;
      }
      // Implemented as part of ControlValueAccessor.
      setDisabledState(isDisabled) {
        this.disabled = isDisabled;
      }
      // Implemented as a part of Validator.
      validate(control) {
        return this.required && control.value !== true ? { "required": true } : null;
      }
      // Implemented as a part of Validator.
      registerOnValidatorChange(fn) {
        this._validatorChangeFn = fn;
      }
      _transitionCheckState(newState) {
        let oldState = this._currentCheckState;
        let element = this._getAnimationTargetElement();
        if (oldState === newState || !element) {
          return;
        }
        if (this._currentAnimationClass) {
          element.classList.remove(this._currentAnimationClass);
        }
        this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
        this._currentCheckState = newState;
        if (this._currentAnimationClass.length > 0) {
          element.classList.add(this._currentAnimationClass);
          const animationClass = this._currentAnimationClass;
          this._ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              element.classList.remove(animationClass);
            }, 1e3);
          });
        }
      }
      _emitChangeEvent() {
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(this._createChangeEvent(this.checked));
        if (this._inputElement) {
          this._inputElement.nativeElement.checked = this.checked;
        }
      }
      /** Toggles the `checked` state of the checkbox. */
      toggle() {
        this.checked = !this.checked;
        this._controlValueAccessorChangeFn(this.checked);
      }
      _handleInputClick() {
        const clickAction = this._options?.clickAction;
        if (!this.disabled && clickAction !== "noop") {
          if (this.indeterminate && clickAction !== "check") {
            Promise.resolve().then(() => {
              this._indeterminate.set(false);
              this.indeterminateChange.emit(false);
            });
          }
          this._checked = !this._checked;
          this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
          this._emitChangeEvent();
        } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
          this._inputElement.nativeElement.checked = this.checked;
          this._inputElement.nativeElement.indeterminate = this.indeterminate;
        }
      }
      _onInteractionEvent(event) {
        event.stopPropagation();
      }
      _onBlur() {
        Promise.resolve().then(() => {
          this._onTouched();
          this._changeDetectorRef.markForCheck();
        });
      }
      _getAnimationClassForCheckStateTransition(oldState, newState) {
        if (this._animationsDisabled) {
          return "";
        }
        switch (oldState) {
          case TransitionCheckState.Init:
            if (newState === TransitionCheckState.Checked) {
              return this._animationClasses.uncheckedToChecked;
            } else if (newState == TransitionCheckState.Indeterminate) {
              return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
            }
            break;
          case TransitionCheckState.Unchecked:
            return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
          case TransitionCheckState.Checked:
            return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
          case TransitionCheckState.Indeterminate:
            return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
        }
        return "";
      }
      /**
       * Syncs the indeterminate value with the checkbox DOM node.
       *
       * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
       * property is supported on an element boils down to `if (propName in element)`. Domino's
       * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
       * server-side rendering.
       */
      _syncIndeterminate(value) {
        const nativeCheckbox = this._inputElement;
        if (nativeCheckbox) {
          nativeCheckbox.nativeElement.indeterminate = value;
        }
      }
      _onInputClick() {
        this._handleInputClick();
      }
      _onTouchTargetClick() {
        this._handleInputClick();
        if (!this.disabled) {
          this._inputElement.nativeElement.focus();
        }
      }
      /**
       *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
       *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
       *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
       *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
       *  bubbles when the label is clicked.
       */
      _preventBubblingFromLabel(event) {
        if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
          event.stopPropagation();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCheckbox, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatCheckbox, isStandalone: true, selector: "mat-checkbox", inputs: { ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"], ariaExpanded: ["aria-expanded", "ariaExpanded", booleanAttribute], ariaControls: ["aria-controls", "ariaControls"], ariaOwns: ["aria-owns", "ariaOwns"], id: "id", required: ["required", "required", booleanAttribute], labelPosition: "labelPosition", name: "name", value: "value", disableRipple: ["disableRipple", "disableRipple", booleanAttribute], tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)], color: "color", disabledInteractive: ["disabledInteractive", "disabledInteractive", booleanAttribute], checked: ["checked", "checked", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], indeterminate: ["indeterminate", "indeterminate", booleanAttribute] }, outputs: { change: "change", indeterminateChange: "indeterminateChange" }, host: { properties: { "attr.tabindex": "null", "attr.aria-label": "null", "attr.aria-labelledby": "null", "class._mat-animation-noopable": "_animationsDisabled", "class.mdc-checkbox--disabled": "disabled", "id": "id", "class.mat-mdc-checkbox-disabled": "disabled", "class.mat-mdc-checkbox-checked": "checked", "class.mat-mdc-checkbox-disabled-interactive": "disabledInteractive", "class": 'color ? "mat-" + color : "mat-accent"' }, classAttribute: "mat-mdc-checkbox" }, providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => _MatCheckbox),
          multi: true
        },
        {
          provide: NG_VALIDATORS,
          useExisting: _MatCheckbox,
          multi: true
        }
      ], viewQueries: [{ propertyName: "_inputElement", first: true, predicate: ["input"], descendants: true }, { propertyName: "_labelElement", first: true, predicate: ["label"], descendants: true }], exportAs: ["matCheckbox"], usesOnChanges: true, ngImport: core_exports, template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-controls]="ariaControls"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.aria-expanded]="ariaExpanded"
           [attr.aria-owns]="ariaOwns"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-focus-indicator" mat-ripple
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`, styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n'], dependencies: [{ kind: "directive", type: MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "component", type: _MatInternalFormField, selector: "div[mat-internal-form-field]", inputs: ["labelPosition"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCheckbox, decorators: [{
      type: Component,
      args: [{ selector: "mat-checkbox", host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        // Add classes that users can use to more easily target disabled or checked checkboxes.
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      }, providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => MatCheckbox),
          multi: true
        },
        {
          provide: NG_VALIDATORS,
          useExisting: MatCheckbox,
          multi: true
        }
      ], exportAs: "matCheckbox", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [MatRipple, _MatInternalFormField], template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-controls]="ariaControls"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.aria-expanded]="ariaExpanded"
           [attr.aria-owns]="ariaOwns"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-focus-indicator" mat-ripple
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`, styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n'] }]
    }], ctorParameters: () => [], propDecorators: { ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }], ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }], ariaExpanded: [{
      type: Input,
      args: [{ alias: "aria-expanded", transform: booleanAttribute }]
    }], ariaControls: [{
      type: Input,
      args: ["aria-controls"]
    }], ariaOwns: [{
      type: Input,
      args: ["aria-owns"]
    }], id: [{
      type: Input
    }], required: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], labelPosition: [{
      type: Input
    }], name: [{
      type: Input
    }], change: [{
      type: Output
    }], indeterminateChange: [{
      type: Output
    }], value: [{
      type: Input
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }], _labelElement: [{
      type: ViewChild,
      args: ["label"]
    }], tabIndex: [{
      type: Input,
      args: [{ transform: (value) => value == null ? void 0 : numberAttribute(value) }]
    }], color: [{
      type: Input
    }], disabledInteractive: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], checked: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], indeterminate: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    MatCheckboxModule = class _MatCheckboxModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCheckboxModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCheckboxModule, imports: [MatCheckbox, MatCommonModule], exports: [MatCheckbox, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCheckboxModule, imports: [MatCheckbox, MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCheckboxModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCheckbox, MatCommonModule],
        exports: [MatCheckbox, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/accordion.mjs
var CDK_ACCORDION, CdkAccordion, CdkAccordionItem, CdkAccordionModule;
var init_accordion = __esm({
  "node_modules/@angular/cdk/fesm2022/accordion.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_id_generator_LuoRZSid();
    init_unique_selection_dispatcher_Cewa_Eg3();
    CDK_ACCORDION = new InjectionToken("CdkAccordion");
    CdkAccordion = class _CdkAccordion {
      /** Emits when the state of the accordion changes */
      _stateChanges = new Subject();
      /** Stream that emits true/false when openAll/closeAll is triggered. */
      _openCloseAllActions = new Subject();
      /** A readonly id value to use for unique selection coordination. */
      id = inject(_IdGenerator).getId("cdk-accordion-");
      /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
      multi = false;
      /** Opens all enabled accordion items in an accordion where multi is enabled. */
      openAll() {
        if (this.multi) {
          this._openCloseAllActions.next(true);
        }
      }
      /** Closes all enabled accordion items. */
      closeAll() {
        this._openCloseAllActions.next(false);
      }
      ngOnChanges(changes) {
        this._stateChanges.next(changes);
      }
      ngOnDestroy() {
        this._stateChanges.complete();
        this._openCloseAllActions.complete();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkAccordion, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkAccordion, isStandalone: true, selector: "cdk-accordion, [cdkAccordion]", inputs: { multi: ["multi", "multi", booleanAttribute] }, providers: [{ provide: CDK_ACCORDION, useExisting: _CdkAccordion }], exportAs: ["cdkAccordion"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkAccordion, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-accordion, [cdkAccordion]",
        exportAs: "cdkAccordion",
        providers: [{ provide: CDK_ACCORDION, useExisting: CdkAccordion }]
      }]
    }], propDecorators: { multi: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    CdkAccordionItem = class _CdkAccordionItem {
      accordion = inject(CDK_ACCORDION, { optional: true, skipSelf: true });
      _changeDetectorRef = inject(ChangeDetectorRef);
      _expansionDispatcher = inject(UniqueSelectionDispatcher);
      /** Subscription to openAll/closeAll events. */
      _openCloseAllSubscription = Subscription.EMPTY;
      /** Event emitted every time the AccordionItem is closed. */
      closed = new EventEmitter();
      /** Event emitted every time the AccordionItem is opened. */
      opened = new EventEmitter();
      /** Event emitted when the AccordionItem is destroyed. */
      destroyed = new EventEmitter();
      /**
       * Emits whenever the expanded state of the accordion changes.
       * Primarily used to facilitate two-way binding.
       * @docs-private
       */
      expandedChange = new EventEmitter();
      /** The unique AccordionItem id. */
      id = inject(_IdGenerator).getId("cdk-accordion-child-");
      /** Whether the AccordionItem is expanded. */
      get expanded() {
        return this._expanded;
      }
      set expanded(expanded) {
        if (this._expanded !== expanded) {
          this._expanded = expanded;
          this.expandedChange.emit(expanded);
          if (expanded) {
            this.opened.emit();
            const accordionId = this.accordion ? this.accordion.id : this.id;
            this._expansionDispatcher.notify(this.id, accordionId);
          } else {
            this.closed.emit();
          }
          this._changeDetectorRef.markForCheck();
        }
      }
      _expanded = false;
      /** Whether the AccordionItem is disabled. */
      get disabled() {
        return this._disabled();
      }
      set disabled(value) {
        this._disabled.set(value);
      }
      _disabled = signal(false);
      /** Unregister function for _expansionDispatcher. */
      _removeUniqueSelectionListener = () => {
      };
      constructor() {
      }
      ngOnInit() {
        this._removeUniqueSelectionListener = this._expansionDispatcher.listen((id, accordionId) => {
          if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
            this.expanded = false;
          }
        });
        if (this.accordion) {
          this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
      }
      /** Emits an event for the accordion item being destroyed. */
      ngOnDestroy() {
        this.opened.complete();
        this.closed.complete();
        this.destroyed.emit();
        this.destroyed.complete();
        this._removeUniqueSelectionListener();
        this._openCloseAllSubscription.unsubscribe();
      }
      /** Toggles the expanded state of the accordion item. */
      toggle() {
        if (!this.disabled) {
          this.expanded = !this.expanded;
        }
      }
      /** Sets the expanded state of the accordion item to false. */
      close() {
        if (!this.disabled) {
          this.expanded = false;
        }
      }
      /** Sets the expanded state of the accordion item to true. */
      open() {
        if (!this.disabled) {
          this.expanded = true;
        }
      }
      _subscribeToOpenCloseAllActions() {
        return this.accordion._openCloseAllActions.subscribe((expanded) => {
          if (!this.disabled) {
            this.expanded = expanded;
          }
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkAccordionItem, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkAccordionItem, isStandalone: true, selector: "cdk-accordion-item, [cdkAccordionItem]", inputs: { expanded: ["expanded", "expanded", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute] }, outputs: { closed: "closed", opened: "opened", destroyed: "destroyed", expandedChange: "expandedChange" }, providers: [
        // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        { provide: CDK_ACCORDION, useValue: void 0 }
      ], exportAs: ["cdkAccordionItem"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkAccordionItem, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-accordion-item, [cdkAccordionItem]",
        exportAs: "cdkAccordionItem",
        providers: [
          // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
          // registering to the same accordion.
          { provide: CDK_ACCORDION, useValue: void 0 }
        ]
      }]
    }], ctorParameters: () => [], propDecorators: { closed: [{
      type: Output
    }], opened: [{
      type: Output
    }], destroyed: [{
      type: Output
    }], expandedChange: [{
      type: Output
    }], expanded: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    CdkAccordionModule = class _CdkAccordionModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkAccordionModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkAccordionModule, imports: [CdkAccordion, CdkAccordionItem], exports: [CdkAccordion, CdkAccordionItem] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkAccordionModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkAccordionModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CdkAccordion, CdkAccordionItem],
        exports: [CdkAccordion, CdkAccordionItem]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/expansion.mjs
var MAT_ACCORDION, MAT_EXPANSION_PANEL, MatExpansionPanelContent, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelDescription, MatExpansionPanelTitle, MatAccordion, MatExpansionModule;
var init_expansion = __esm({
  "node_modules/@angular/material/fesm2022/expansion.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_accordion();
    init_portal();
    init_a11y();
    init_operators();
    init_keycodes();
    init_esm();
    init_collections();
    init_animation_DfMFjxHu();
    init_private();
    init_structural_styles_CObeNzjn();
    init_common_module_cKSwHniA();
    MAT_ACCORDION = new InjectionToken("MAT_ACCORDION");
    MAT_EXPANSION_PANEL = new InjectionToken("MAT_EXPANSION_PANEL");
    MatExpansionPanelContent = class _MatExpansionPanelContent {
      _template = inject(TemplateRef);
      _expansionPanel = inject(MAT_EXPANSION_PANEL, { optional: true });
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionPanelContent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatExpansionPanelContent, isStandalone: true, selector: "ng-template[matExpansionPanelContent]", ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatExpansionPanelContent, decorators: [{
      type: Directive,
      args: [{
        selector: "ng-template[matExpansionPanelContent]"
      }]
    }], ctorParameters: () => [] });
    MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");
    MatExpansionPanel = class _MatExpansionPanel extends CdkAccordionItem {
      _viewContainerRef = inject(ViewContainerRef);
      _animationsDisabled = _animationsDisabled();
      _document = inject(DOCUMENT);
      _ngZone = inject(NgZone);
      _elementRef = inject(ElementRef);
      _renderer = inject(Renderer2);
      _cleanupTransitionEnd;
      /** Whether the toggle indicator should be hidden. */
      get hideToggle() {
        return this._hideToggle || this.accordion && this.accordion.hideToggle;
      }
      set hideToggle(value) {
        this._hideToggle = value;
      }
      _hideToggle = false;
      /** The position of the expansion indicator. */
      get togglePosition() {
        return this._togglePosition || this.accordion && this.accordion.togglePosition;
      }
      set togglePosition(value) {
        this._togglePosition = value;
      }
      _togglePosition;
      /** An event emitted after the body's expansion animation happens. */
      afterExpand = new EventEmitter();
      /** An event emitted after the body's collapse animation happens. */
      afterCollapse = new EventEmitter();
      /** Stream that emits for changes in `@Input` properties. */
      _inputChanges = new Subject();
      /** Optionally defined accordion the expansion panel belongs to. */
      accordion = inject(MAT_ACCORDION, { optional: true, skipSelf: true });
      /** Content that will be rendered lazily. */
      _lazyContent;
      /** Element containing the panel's user-provided content. */
      _body;
      /** Element wrapping the panel body. */
      _bodyWrapper;
      /** Portal holding the user's content. */
      _portal;
      /** ID for the associated header element. Used for a11y labelling. */
      _headerId = inject(_IdGenerator).getId("mat-expansion-panel-header-");
      constructor() {
        super();
        const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, { optional: true });
        this._expansionDispatcher = inject(UniqueSelectionDispatcher);
        if (defaultOptions) {
          this.hideToggle = defaultOptions.hideToggle;
        }
      }
      /** Determines whether the expansion panel should have spacing between it and its siblings. */
      _hasSpacing() {
        if (this.accordion) {
          return this.expanded && this.accordion.displayMode === "default";
        }
        return false;
      }
      /** Gets the expanded state string. */
      _getExpandedState() {
        return this.expanded ? "expanded" : "collapsed";
      }
      /** Toggles the expanded state of the expansion panel. */
      toggle() {
        this.expanded = !this.expanded;
      }
      /** Sets the expanded state of the expansion panel to false. */
      close() {
        this.expanded = false;
      }
      /** Sets the expanded state of the expansion panel to true. */
      open() {
        this.expanded = true;
      }
      ngAfterContentInit() {
        if (this._lazyContent && this._lazyContent._expansionPanel === this) {
          this.opened.pipe(startWith(null), filter(() => this.expanded && !this._portal), take(1)).subscribe(() => {
            this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
          });
        }
        this._setupAnimationEvents();
      }
      ngOnChanges(changes) {
        this._inputChanges.next(changes);
      }
      ngOnDestroy() {
        super.ngOnDestroy();
        this._cleanupTransitionEnd?.();
        this._inputChanges.complete();
      }
      /** Checks whether the expansion panel's content contains the currently-focused element. */
      _containsFocus() {
        if (this._body) {
          const focusedElement = this._document.activeElement;
          const bodyElement = this._body.nativeElement;
          return focusedElement === bodyElement || bodyElement.contains(focusedElement);
        }
        return false;
      }
      _transitionEndListener = ({ target, propertyName }) => {
        if (target === this._bodyWrapper?.nativeElement && propertyName === "grid-template-rows") {
          this._ngZone.run(() => {
            if (this.expanded) {
              this.afterExpand.emit();
            } else {
              this.afterCollapse.emit();
            }
          });
        }
      };
      _setupAnimationEvents() {
        this._ngZone.runOutsideAngular(() => {
          if (this._animationsDisabled) {
            this.opened.subscribe(() => this._ngZone.run(() => this.afterExpand.emit()));
            this.closed.subscribe(() => this._ngZone.run(() => this.afterCollapse.emit()));
          } else {
            setTimeout(() => {
              const element = this._elementRef.nativeElement;
              this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this._transitionEndListener);
              element.classList.add("mat-expansion-panel-animations-enabled");
            }, 200);
          }
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionPanel, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatExpansionPanel, isStandalone: true, selector: "mat-expansion-panel", inputs: { hideToggle: ["hideToggle", "hideToggle", booleanAttribute], togglePosition: "togglePosition" }, outputs: { afterExpand: "afterExpand", afterCollapse: "afterCollapse" }, host: { properties: { "class.mat-expanded": "expanded", "class.mat-expansion-panel-spacing": "_hasSpacing()" }, classAttribute: "mat-expansion-panel" }, providers: [
        // Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        { provide: MAT_ACCORDION, useValue: void 0 },
        { provide: MAT_EXPANSION_PANEL, useExisting: _MatExpansionPanel }
      ], queries: [{ propertyName: "_lazyContent", first: true, predicate: MatExpansionPanelContent, descendants: true }], viewQueries: [{ propertyName: "_body", first: true, predicate: ["body"], descendants: true }, { propertyName: "_bodyWrapper", first: true, predicate: ["bodyWrapper"], descendants: true }], exportAs: ["matExpansionPanel"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports, template: `<ng-content select="mat-expansion-panel-header"></ng-content>
<div class="mat-expansion-panel-content-wrapper" [attr.inert]="expanded ? null : ''" #bodyWrapper>
  <div class="mat-expansion-panel-content"
       role="region"
       [attr.aria-labelledby]="_headerId"
       [id]="id"
       #body>
    <div class="mat-expansion-panel-body">
      <ng-content></ng-content>
      <ng-template [cdkPortalOutlet]="_portal"></ng-template>
    </div>
    <ng-content select="mat-action-row"></ng-content>
  </div>
</div>
`, styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"], dependencies: [{ kind: "directive", type: CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatExpansionPanel, decorators: [{
      type: Component,
      args: [{ selector: "mat-expansion-panel", exportAs: "matExpansionPanel", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
        // Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        { provide: MAT_ACCORDION, useValue: void 0 },
        { provide: MAT_EXPANSION_PANEL, useExisting: MatExpansionPanel }
      ], host: {
        "class": "mat-expansion-panel",
        "[class.mat-expanded]": "expanded",
        "[class.mat-expansion-panel-spacing]": "_hasSpacing()"
      }, imports: [CdkPortalOutlet], template: `<ng-content select="mat-expansion-panel-header"></ng-content>
<div class="mat-expansion-panel-content-wrapper" [attr.inert]="expanded ? null : ''" #bodyWrapper>
  <div class="mat-expansion-panel-content"
       role="region"
       [attr.aria-labelledby]="_headerId"
       [id]="id"
       #body>
    <div class="mat-expansion-panel-body">
      <ng-content></ng-content>
      <ng-template [cdkPortalOutlet]="_portal"></ng-template>
    </div>
    <ng-content select="mat-action-row"></ng-content>
  </div>
</div>
`, styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"] }]
    }], ctorParameters: () => [], propDecorators: { hideToggle: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], togglePosition: [{
      type: Input
    }], afterExpand: [{
      type: Output
    }], afterCollapse: [{
      type: Output
    }], _lazyContent: [{
      type: ContentChild,
      args: [MatExpansionPanelContent]
    }], _body: [{
      type: ViewChild,
      args: ["body"]
    }], _bodyWrapper: [{
      type: ViewChild,
      args: ["bodyWrapper"]
    }] } });
    MatExpansionPanelActionRow = class _MatExpansionPanelActionRow {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionPanelActionRow, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatExpansionPanelActionRow, isStandalone: true, selector: "mat-action-row", host: { classAttribute: "mat-action-row" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatExpansionPanelActionRow, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-action-row",
        host: {
          class: "mat-action-row"
        }
      }]
    }] });
    MatExpansionPanelHeader = class _MatExpansionPanelHeader {
      panel = inject(MatExpansionPanel, { host: true });
      _element = inject(ElementRef);
      _focusMonitor = inject(FocusMonitor);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _parentChangeSubscription = Subscription.EMPTY;
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        const panel = this.panel;
        const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, { optional: true });
        const tabIndex = inject(new HostAttributeToken("tabindex"), { optional: true });
        const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(filter((changes) => !!(changes["hideToggle"] || changes["togglePosition"]))) : EMPTY;
        this.tabIndex = parseInt(tabIndex || "") || 0;
        this._parentChangeSubscription = merge(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(filter((changes) => {
          return !!(changes["hideToggle"] || changes["disabled"] || changes["togglePosition"]);
        }))).subscribe(() => this._changeDetectorRef.markForCheck());
        panel.closed.pipe(filter(() => panel._containsFocus())).subscribe(() => this._focusMonitor.focusVia(this._element, "program"));
        if (defaultOptions) {
          this.expandedHeight = defaultOptions.expandedHeight;
          this.collapsedHeight = defaultOptions.collapsedHeight;
        }
      }
      /** Height of the header while the panel is expanded. */
      expandedHeight;
      /** Height of the header while the panel is collapsed. */
      collapsedHeight;
      /** Tab index of the header. */
      tabIndex = 0;
      /**
       * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
       * @docs-private
       */
      get disabled() {
        return this.panel.disabled;
      }
      /** Toggles the expanded state of the panel. */
      _toggle() {
        if (!this.disabled) {
          this.panel.toggle();
        }
      }
      /** Gets whether the panel is expanded. */
      _isExpanded() {
        return this.panel.expanded;
      }
      /** Gets the expanded state string of the panel. */
      _getExpandedState() {
        return this.panel._getExpandedState();
      }
      /** Gets the panel id. */
      _getPanelId() {
        return this.panel.id;
      }
      /** Gets the toggle position for the header. */
      _getTogglePosition() {
        return this.panel.togglePosition;
      }
      /** Gets whether the expand indicator should be shown. */
      _showToggle() {
        return !this.panel.hideToggle && !this.panel.disabled;
      }
      /**
       * Gets the current height of the header. Null if no custom height has been
       * specified, and if the default height from the stylesheet should be used.
       */
      _getHeaderHeight() {
        const isExpanded = this._isExpanded();
        if (isExpanded && this.expandedHeight) {
          return this.expandedHeight;
        } else if (!isExpanded && this.collapsedHeight) {
          return this.collapsedHeight;
        }
        return null;
      }
      /** Handle keydown event calling to toggle() if appropriate. */
      _keydown(event) {
        switch (event.keyCode) {
          // Toggle for space and enter keys.
          case SPACE:
          case ENTER:
            if (!hasModifierKey(event)) {
              event.preventDefault();
              this._toggle();
            }
            break;
          default:
            if (this.panel.accordion) {
              this.panel.accordion._handleHeaderKeydown(event);
            }
            return;
        }
      }
      /**
       * Focuses the panel header. Implemented as a part of `FocusableOption`.
       * @param origin Origin of the action that triggered the focus.
       * @docs-private
       */
      focus(origin, options) {
        if (origin) {
          this._focusMonitor.focusVia(this._element, origin, options);
        } else {
          this._element.nativeElement.focus(options);
        }
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._element).subscribe((origin) => {
          if (origin && this.panel.accordion) {
            this.panel.accordion._handleHeaderFocus(this);
          }
        });
      }
      ngOnDestroy() {
        this._parentChangeSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._element);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionPanelHeader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatExpansionPanelHeader, isStandalone: true, selector: "mat-expansion-panel-header", inputs: { expandedHeight: "expandedHeight", collapsedHeight: "collapsedHeight", tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)] }, host: { attributes: { "role": "button" }, listeners: { "click": "_toggle()", "keydown": "_keydown($event)" }, properties: { "attr.id": "panel._headerId", "attr.tabindex": "disabled ? -1 : tabIndex", "attr.aria-controls": "_getPanelId()", "attr.aria-expanded": "_isExpanded()", "attr.aria-disabled": "panel.disabled", "class.mat-expanded": "_isExpanded()", "class.mat-expansion-toggle-indicator-after": "_getTogglePosition() === 'after'", "class.mat-expansion-toggle-indicator-before": "_getTogglePosition() === 'before'", "style.height": "_getHeaderHeight()" }, classAttribute: "mat-expansion-panel-header mat-focus-indicator" }, ngImport: core_exports, template: '<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n@if (_showToggle()) {\n  <span class="mat-expansion-indicator">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 -960 960 960"\n      aria-hidden="true"\n      focusable="false">\n      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>\n    </svg>\n  </span>\n}\n', styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatExpansionPanelHeader, decorators: [{
      type: Component,
      args: [{ selector: "mat-expansion-panel-header", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "class": "mat-expansion-panel-header mat-focus-indicator",
        "role": "button",
        "[attr.id]": "panel._headerId",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": "_getPanelId()",
        "[attr.aria-expanded]": "_isExpanded()",
        "[attr.aria-disabled]": "panel.disabled",
        "[class.mat-expanded]": "_isExpanded()",
        "[class.mat-expansion-toggle-indicator-after]": `_getTogglePosition() === 'after'`,
        "[class.mat-expansion-toggle-indicator-before]": `_getTogglePosition() === 'before'`,
        "[style.height]": "_getHeaderHeight()",
        "(click)": "_toggle()",
        "(keydown)": "_keydown($event)"
      }, template: '<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n@if (_showToggle()) {\n  <span class="mat-expansion-indicator">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 -960 960 960"\n      aria-hidden="true"\n      focusable="false">\n      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>\n    </svg>\n  </span>\n}\n', styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n'] }]
    }], ctorParameters: () => [], propDecorators: { expandedHeight: [{
      type: Input
    }], collapsedHeight: [{
      type: Input
    }], tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }] } });
    MatExpansionPanelDescription = class _MatExpansionPanelDescription {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionPanelDescription, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatExpansionPanelDescription, isStandalone: true, selector: "mat-panel-description", host: { classAttribute: "mat-expansion-panel-header-description" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatExpansionPanelDescription, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-panel-description",
        host: {
          class: "mat-expansion-panel-header-description"
        }
      }]
    }] });
    MatExpansionPanelTitle = class _MatExpansionPanelTitle {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionPanelTitle, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatExpansionPanelTitle, isStandalone: true, selector: "mat-panel-title", host: { classAttribute: "mat-expansion-panel-header-title" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatExpansionPanelTitle, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-panel-title",
        host: {
          class: "mat-expansion-panel-header-title"
        }
      }]
    }] });
    MatAccordion = class _MatAccordion extends CdkAccordion {
      _keyManager;
      /** Headers belonging to this accordion. */
      _ownHeaders = new QueryList();
      /** All headers inside the accordion. Includes headers inside nested accordions. */
      _headers;
      /** Whether the expansion indicator should be hidden. */
      hideToggle = false;
      /**
       * Display mode used for all expansion panels in the accordion. Currently two display
       * modes exist:
       *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
       *     panel at a different elevation from the rest of the accordion.
       *  flat - no spacing is placed around expanded panels, showing all panels at the same
       *     elevation.
       */
      displayMode = "default";
      /** The position of the expansion indicator. */
      togglePosition = "after";
      ngAfterContentInit() {
        this._headers.changes.pipe(startWith(this._headers)).subscribe((headers) => {
          this._ownHeaders.reset(headers.filter((header) => header.panel.accordion === this));
          this._ownHeaders.notifyOnChanges();
        });
        this._keyManager = new FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
      }
      /** Handles keyboard events coming in from the panel headers. */
      _handleHeaderKeydown(event) {
        this._keyManager.onKeydown(event);
      }
      _handleHeaderFocus(header) {
        this._keyManager.updateActiveItem(header);
      }
      ngOnDestroy() {
        super.ngOnDestroy();
        this._keyManager?.destroy();
        this._ownHeaders.destroy();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatAccordion, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _MatAccordion, isStandalone: true, selector: "mat-accordion", inputs: { hideToggle: ["hideToggle", "hideToggle", booleanAttribute], displayMode: "displayMode", togglePosition: "togglePosition" }, host: { properties: { "class.mat-accordion-multi": "this.multi" }, classAttribute: "mat-accordion" }, providers: [
        {
          provide: MAT_ACCORDION,
          useExisting: _MatAccordion
        }
      ], queries: [{ propertyName: "_headers", predicate: MatExpansionPanelHeader, descendants: true }], exportAs: ["matAccordion"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatAccordion, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-accordion",
        exportAs: "matAccordion",
        providers: [
          {
            provide: MAT_ACCORDION,
            useExisting: MatAccordion
          }
        ],
        host: {
          class: "mat-accordion",
          // Class binding which is only used by the test harness as there is no other
          // way for the harness to detect if multiple panel support is enabled.
          "[class.mat-accordion-multi]": "this.multi"
        }
      }]
    }], propDecorators: { _headers: [{
      type: ContentChildren,
      args: [MatExpansionPanelHeader, { descendants: true }]
    }], hideToggle: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], displayMode: [{
      type: Input
    }], togglePosition: [{
      type: Input
    }] } });
    MatExpansionModule = class _MatExpansionModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionModule, imports: [
        MatCommonModule,
        CdkAccordionModule,
        PortalModule,
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelActionRow,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionPanelContent
      ], exports: [
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelActionRow,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionPanelContent
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatExpansionModule, imports: [
        MatCommonModule,
        CdkAccordionModule,
        PortalModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatExpansionModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          MatCommonModule,
          CdkAccordionModule,
          PortalModule,
          MatAccordion,
          MatExpansionPanel,
          MatExpansionPanelActionRow,
          MatExpansionPanelHeader,
          MatExpansionPanelTitle,
          MatExpansionPanelDescription,
          MatExpansionPanelContent
        ],
        exports: [
          MatAccordion,
          MatExpansionPanel,
          MatExpansionPanelActionRow,
          MatExpansionPanelHeader,
          MatExpansionPanelTitle,
          MatExpansionPanelDescription,
          MatExpansionPanelContent
        ]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/module-CWxMD37a.mjs
function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector, { scrollThrottle: SCROLL_THROTTLE_MS });
}
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
var SCROLL_THROTTLE_MS, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_TOOLTIP_DEFAULT_OPTIONS, PANEL_CLASS, passiveListenerOptions, MIN_VIEWPORT_TOOLTIP_THRESHOLD, UNBOUNDED_ANCHOR_GAP, MIN_HEIGHT, MAX_WIDTH, MatTooltip, TooltipComponent, MatTooltipModule;
var init_module_CWxMD37a = __esm({
  "node_modules/@angular/material/fesm2022/module-CWxMD37a.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_a11y();
    init_overlay();
    init_scrolling();
    init_operators();
    init_coercion();
    init_keycodes();
    init_common();
    init_platform();
    init_bidi();
    init_portal();
    init_esm();
    init_animation_DfMFjxHu();
    init_common_module_cKSwHniA();
    SCROLL_THROTTLE_MS = 20;
    MAT_TOOLTIP_SCROLL_STRATEGY = new InjectionToken("mat-tooltip-scroll-strategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector, { scrollThrottle: SCROLL_THROTTLE_MS });
      }
    });
    MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_TOOLTIP_SCROLL_STRATEGY,
      deps: [],
      useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
    };
    MAT_TOOLTIP_DEFAULT_OPTIONS = new InjectionToken("mat-tooltip-default-options", {
      providedIn: "root",
      factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
    });
    PANEL_CLASS = "tooltip-panel";
    passiveListenerOptions = normalizePassiveListenerOptions({ passive: true });
    MIN_VIEWPORT_TOOLTIP_THRESHOLD = 8;
    UNBOUNDED_ANCHOR_GAP = 8;
    MIN_HEIGHT = 24;
    MAX_WIDTH = 200;
    MatTooltip = class _MatTooltip {
      _elementRef = inject(ElementRef);
      _ngZone = inject(NgZone);
      _platform = inject(Platform);
      _ariaDescriber = inject(AriaDescriber);
      _focusMonitor = inject(FocusMonitor);
      _dir = inject(Directionality);
      _injector = inject(Injector);
      _viewContainerRef = inject(ViewContainerRef);
      _animationsDisabled = _animationsDisabled();
      _defaultOptions = inject(MAT_TOOLTIP_DEFAULT_OPTIONS, {
        optional: true
      });
      _overlayRef;
      _tooltipInstance;
      _overlayPanelClass;
      // Used for styling internally.
      _portal;
      _position = "below";
      _positionAtOrigin = false;
      _disabled = false;
      _tooltipClass;
      _viewInitialized = false;
      _pointerExitEventsInitialized = false;
      _tooltipComponent = TooltipComponent;
      _viewportMargin = 8;
      _currentPosition;
      _cssClassPrefix = "mat-mdc";
      _ariaDescriptionPending;
      _dirSubscribed = false;
      /** Allows the user to define the position of the tooltip relative to the parent element */
      get position() {
        return this._position;
      }
      set position(value) {
        if (value !== this._position) {
          this._position = value;
          if (this._overlayRef) {
            this._updatePosition(this._overlayRef);
            this._tooltipInstance?.show(0);
            this._overlayRef.updatePosition();
          }
        }
      }
      /**
       * Whether tooltip should be relative to the click or touch origin
       * instead of outside the element bounding box.
       */
      get positionAtOrigin() {
        return this._positionAtOrigin;
      }
      set positionAtOrigin(value) {
        this._positionAtOrigin = coerceBooleanProperty(value);
        this._detach();
        this._overlayRef = null;
      }
      /** Disables the display of the tooltip. */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        const isDisabled = coerceBooleanProperty(value);
        if (this._disabled !== isDisabled) {
          this._disabled = isDisabled;
          if (isDisabled) {
            this.hide(0);
          } else {
            this._setupPointerEnterEventsIfNeeded();
          }
          this._syncAriaDescription(this.message);
        }
      }
      /** The default delay in ms before showing the tooltip after show is called */
      get showDelay() {
        return this._showDelay;
      }
      set showDelay(value) {
        this._showDelay = coerceNumberProperty(value);
      }
      _showDelay;
      /** The default delay in ms before hiding the tooltip after hide is called */
      get hideDelay() {
        return this._hideDelay;
      }
      set hideDelay(value) {
        this._hideDelay = coerceNumberProperty(value);
        if (this._tooltipInstance) {
          this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
        }
      }
      _hideDelay;
      /**
       * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
       * uses a long press gesture to show and hide, however it can conflict with the native browser
       * gestures. To work around the conflict, Angular Material disables native gestures on the
       * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
       * elements). The different values for this option configure the touch event handling as follows:
       * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
       *   browser gestures on particular elements. In particular, it allows text selection on inputs
       *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
       * - `on` - Enables touch gestures for all elements and disables native
       *   browser gestures with no exceptions.
       * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
       *   showing on touch devices.
       */
      touchGestures = "auto";
      /** The message to be displayed in the tooltip */
      get message() {
        return this._message;
      }
      set message(value) {
        const oldMessage = this._message;
        this._message = value != null ? String(value).trim() : "";
        if (!this._message && this._isTooltipVisible()) {
          this.hide(0);
        } else {
          this._setupPointerEnterEventsIfNeeded();
          this._updateTooltipMessage();
        }
        this._syncAriaDescription(oldMessage);
      }
      _message = "";
      /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
      get tooltipClass() {
        return this._tooltipClass;
      }
      set tooltipClass(value) {
        this._tooltipClass = value;
        if (this._tooltipInstance) {
          this._setTooltipClass(this._tooltipClass);
        }
      }
      /** Manually-bound passive event listeners. */
      _passiveListeners = [];
      /** Timer started at the last `touchstart` event. */
      _touchstartTimeout = null;
      /** Emits when the component is destroyed. */
      _destroyed = new Subject();
      /** Whether ngOnDestroyed has been called. */
      _isDestroyed = false;
      constructor() {
        const defaultOptions = this._defaultOptions;
        if (defaultOptions) {
          this._showDelay = defaultOptions.showDelay;
          this._hideDelay = defaultOptions.hideDelay;
          if (defaultOptions.position) {
            this.position = defaultOptions.position;
          }
          if (defaultOptions.positionAtOrigin) {
            this.positionAtOrigin = defaultOptions.positionAtOrigin;
          }
          if (defaultOptions.touchGestures) {
            this.touchGestures = defaultOptions.touchGestures;
          }
          if (defaultOptions.tooltipClass) {
            this.tooltipClass = defaultOptions.tooltipClass;
          }
        }
        this._viewportMargin = MIN_VIEWPORT_TOOLTIP_THRESHOLD;
      }
      ngAfterViewInit() {
        this._viewInitialized = true;
        this._setupPointerEnterEventsIfNeeded();
        this._focusMonitor.monitor(this._elementRef).pipe(takeUntil(this._destroyed)).subscribe((origin) => {
          if (!origin) {
            this._ngZone.run(() => this.hide(0));
          } else if (origin === "keyboard") {
            this._ngZone.run(() => this.show());
          }
        });
      }
      /**
       * Dispose the tooltip when destroyed.
       */
      ngOnDestroy() {
        const nativeElement = this._elementRef.nativeElement;
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        if (this._overlayRef) {
          this._overlayRef.dispose();
          this._tooltipInstance = null;
        }
        this._passiveListeners.forEach(([event, listener]) => {
          nativeElement.removeEventListener(event, listener, passiveListenerOptions);
        });
        this._passiveListeners.length = 0;
        this._destroyed.next();
        this._destroyed.complete();
        this._isDestroyed = true;
        this._ariaDescriber.removeDescription(nativeElement, this.message, "tooltip");
        this._focusMonitor.stopMonitoring(nativeElement);
      }
      /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
      show(delay = this.showDelay, origin) {
        if (this.disabled || !this.message || this._isTooltipVisible()) {
          this._tooltipInstance?._cancelPendingAnimations();
          return;
        }
        const overlayRef = this._createOverlay(origin);
        this._detach();
        this._portal = this._portal || new ComponentPortal(this._tooltipComponent, this._viewContainerRef);
        const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
        instance._triggerElement = this._elementRef.nativeElement;
        instance._mouseLeaveHideDelay = this._hideDelay;
        instance.afterHidden().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
        this._setTooltipClass(this._tooltipClass);
        this._updateTooltipMessage();
        instance.show(delay);
      }
      /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
      hide(delay = this.hideDelay) {
        const instance = this._tooltipInstance;
        if (instance) {
          if (instance.isVisible()) {
            instance.hide(delay);
          } else {
            instance._cancelPendingAnimations();
            this._detach();
          }
        }
      }
      /** Shows/hides the tooltip */
      toggle(origin) {
        this._isTooltipVisible() ? this.hide() : this.show(void 0, origin);
      }
      /** Returns true if the tooltip is currently visible to the user */
      _isTooltipVisible() {
        return !!this._tooltipInstance && this._tooltipInstance.isVisible();
      }
      /** Create the overlay config and position strategy */
      _createOverlay(origin) {
        if (this._overlayRef) {
          const existingStrategy = this._overlayRef.getConfig().positionStrategy;
          if ((!this.positionAtOrigin || !origin) && existingStrategy._origin instanceof ElementRef) {
            return this._overlayRef;
          }
          this._detach();
        }
        const scrollableAncestors = this._injector.get(ScrollDispatcher).getAncestorScrollContainers(this._elementRef);
        const panelClass = `${this._cssClassPrefix}-${PANEL_CLASS}`;
        const strategy = createFlexibleConnectedPositionStrategy(this._injector, this.positionAtOrigin ? origin || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);
        strategy.positionChanges.pipe(takeUntil(this._destroyed)).subscribe((change) => {
          this._updateCurrentPositionClass(change.connectionPair);
          if (this._tooltipInstance) {
            if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
              this._ngZone.run(() => this.hide(0));
            }
          }
        });
        this._overlayRef = createOverlayRef(this._injector, {
          direction: this._dir,
          positionStrategy: strategy,
          panelClass: this._overlayPanelClass ? [...this._overlayPanelClass, panelClass] : panelClass,
          scrollStrategy: this._injector.get(MAT_TOOLTIP_SCROLL_STRATEGY)(),
          disableAnimations: this._animationsDisabled
        });
        this._updatePosition(this._overlayRef);
        this._overlayRef.detachments().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
        this._overlayRef.outsidePointerEvents().pipe(takeUntil(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
        this._overlayRef.keydownEvents().pipe(takeUntil(this._destroyed)).subscribe((event) => {
          if (this._isTooltipVisible() && event.keyCode === ESCAPE && !hasModifierKey(event)) {
            event.preventDefault();
            event.stopPropagation();
            this._ngZone.run(() => this.hide(0));
          }
        });
        if (this._defaultOptions?.disableTooltipInteractivity) {
          this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
        }
        if (!this._dirSubscribed) {
          this._dirSubscribed = true;
          this._dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
            if (this._overlayRef) {
              this._updatePosition(this._overlayRef);
            }
          });
        }
        return this._overlayRef;
      }
      /** Detaches the currently-attached tooltip. */
      _detach() {
        if (this._overlayRef && this._overlayRef.hasAttached()) {
          this._overlayRef.detach();
        }
        this._tooltipInstance = null;
      }
      /** Updates the position of the current tooltip. */
      _updatePosition(overlayRef) {
        const position = overlayRef.getConfig().positionStrategy;
        const origin = this._getOrigin();
        const overlay = this._getOverlayPosition();
        position.withPositions([
          this._addOffset(__spreadValues(__spreadValues({}, origin.main), overlay.main)),
          this._addOffset(__spreadValues(__spreadValues({}, origin.fallback), overlay.fallback))
        ]);
      }
      /** Adds the configured offset to a position. Used as a hook for child classes. */
      _addOffset(position) {
        const offset = UNBOUNDED_ANCHOR_GAP;
        const isLtr = !this._dir || this._dir.value == "ltr";
        if (position.originY === "top") {
          position.offsetY = -offset;
        } else if (position.originY === "bottom") {
          position.offsetY = offset;
        } else if (position.originX === "start") {
          position.offsetX = isLtr ? -offset : offset;
        } else if (position.originX === "end") {
          position.offsetX = isLtr ? offset : -offset;
        }
        return position;
      }
      /**
       * Returns the origin position and a fallback position based on the user's position preference.
       * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
       */
      _getOrigin() {
        const isLtr = !this._dir || this._dir.value == "ltr";
        const position = this.position;
        let originPosition;
        if (position == "above" || position == "below") {
          originPosition = { originX: "center", originY: position == "above" ? "top" : "bottom" };
        } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
          originPosition = { originX: "start", originY: "center" };
        } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
          originPosition = { originX: "end", originY: "center" };
        } else if (typeof ngDevMode === "undefined" || ngDevMode) {
          throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(originPosition.originX, originPosition.originY);
        return {
          main: originPosition,
          fallback: { originX: x, originY: y }
        };
      }
      /** Returns the overlay position and a fallback position based on the user's preference */
      _getOverlayPosition() {
        const isLtr = !this._dir || this._dir.value == "ltr";
        const position = this.position;
        let overlayPosition;
        if (position == "above") {
          overlayPosition = { overlayX: "center", overlayY: "bottom" };
        } else if (position == "below") {
          overlayPosition = { overlayX: "center", overlayY: "top" };
        } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
          overlayPosition = { overlayX: "end", overlayY: "center" };
        } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
          overlayPosition = { overlayX: "start", overlayY: "center" };
        } else if (typeof ngDevMode === "undefined" || ngDevMode) {
          throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
        return {
          main: overlayPosition,
          fallback: { overlayX: x, overlayY: y }
        };
      }
      /** Updates the tooltip message and repositions the overlay according to the new message length */
      _updateTooltipMessage() {
        if (this._tooltipInstance) {
          this._tooltipInstance.message = this.message;
          this._tooltipInstance._markForCheck();
          afterNextRender(() => {
            if (this._tooltipInstance) {
              this._overlayRef.updatePosition();
            }
          }, {
            injector: this._injector
          });
        }
      }
      /** Updates the tooltip class */
      _setTooltipClass(tooltipClass) {
        if (this._tooltipInstance) {
          this._tooltipInstance.tooltipClass = tooltipClass;
          this._tooltipInstance._markForCheck();
        }
      }
      /** Inverts an overlay position. */
      _invertPosition(x, y) {
        if (this.position === "above" || this.position === "below") {
          if (y === "top") {
            y = "bottom";
          } else if (y === "bottom") {
            y = "top";
          }
        } else {
          if (x === "end") {
            x = "start";
          } else if (x === "start") {
            x = "end";
          }
        }
        return { x, y };
      }
      /** Updates the class on the overlay panel based on the current position of the tooltip. */
      _updateCurrentPositionClass(connectionPair) {
        const { overlayY, originX, originY } = connectionPair;
        let newPosition;
        if (overlayY === "center") {
          if (this._dir && this._dir.value === "rtl") {
            newPosition = originX === "end" ? "left" : "right";
          } else {
            newPosition = originX === "start" ? "left" : "right";
          }
        } else {
          newPosition = overlayY === "bottom" && originY === "top" ? "above" : "below";
        }
        if (newPosition !== this._currentPosition) {
          const overlayRef = this._overlayRef;
          if (overlayRef) {
            const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
            overlayRef.removePanelClass(classPrefix + this._currentPosition);
            overlayRef.addPanelClass(classPrefix + newPosition);
          }
          this._currentPosition = newPosition;
        }
      }
      /** Binds the pointer events to the tooltip trigger. */
      _setupPointerEnterEventsIfNeeded() {
        if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
          return;
        }
        if (this._platformSupportsMouseEvents()) {
          this._passiveListeners.push([
            "mouseenter",
            (event) => {
              this._setupPointerExitEventsIfNeeded();
              let point = void 0;
              if (event.x !== void 0 && event.y !== void 0) {
                point = event;
              }
              this.show(void 0, point);
            }
          ]);
        } else if (this.touchGestures !== "off") {
          this._disableNativeGesturesIfNecessary();
          this._passiveListeners.push([
            "touchstart",
            (event) => {
              const touch = event.targetTouches?.[0];
              const origin = touch ? { x: touch.clientX, y: touch.clientY } : void 0;
              this._setupPointerExitEventsIfNeeded();
              if (this._touchstartTimeout) {
                clearTimeout(this._touchstartTimeout);
              }
              const DEFAULT_LONGPRESS_DELAY = 500;
              this._touchstartTimeout = setTimeout(() => {
                this._touchstartTimeout = null;
                this.show(void 0, origin);
              }, this._defaultOptions?.touchLongPressShowDelay ?? DEFAULT_LONGPRESS_DELAY);
            }
          ]);
        }
        this._addListeners(this._passiveListeners);
      }
      _setupPointerExitEventsIfNeeded() {
        if (this._pointerExitEventsInitialized) {
          return;
        }
        this._pointerExitEventsInitialized = true;
        const exitListeners = [];
        if (this._platformSupportsMouseEvents()) {
          exitListeners.push([
            "mouseleave",
            (event) => {
              const newTarget = event.relatedTarget;
              if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
                this.hide();
              }
            }
          ], ["wheel", (event) => this._wheelListener(event)]);
        } else if (this.touchGestures !== "off") {
          this._disableNativeGesturesIfNecessary();
          const touchendListener = () => {
            if (this._touchstartTimeout) {
              clearTimeout(this._touchstartTimeout);
            }
            this.hide(this._defaultOptions?.touchendHideDelay);
          };
          exitListeners.push(["touchend", touchendListener], ["touchcancel", touchendListener]);
        }
        this._addListeners(exitListeners);
        this._passiveListeners.push(...exitListeners);
      }
      _addListeners(listeners) {
        listeners.forEach(([event, listener]) => {
          this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
        });
      }
      _platformSupportsMouseEvents() {
        return !this._platform.IOS && !this._platform.ANDROID;
      }
      /** Listener for the `wheel` event on the element. */
      _wheelListener(event) {
        if (this._isTooltipVisible()) {
          const elementUnderPointer = this._injector.get(DOCUMENT).elementFromPoint(event.clientX, event.clientY);
          const element = this._elementRef.nativeElement;
          if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
            this.hide();
          }
        }
      }
      /** Disables the native browser gestures, based on how the tooltip has been configured. */
      _disableNativeGesturesIfNecessary() {
        const gestures = this.touchGestures;
        if (gestures !== "off") {
          const element = this._elementRef.nativeElement;
          const style = element.style;
          if (gestures === "on" || element.nodeName !== "INPUT" && element.nodeName !== "TEXTAREA") {
            style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = "none";
          }
          if (gestures === "on" || !element.draggable) {
            style.webkitUserDrag = "none";
          }
          style.touchAction = "none";
          style.webkitTapHighlightColor = "transparent";
        }
      }
      /** Updates the tooltip's ARIA description based on it current state. */
      _syncAriaDescription(oldMessage) {
        if (this._ariaDescriptionPending) {
          return;
        }
        this._ariaDescriptionPending = true;
        this._ariaDescriber.removeDescription(this._elementRef.nativeElement, oldMessage, "tooltip");
        if (!this._isDestroyed) {
          afterNextRender({
            write: () => {
              this._ariaDescriptionPending = false;
              if (this.message && !this.disabled) {
                this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, "tooltip");
              }
            }
          }, { injector: this._injector });
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltip, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatTooltip, isStandalone: true, selector: "[matTooltip]", inputs: { position: ["matTooltipPosition", "position"], positionAtOrigin: ["matTooltipPositionAtOrigin", "positionAtOrigin"], disabled: ["matTooltipDisabled", "disabled"], showDelay: ["matTooltipShowDelay", "showDelay"], hideDelay: ["matTooltipHideDelay", "hideDelay"], touchGestures: ["matTooltipTouchGestures", "touchGestures"], message: ["matTooltip", "message"], tooltipClass: ["matTooltipClass", "tooltipClass"] }, host: { properties: { "class.mat-mdc-tooltip-disabled": "disabled" }, classAttribute: "mat-mdc-tooltip-trigger" }, exportAs: ["matTooltip"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTooltip, decorators: [{
      type: Directive,
      args: [{
        selector: "[matTooltip]",
        exportAs: "matTooltip",
        host: {
          "class": "mat-mdc-tooltip-trigger",
          "[class.mat-mdc-tooltip-disabled]": "disabled"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { position: [{
      type: Input,
      args: ["matTooltipPosition"]
    }], positionAtOrigin: [{
      type: Input,
      args: ["matTooltipPositionAtOrigin"]
    }], disabled: [{
      type: Input,
      args: ["matTooltipDisabled"]
    }], showDelay: [{
      type: Input,
      args: ["matTooltipShowDelay"]
    }], hideDelay: [{
      type: Input,
      args: ["matTooltipHideDelay"]
    }], touchGestures: [{
      type: Input,
      args: ["matTooltipTouchGestures"]
    }], message: [{
      type: Input,
      args: ["matTooltip"]
    }], tooltipClass: [{
      type: Input,
      args: ["matTooltipClass"]
    }] } });
    TooltipComponent = class _TooltipComponent {
      _changeDetectorRef = inject(ChangeDetectorRef);
      _elementRef = inject(ElementRef);
      /* Whether the tooltip text overflows to multiple lines */
      _isMultiline = false;
      /** Message to display in the tooltip */
      message;
      /** Classes to be added to the tooltip. Supports the same syntax as `ngClass`. */
      tooltipClass;
      /** The timeout ID of any current timer set to show the tooltip */
      _showTimeoutId;
      /** The timeout ID of any current timer set to hide the tooltip */
      _hideTimeoutId;
      /** Element that caused the tooltip to open. */
      _triggerElement;
      /** Amount of milliseconds to delay the closing sequence. */
      _mouseLeaveHideDelay;
      /** Whether animations are currently disabled. */
      _animationsDisabled = _animationsDisabled();
      /** Reference to the internal tooltip element. */
      _tooltip;
      /** Whether interactions on the page should close the tooltip */
      _closeOnInteraction = false;
      /** Whether the tooltip is currently visible. */
      _isVisible = false;
      /** Subject for notifying that the tooltip has been hidden from the view */
      _onHide = new Subject();
      /** Name of the show animation and the class that toggles it. */
      _showAnimation = "mat-mdc-tooltip-show";
      /** Name of the hide animation and the class that toggles it. */
      _hideAnimation = "mat-mdc-tooltip-hide";
      constructor() {
      }
      /**
       * Shows the tooltip with an animation originating from the provided origin
       * @param delay Amount of milliseconds to the delay showing the tooltip.
       */
      show(delay) {
        if (this._hideTimeoutId != null) {
          clearTimeout(this._hideTimeoutId);
        }
        this._showTimeoutId = setTimeout(() => {
          this._toggleVisibility(true);
          this._showTimeoutId = void 0;
        }, delay);
      }
      /**
       * Begins the animation to hide the tooltip after the provided delay in ms.
       * @param delay Amount of milliseconds to delay showing the tooltip.
       */
      hide(delay) {
        if (this._showTimeoutId != null) {
          clearTimeout(this._showTimeoutId);
        }
        this._hideTimeoutId = setTimeout(() => {
          this._toggleVisibility(false);
          this._hideTimeoutId = void 0;
        }, delay);
      }
      /** Returns an observable that notifies when the tooltip has been hidden from view. */
      afterHidden() {
        return this._onHide;
      }
      /** Whether the tooltip is being displayed. */
      isVisible() {
        return this._isVisible;
      }
      ngOnDestroy() {
        this._cancelPendingAnimations();
        this._onHide.complete();
        this._triggerElement = null;
      }
      /**
       * Interactions on the HTML body should close the tooltip immediately as defined in the
       * material design spec.
       * https://material.io/design/components/tooltips.html#behavior
       */
      _handleBodyInteraction() {
        if (this._closeOnInteraction) {
          this.hide(0);
        }
      }
      /**
       * Marks that the tooltip needs to be checked in the next change detection run.
       * Mainly used for rendering the initial text before positioning a tooltip, which
       * can be problematic in components with OnPush change detection.
       */
      _markForCheck() {
        this._changeDetectorRef.markForCheck();
      }
      _handleMouseLeave({ relatedTarget }) {
        if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
          if (this.isVisible()) {
            this.hide(this._mouseLeaveHideDelay);
          } else {
            this._finalizeAnimation(false);
          }
        }
      }
      /**
       * Callback for when the timeout in this.show() gets completed.
       * This method is only needed by the mdc-tooltip, and so it is only implemented
       * in the mdc-tooltip, not here.
       */
      _onShow() {
        this._isMultiline = this._isTooltipMultiline();
        this._markForCheck();
      }
      /** Whether the tooltip text has overflown to the next line */
      _isTooltipMultiline() {
        const rect = this._elementRef.nativeElement.getBoundingClientRect();
        return rect.height > MIN_HEIGHT && rect.width >= MAX_WIDTH;
      }
      /** Event listener dispatched when an animation on the tooltip finishes. */
      _handleAnimationEnd({ animationName }) {
        if (animationName === this._showAnimation || animationName === this._hideAnimation) {
          this._finalizeAnimation(animationName === this._showAnimation);
        }
      }
      /** Cancels any pending animation sequences. */
      _cancelPendingAnimations() {
        if (this._showTimeoutId != null) {
          clearTimeout(this._showTimeoutId);
        }
        if (this._hideTimeoutId != null) {
          clearTimeout(this._hideTimeoutId);
        }
        this._showTimeoutId = this._hideTimeoutId = void 0;
      }
      /** Handles the cleanup after an animation has finished. */
      _finalizeAnimation(toVisible) {
        if (toVisible) {
          this._closeOnInteraction = true;
        } else if (!this.isVisible()) {
          this._onHide.next();
        }
      }
      /** Toggles the visibility of the tooltip element. */
      _toggleVisibility(isVisible) {
        const tooltip = this._tooltip.nativeElement;
        const showClass = this._showAnimation;
        const hideClass = this._hideAnimation;
        tooltip.classList.remove(isVisible ? hideClass : showClass);
        tooltip.classList.add(isVisible ? showClass : hideClass);
        if (this._isVisible !== isVisible) {
          this._isVisible = isVisible;
          this._changeDetectorRef.markForCheck();
        }
        if (isVisible && !this._animationsDisabled && typeof getComputedStyle === "function") {
          const styles = getComputedStyle(tooltip);
          if (styles.getPropertyValue("animation-duration") === "0s" || styles.getPropertyValue("animation-name") === "none") {
            this._animationsDisabled = true;
          }
        }
        if (isVisible) {
          this._onShow();
        }
        if (this._animationsDisabled) {
          tooltip.classList.add("_mat-animation-noopable");
          this._finalizeAnimation(isVisible);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _TooltipComponent, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _TooltipComponent, isStandalone: true, selector: "mat-tooltip-component", host: { attributes: { "aria-hidden": "true" }, listeners: { "mouseleave": "_handleMouseLeave($event)" } }, viewQueries: [{ propertyName: "_tooltip", first: true, predicate: ["tooltip"], descendants: true, static: true }], ngImport: core_exports, template: '<div\n  #tooltip\n  class="mdc-tooltip mat-mdc-tooltip"\n  [ngClass]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mat-mdc-tooltip-surface mdc-tooltip__surface">{{message}}</div>\n</div>\n', styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n'], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: TooltipComponent, decorators: [{
      type: Component,
      args: [{ selector: "mat-tooltip-component", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "(mouseleave)": "_handleMouseLeave($event)",
        "aria-hidden": "true"
      }, imports: [NgClass], template: '<div\n  #tooltip\n  class="mdc-tooltip mat-mdc-tooltip"\n  [ngClass]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mat-mdc-tooltip-surface mdc-tooltip__surface">{{message}}</div>\n</div>\n', styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n'] }]
    }], ctorParameters: () => [], propDecorators: { _tooltip: [{
      type: ViewChild,
      args: ["tooltip", {
        // Use a static query here since we interact directly with
        // the DOM which can happen before `ngAfterViewInit`.
        static: true
      }]
    }] } });
    MatTooltipModule = class _MatTooltipModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltipModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltipModule, imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent], exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltipModule, providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [A11yModule, OverlayModule, MatCommonModule, MatCommonModule, CdkScrollableModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTooltipModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
        exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule],
        providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/tooltip.mjs
var init_tooltip = __esm({
  "node_modules/@angular/material/fesm2022/tooltip.mjs"() {
    "use strict";
    init_module_CWxMD37a();
  }
});

// node_modules/@angular/cdk/fesm2022/tree.mjs
function getTreeNoValidDataSourceError() {
  return Error(`A valid data source must be provided.`);
}
function getTreeMultipleDefaultNodeDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
function getTreeMissingMatchingNodeDefError() {
  return Error(`Could not find a matching node definition for the provided node data.`);
}
function getTreeControlMissingError() {
  return Error(`Could not find a tree control, levelAccessor, or childrenAccessor for the tree.`);
}
function getMultipleTreeControlsError() {
  return Error(`More than one of tree control, levelAccessor, or childrenAccessor were provided.`);
}
function getParentNodeAriaLevel(nodeElement) {
  let parent = nodeElement.parentElement;
  while (parent && !isNodeElement(parent)) {
    parent = parent.parentElement;
  }
  if (!parent) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw Error("Incorrect tree structure containing detached node.");
    } else {
      return -1;
    }
  } else if (parent.classList.contains("cdk-nested-tree-node")) {
    return numberAttribute(parent.getAttribute("aria-level"));
  } else {
    return 0;
  }
}
function isNodeElement(element) {
  const classList = element.classList;
  return !!(classList?.contains("cdk-nested-tree-node") || classList?.contains("cdk-tree"));
}
var CDK_TREE_NODE_OUTLET_NODE, CdkTreeNodeOutlet, CdkTreeNodeOutletContext, CdkTreeNodeDef, CdkTree, CdkTreeNode, CdkNestedTreeNode, cssUnitPattern, CdkTreeNodePadding, CdkTreeNodeToggle, EXPORTED_DECLARATIONS, CdkTreeModule;
var init_tree = __esm({
  "node_modules/@angular/cdk/fesm2022/tree.mjs"() {
    "use strict";
    init_selection_model_BCgC8uEN();
    init_esm();
    init_operators();
    init_core();
    init_core();
    init_tree_key_manager_KnCoIkIC();
    init_directionality_CChdj3az();
    init_data_source_D34wiQZj();
    init_private2();
    CDK_TREE_NODE_OUTLET_NODE = new InjectionToken("CDK_TREE_NODE_OUTLET_NODE");
    CdkTreeNodeOutlet = class _CdkTreeNodeOutlet {
      viewContainer = inject(ViewContainerRef);
      _node = inject(CDK_TREE_NODE_OUTLET_NODE, { optional: true });
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkTreeNodeOutlet, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkTreeNodeOutlet, isStandalone: true, selector: "[cdkTreeNodeOutlet]", ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkTreeNodeOutlet, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkTreeNodeOutlet]"
      }]
    }], ctorParameters: () => [] });
    CdkTreeNodeOutletContext = class {
      /** Data for the node. */
      $implicit;
      /** Depth of the node. */
      level;
      /** Index location of the node. */
      index;
      /** Length of the number of total dataNodes. */
      count;
      constructor(data) {
        this.$implicit = data;
      }
    };
    CdkTreeNodeDef = class _CdkTreeNodeDef {
      /** @docs-private */
      template = inject(TemplateRef);
      /**
       * Function that should return true if this node template should be used for the provided node
       * data and index. If left undefined, this node will be considered the default node template to
       * use when no other when functions return true for the data.
       * For every node, there must be at least one when function that passes or an undefined to
       * default.
       */
      when;
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkTreeNodeDef, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkTreeNodeDef, isStandalone: true, selector: "[cdkTreeNodeDef]", inputs: { when: ["cdkTreeNodeDefWhen", "when"] }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkTreeNodeDef, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkTreeNodeDef]",
        inputs: [{ name: "when", alias: "cdkTreeNodeDefWhen" }]
      }]
    }], ctorParameters: () => [] });
    CdkTree = class _CdkTree {
      _differs = inject(IterableDiffers);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _elementRef = inject(ElementRef);
      _dir = inject(Directionality);
      /** Subject that emits when the component has been destroyed. */
      _onDestroy = new Subject();
      /** Differ used to find the changes in the data provided by the data source. */
      _dataDiffer;
      /** Stores the node definition that does not have a when predicate. */
      _defaultNodeDef;
      /** Data subscription */
      _dataSubscription;
      /** Level of nodes */
      _levels = /* @__PURE__ */ new Map();
      /** The immediate parents for a node. This is `null` if there is no parent. */
      _parents = /* @__PURE__ */ new Map();
      /**
       * Nodes grouped into each set, which is a list of nodes displayed together in the DOM.
       *
       * Lookup key is the parent of a set. Root nodes have key of null.
       *
       * Values is a 'set' of tree nodes. Each tree node maps to a treeitem element. Sets are in the
       * order that it is rendered. Each set maps directly to aria-posinset and aria-setsize attributes.
       */
      _ariaSets = /* @__PURE__ */ new Map();
      /**
       * Provides a stream containing the latest data array to render. Influenced by the tree's
       * stream of view window (what dataNodes are currently on screen).
       * Data source can be an observable of data array, or a data array to render.
       */
      get dataSource() {
        return this._dataSource;
      }
      set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
          this._switchDataSource(dataSource);
        }
      }
      _dataSource;
      /**
       * The tree controller
       *
       * @deprecated Use one of `levelAccessor` or `childrenAccessor` instead. To be removed in a
       * future version.
       * @breaking-change 21.0.0
       */
      treeControl;
      /**
       * Given a data node, determines what tree level the node is at.
       *
       * One of levelAccessor or childrenAccessor must be specified, not both.
       * This is enforced at run-time.
       */
      levelAccessor;
      /**
       * Given a data node, determines what the children of that node are.
       *
       * One of levelAccessor or childrenAccessor must be specified, not both.
       * This is enforced at run-time.
       */
      childrenAccessor;
      /**
       * Tracking function that will be used to check the differences in data changes. Used similarly
       * to `ngFor` `trackBy` function. Optimize node operations by identifying a node based on its data
       * relative to the function to know if a node should be added/removed/moved.
       * Accepts a function that takes two parameters, `index` and `item`.
       */
      trackBy;
      /**
       * Given a data node, determines the key by which we determine whether or not this node is expanded.
       */
      expansionKey;
      // Outlets within the tree's template where the dataNodes will be inserted.
      _nodeOutlet;
      /** The tree node template for the tree */
      _nodeDefs;
      // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
      //     Remove the MAX_VALUE in viewChange
      /**
       * Stream containing the latest information on what rows are being displayed on screen.
       * Can be used by the data source to as a heuristic of what data should be provided.
       */
      viewChange = new BehaviorSubject({
        start: 0,
        end: Number.MAX_VALUE
      });
      /** Keep track of which nodes are expanded. */
      _expansionModel;
      /**
       * Maintain a synchronous cache of flattened data nodes. This will only be
       * populated after initial render, and in certain cases, will be delayed due to
       * relying on Observable `getChildren` calls.
       */
      _flattenedNodes = new BehaviorSubject([]);
      /** The automatically determined node type for the tree. */
      _nodeType = new BehaviorSubject(null);
      /** The mapping between data and the node that is rendered. */
      _nodes = new BehaviorSubject(/* @__PURE__ */ new Map());
      /**
       * Synchronous cache of nodes for the `TreeKeyManager`. This is separate
       * from `_flattenedNodes` so they can be independently updated at different
       * times.
       */
      _keyManagerNodes = new BehaviorSubject([]);
      _keyManagerFactory = inject(TREE_KEY_MANAGER);
      /** The key manager for this tree. Handles focus and activation based on user keyboard input. */
      _keyManager;
      _viewInit = false;
      constructor() {
      }
      ngAfterContentInit() {
        this._initializeKeyManager();
      }
      ngAfterContentChecked() {
        this._updateDefaultNodeDefinition();
        this._subscribeToDataChanges();
      }
      ngOnDestroy() {
        this._nodeOutlet.viewContainer.clear();
        this.viewChange.complete();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (this._dataSource && typeof this._dataSource.disconnect === "function") {
          this.dataSource.disconnect(this);
        }
        if (this._dataSubscription) {
          this._dataSubscription.unsubscribe();
          this._dataSubscription = null;
        }
        this._keyManager?.destroy();
      }
      ngOnInit() {
        this._checkTreeControlUsage();
        this._initializeDataDiffer();
      }
      ngAfterViewInit() {
        this._viewInit = true;
      }
      _updateDefaultNodeDefinition() {
        const defaultNodeDefs = this._nodeDefs.filter((def) => !def.when);
        if (defaultNodeDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getTreeMultipleDefaultNodeDefsError();
        }
        this._defaultNodeDef = defaultNodeDefs[0];
      }
      /**
       * Sets the node type for the tree, if it hasn't been set yet.
       *
       * This will be called by the first node that's rendered in order for the tree
       * to determine what data transformations are required.
       */
      _setNodeTypeIfUnset(newType) {
        const currentType = this._nodeType.value;
        if (currentType === null) {
          this._nodeType.next(newType);
        } else if ((typeof ngDevMode === "undefined" || ngDevMode) && currentType !== newType) {
          console.warn(`Tree is using conflicting node types which can cause unexpected behavior. Please use tree nodes of the same type (e.g. only flat or only nested). Current node type: "${currentType}", new node type "${newType}".`);
        }
      }
      /**
       * Switch to the provided data source by resetting the data and unsubscribing from the current
       * render change subscription if one exists. If the data source is null, interpret this by
       * clearing the node outlet. Otherwise start listening for new data.
       */
      _switchDataSource(dataSource) {
        if (this._dataSource && typeof this._dataSource.disconnect === "function") {
          this.dataSource.disconnect(this);
        }
        if (this._dataSubscription) {
          this._dataSubscription.unsubscribe();
          this._dataSubscription = null;
        }
        if (!dataSource) {
          this._nodeOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
        if (this._nodeDefs) {
          this._subscribeToDataChanges();
        }
      }
      _getExpansionModel() {
        if (!this.treeControl) {
          this._expansionModel ??= new SelectionModel(true);
          return this._expansionModel;
        }
        return this.treeControl.expansionModel;
      }
      /** Set up a subscription for the data provided by the data source. */
      _subscribeToDataChanges() {
        if (this._dataSubscription) {
          return;
        }
        let dataStream;
        if (isDataSource(this._dataSource)) {
          dataStream = this._dataSource.connect(this);
        } else if (isObservable(this._dataSource)) {
          dataStream = this._dataSource;
        } else if (Array.isArray(this._dataSource)) {
          dataStream = of(this._dataSource);
        }
        if (!dataStream) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            throw getTreeNoValidDataSourceError();
          }
          return;
        }
        this._dataSubscription = this._getRenderData(dataStream).pipe(takeUntil(this._onDestroy)).subscribe((renderingData) => {
          this._renderDataChanges(renderingData);
        });
      }
      /** Given an Observable containing a stream of the raw data, returns an Observable containing the RenderingData */
      _getRenderData(dataStream) {
        const expansionModel = this._getExpansionModel();
        return combineLatest([
          dataStream,
          this._nodeType,
          // We don't use the expansion data directly, however we add it here to essentially
          // trigger data rendering when expansion changes occur.
          expansionModel.changed.pipe(startWith(null), tap((expansionChanges) => {
            this._emitExpansionChanges(expansionChanges);
          }))
        ]).pipe(switchMap(([data, nodeType]) => {
          if (nodeType === null) {
            return of({ renderNodes: data, flattenedNodes: null, nodeType });
          }
          return this._computeRenderingData(data, nodeType).pipe(map((convertedData) => __spreadProps(__spreadValues({}, convertedData), { nodeType })));
        }));
      }
      _renderDataChanges(data) {
        if (data.nodeType === null) {
          this.renderNodeChanges(data.renderNodes);
          return;
        }
        this._updateCachedData(data.flattenedNodes);
        this.renderNodeChanges(data.renderNodes);
        this._updateKeyManagerItems(data.flattenedNodes);
      }
      _emitExpansionChanges(expansionChanges) {
        if (!expansionChanges) {
          return;
        }
        const nodes = this._nodes.value;
        for (const added of expansionChanges.added) {
          const node = nodes.get(added);
          node?._emitExpansionState(true);
        }
        for (const removed of expansionChanges.removed) {
          const node = nodes.get(removed);
          node?._emitExpansionState(false);
        }
      }
      _initializeKeyManager() {
        const items = combineLatest([this._keyManagerNodes, this._nodes]).pipe(map(([keyManagerNodes, renderNodes]) => keyManagerNodes.reduce((items2, data) => {
          const node = renderNodes.get(this._getExpansionKey(data));
          if (node) {
            items2.push(node);
          }
          return items2;
        }, [])));
        const keyManagerOptions = {
          trackBy: (node) => this._getExpansionKey(node.data),
          skipPredicate: (node) => !!node.isDisabled,
          typeAheadDebounceInterval: true,
          horizontalOrientation: this._dir.value
        };
        this._keyManager = this._keyManagerFactory(items, keyManagerOptions);
      }
      _initializeDataDiffer() {
        const trackBy = this.trackBy ?? ((_index, item) => this._getExpansionKey(item));
        this._dataDiffer = this._differs.find([]).create(trackBy);
      }
      _checkTreeControlUsage() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          let numTreeControls = 0;
          if (this.treeControl) {
            numTreeControls++;
          }
          if (this.levelAccessor) {
            numTreeControls++;
          }
          if (this.childrenAccessor) {
            numTreeControls++;
          }
          if (!numTreeControls) {
            throw getTreeControlMissingError();
          } else if (numTreeControls > 1) {
            throw getMultipleTreeControlsError();
          }
        }
      }
      /** Check for changes made in the data and render each change (node added/removed/moved). */
      renderNodeChanges(data, dataDiffer = this._dataDiffer, viewContainer = this._nodeOutlet.viewContainer, parentData) {
        const changes = dataDiffer.diff(data);
        if (!changes && !this._viewInit) {
          return;
        }
        changes?.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
          if (item.previousIndex == null) {
            this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
          } else if (currentIndex == null) {
            viewContainer.remove(adjustedPreviousIndex);
          } else {
            const view = viewContainer.get(adjustedPreviousIndex);
            viewContainer.move(view, currentIndex);
          }
        });
        changes?.forEachIdentityChange((record) => {
          const newData = record.item;
          if (record.currentIndex != void 0) {
            const view = viewContainer.get(record.currentIndex);
            view.context.$implicit = newData;
          }
        });
        if (parentData) {
          this._changeDetectorRef.markForCheck();
        } else {
          this._changeDetectorRef.detectChanges();
        }
      }
      /**
       * Finds the matching node definition that should be used for this node data. If there is only
       * one node definition, it is returned. Otherwise, find the node definition that has a when
       * predicate that returns true with the data. If none return true, return the default node
       * definition.
       */
      _getNodeDef(data, i) {
        if (this._nodeDefs.length === 1) {
          return this._nodeDefs.first;
        }
        const nodeDef = this._nodeDefs.find((def) => def.when && def.when(i, data)) || this._defaultNodeDef;
        if (!nodeDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getTreeMissingMatchingNodeDefError();
        }
        return nodeDef;
      }
      /**
       * Create the embedded view for the data node template and place it in the correct index location
       * within the data node view container.
       */
      insertNode(nodeData, index, viewContainer, parentData) {
        const levelAccessor = this._getLevelAccessor();
        const node = this._getNodeDef(nodeData, index);
        const key = this._getExpansionKey(nodeData);
        const context = new CdkTreeNodeOutletContext(nodeData);
        parentData ??= this._parents.get(key) ?? void 0;
        if (levelAccessor) {
          context.level = levelAccessor(nodeData);
        } else if (parentData !== void 0 && this._levels.has(this._getExpansionKey(parentData))) {
          context.level = this._levels.get(this._getExpansionKey(parentData)) + 1;
        } else {
          context.level = 0;
        }
        this._levels.set(key, context.level);
        const container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
        container.createEmbeddedView(node.template, context, index);
        if (CdkTreeNode.mostRecentTreeNode) {
          CdkTreeNode.mostRecentTreeNode.data = nodeData;
        }
      }
      /** Whether the data node is expanded or collapsed. Returns true if it's expanded. */
      isExpanded(dataNode) {
        return !!(this.treeControl?.isExpanded(dataNode) || this._expansionModel?.isSelected(this._getExpansionKey(dataNode)));
      }
      /** If the data node is currently expanded, collapse it. Otherwise, expand it. */
      toggle(dataNode) {
        if (this.treeControl) {
          this.treeControl.toggle(dataNode);
        } else if (this._expansionModel) {
          this._expansionModel.toggle(this._getExpansionKey(dataNode));
        }
      }
      /** Expand the data node. If it is already expanded, does nothing. */
      expand(dataNode) {
        if (this.treeControl) {
          this.treeControl.expand(dataNode);
        } else if (this._expansionModel) {
          this._expansionModel.select(this._getExpansionKey(dataNode));
        }
      }
      /** Collapse the data node. If it is already collapsed, does nothing. */
      collapse(dataNode) {
        if (this.treeControl) {
          this.treeControl.collapse(dataNode);
        } else if (this._expansionModel) {
          this._expansionModel.deselect(this._getExpansionKey(dataNode));
        }
      }
      /**
       * If the data node is currently expanded, collapse it and all its descendants.
       * Otherwise, expand it and all its descendants.
       */
      toggleDescendants(dataNode) {
        if (this.treeControl) {
          this.treeControl.toggleDescendants(dataNode);
        } else if (this._expansionModel) {
          if (this.isExpanded(dataNode)) {
            this.collapseDescendants(dataNode);
          } else {
            this.expandDescendants(dataNode);
          }
        }
      }
      /**
       * Expand the data node and all its descendants. If they are already expanded, does nothing.
       */
      expandDescendants(dataNode) {
        if (this.treeControl) {
          this.treeControl.expandDescendants(dataNode);
        } else if (this._expansionModel) {
          const expansionModel = this._expansionModel;
          expansionModel.select(this._getExpansionKey(dataNode));
          this._getDescendants(dataNode).pipe(take(1), takeUntil(this._onDestroy)).subscribe((children) => {
            expansionModel.select(...children.map((child) => this._getExpansionKey(child)));
          });
        }
      }
      /** Collapse the data node and all its descendants. If it is already collapsed, does nothing. */
      collapseDescendants(dataNode) {
        if (this.treeControl) {
          this.treeControl.collapseDescendants(dataNode);
        } else if (this._expansionModel) {
          const expansionModel = this._expansionModel;
          expansionModel.deselect(this._getExpansionKey(dataNode));
          this._getDescendants(dataNode).pipe(take(1), takeUntil(this._onDestroy)).subscribe((children) => {
            expansionModel.deselect(...children.map((child) => this._getExpansionKey(child)));
          });
        }
      }
      /** Expands all data nodes in the tree. */
      expandAll() {
        if (this.treeControl) {
          this.treeControl.expandAll();
        } else if (this._expansionModel) {
          this._forEachExpansionKey((keys) => this._expansionModel?.select(...keys));
        }
      }
      /** Collapse all data nodes in the tree. */
      collapseAll() {
        if (this.treeControl) {
          this.treeControl.collapseAll();
        } else if (this._expansionModel) {
          this._forEachExpansionKey((keys) => this._expansionModel?.deselect(...keys));
        }
      }
      /** Level accessor, used for compatibility between the old Tree and new Tree */
      _getLevelAccessor() {
        return this.treeControl?.getLevel?.bind(this.treeControl) ?? this.levelAccessor;
      }
      /** Children accessor, used for compatibility between the old Tree and new Tree */
      _getChildrenAccessor() {
        return this.treeControl?.getChildren?.bind(this.treeControl) ?? this.childrenAccessor;
      }
      /**
       * Gets the direct children of a node; used for compatibility between the old tree and the
       * new tree.
       */
      _getDirectChildren(dataNode) {
        const levelAccessor = this._getLevelAccessor();
        const expansionModel = this._expansionModel ?? this.treeControl?.expansionModel;
        if (!expansionModel) {
          return of([]);
        }
        const key = this._getExpansionKey(dataNode);
        const isExpanded = expansionModel.changed.pipe(switchMap((changes) => {
          if (changes.added.includes(key)) {
            return of(true);
          } else if (changes.removed.includes(key)) {
            return of(false);
          }
          return EMPTY;
        }), startWith(this.isExpanded(dataNode)));
        if (levelAccessor) {
          return combineLatest([isExpanded, this._flattenedNodes]).pipe(map(([expanded, flattenedNodes]) => {
            if (!expanded) {
              return [];
            }
            return this._findChildrenByLevel(levelAccessor, flattenedNodes, dataNode, 1);
          }));
        }
        const childrenAccessor = this._getChildrenAccessor();
        if (childrenAccessor) {
          return coerceObservable(childrenAccessor(dataNode) ?? []);
        }
        throw getTreeControlMissingError();
      }
      /**
       * Given the list of flattened nodes, the level accessor, and the level range within
       * which to consider children, finds the children for a given node.
       *
       * For example, for direct children, `levelDelta` would be 1. For all descendants,
       * `levelDelta` would be Infinity.
       */
      _findChildrenByLevel(levelAccessor, flattenedNodes, dataNode, levelDelta) {
        const key = this._getExpansionKey(dataNode);
        const startIndex = flattenedNodes.findIndex((node) => this._getExpansionKey(node) === key);
        const dataNodeLevel = levelAccessor(dataNode);
        const expectedLevel = dataNodeLevel + levelDelta;
        const results = [];
        for (let i = startIndex + 1; i < flattenedNodes.length; i++) {
          const currentLevel = levelAccessor(flattenedNodes[i]);
          if (currentLevel <= dataNodeLevel) {
            break;
          }
          if (currentLevel <= expectedLevel) {
            results.push(flattenedNodes[i]);
          }
        }
        return results;
      }
      /**
       * Adds the specified node component to the tree's internal registry.
       *
       * This primarily facilitates keyboard navigation.
       */
      _registerNode(node) {
        this._nodes.value.set(this._getExpansionKey(node.data), node);
        this._nodes.next(this._nodes.value);
      }
      /** Removes the specified node component from the tree's internal registry. */
      _unregisterNode(node) {
        this._nodes.value.delete(this._getExpansionKey(node.data));
        this._nodes.next(this._nodes.value);
      }
      /**
       * For the given node, determine the level where this node appears in the tree.
       *
       * This is intended to be used for `aria-level` but is 0-indexed.
       */
      _getLevel(node) {
        return this._levels.get(this._getExpansionKey(node));
      }
      /**
       * For the given node, determine the size of the parent's child set.
       *
       * This is intended to be used for `aria-setsize`.
       */
      _getSetSize(dataNode) {
        const set = this._getAriaSet(dataNode);
        return set.length;
      }
      /**
       * For the given node, determine the index (starting from 1) of the node in its parent's child set.
       *
       * This is intended to be used for `aria-posinset`.
       */
      _getPositionInSet(dataNode) {
        const set = this._getAriaSet(dataNode);
        const key = this._getExpansionKey(dataNode);
        return set.findIndex((node) => this._getExpansionKey(node) === key) + 1;
      }
      /** Given a CdkTreeNode, gets the node that renders that node's parent's data. */
      _getNodeParent(node) {
        const parent = this._parents.get(this._getExpansionKey(node.data));
        return parent && this._nodes.value.get(this._getExpansionKey(parent));
      }
      /** Given a CdkTreeNode, gets the nodes that renders that node's child data. */
      _getNodeChildren(node) {
        return this._getDirectChildren(node.data).pipe(map((children) => children.reduce((nodes, child) => {
          const value = this._nodes.value.get(this._getExpansionKey(child));
          if (value) {
            nodes.push(value);
          }
          return nodes;
        }, [])));
      }
      /** `keydown` event handler; this just passes the event to the `TreeKeyManager`. */
      _sendKeydownToKeyManager(event) {
        if (event.target === this._elementRef.nativeElement) {
          this._keyManager.onKeydown(event);
        } else {
          const nodes = this._nodes.getValue();
          for (const [, node] of nodes) {
            if (event.target === node._elementRef.nativeElement) {
              this._keyManager.onKeydown(event);
              break;
            }
          }
        }
      }
      /** Gets all nested descendants of a given node. */
      _getDescendants(dataNode) {
        if (this.treeControl) {
          return of(this.treeControl.getDescendants(dataNode));
        }
        if (this.levelAccessor) {
          const results = this._findChildrenByLevel(this.levelAccessor, this._flattenedNodes.value, dataNode, Infinity);
          return of(results);
        }
        if (this.childrenAccessor) {
          return this._getAllChildrenRecursively(dataNode).pipe(reduce((allChildren, nextChildren) => {
            allChildren.push(...nextChildren);
            return allChildren;
          }, []));
        }
        throw getTreeControlMissingError();
      }
      /**
       * Gets all children and sub-children of the provided node.
       *
       * This will emit multiple times, in the order that the children will appear
       * in the tree, and can be combined with a `reduce` operator.
       */
      _getAllChildrenRecursively(dataNode) {
        if (!this.childrenAccessor) {
          return of([]);
        }
        return coerceObservable(this.childrenAccessor(dataNode)).pipe(take(1), switchMap((children) => {
          for (const child of children) {
            this._parents.set(this._getExpansionKey(child), dataNode);
          }
          return of(...children).pipe(concatMap((child) => concat(of([child]), this._getAllChildrenRecursively(child))));
        }));
      }
      _getExpansionKey(dataNode) {
        return this.expansionKey?.(dataNode) ?? dataNode;
      }
      _getAriaSet(node) {
        const key = this._getExpansionKey(node);
        const parent = this._parents.get(key);
        const parentKey = parent ? this._getExpansionKey(parent) : null;
        const set = this._ariaSets.get(parentKey);
        return set ?? [node];
      }
      /**
       * Finds the parent for the given node. If this is a root node, this
       * returns null. If we're unable to determine the parent, for example,
       * if we don't have cached node data, this returns undefined.
       */
      _findParentForNode(node, index, cachedNodes) {
        if (!cachedNodes.length) {
          return null;
        }
        const currentLevel = this._levels.get(this._getExpansionKey(node)) ?? 0;
        for (let parentIndex = index - 1; parentIndex >= 0; parentIndex--) {
          const parentNode = cachedNodes[parentIndex];
          const parentLevel = this._levels.get(this._getExpansionKey(parentNode)) ?? 0;
          if (parentLevel < currentLevel) {
            return parentNode;
          }
        }
        return null;
      }
      /**
       * Given a set of root nodes and the current node level, flattens any nested
       * nodes into a single array.
       *
       * If any nodes are not expanded, then their children will not be added into the array.
       * This will still traverse all nested children in order to build up our internal data
       * models, but will not include them in the returned array.
       */
      _flattenNestedNodesWithExpansion(nodes, level = 0) {
        const childrenAccessor = this._getChildrenAccessor();
        if (!childrenAccessor) {
          return of([...nodes]);
        }
        return of(...nodes).pipe(concatMap((node) => {
          const parentKey = this._getExpansionKey(node);
          if (!this._parents.has(parentKey)) {
            this._parents.set(parentKey, null);
          }
          this._levels.set(parentKey, level);
          const children = coerceObservable(childrenAccessor(node));
          return concat(of([node]), children.pipe(take(1), tap((childNodes) => {
            this._ariaSets.set(parentKey, [...childNodes ?? []]);
            for (const child of childNodes ?? []) {
              const childKey = this._getExpansionKey(child);
              this._parents.set(childKey, node);
              this._levels.set(childKey, level + 1);
            }
          }), switchMap((childNodes) => {
            if (!childNodes) {
              return of([]);
            }
            return this._flattenNestedNodesWithExpansion(childNodes, level + 1).pipe(map((nestedNodes) => this.isExpanded(node) ? nestedNodes : []));
          })));
        }), reduce((results, children) => {
          results.push(...children);
          return results;
        }, []));
      }
      /**
       * Converts children for certain tree configurations.
       *
       * This also computes parent, level, and group data.
       */
      _computeRenderingData(nodes, nodeType) {
        if (this.childrenAccessor && nodeType === "flat") {
          this._clearPreviousCache();
          this._ariaSets.set(null, [...nodes]);
          return this._flattenNestedNodesWithExpansion(nodes).pipe(map((flattenedNodes) => ({
            renderNodes: flattenedNodes,
            flattenedNodes
          })));
        } else if (this.levelAccessor && nodeType === "nested") {
          const levelAccessor = this.levelAccessor;
          return of(nodes.filter((node) => levelAccessor(node) === 0)).pipe(map((rootNodes) => ({
            renderNodes: rootNodes,
            flattenedNodes: nodes
          })), tap(({ flattenedNodes }) => {
            this._calculateParents(flattenedNodes);
          }));
        } else if (nodeType === "flat") {
          return of({ renderNodes: nodes, flattenedNodes: nodes }).pipe(tap(({ flattenedNodes }) => {
            this._calculateParents(flattenedNodes);
          }));
        } else {
          this._clearPreviousCache();
          this._ariaSets.set(null, [...nodes]);
          return this._flattenNestedNodesWithExpansion(nodes).pipe(map((flattenedNodes) => ({
            renderNodes: nodes,
            flattenedNodes
          })));
        }
      }
      _updateCachedData(flattenedNodes) {
        this._flattenedNodes.next(flattenedNodes);
      }
      _updateKeyManagerItems(flattenedNodes) {
        this._keyManagerNodes.next(flattenedNodes);
      }
      /** Traverse the flattened node data and compute parents, levels, and group data. */
      _calculateParents(flattenedNodes) {
        const levelAccessor = this._getLevelAccessor();
        if (!levelAccessor) {
          return;
        }
        this._clearPreviousCache();
        for (let index = 0; index < flattenedNodes.length; index++) {
          const dataNode = flattenedNodes[index];
          const key = this._getExpansionKey(dataNode);
          this._levels.set(key, levelAccessor(dataNode));
          const parent = this._findParentForNode(dataNode, index, flattenedNodes);
          this._parents.set(key, parent);
          const parentKey = parent ? this._getExpansionKey(parent) : null;
          const group = this._ariaSets.get(parentKey) ?? [];
          group.splice(index, 0, dataNode);
          this._ariaSets.set(parentKey, group);
        }
      }
      /** Invokes a callback with all node expansion keys. */
      _forEachExpansionKey(callback) {
        const toToggle = [];
        const observables = [];
        this._nodes.value.forEach((node) => {
          toToggle.push(this._getExpansionKey(node.data));
          observables.push(this._getDescendants(node.data));
        });
        if (observables.length > 0) {
          combineLatest(observables).pipe(take(1), takeUntil(this._onDestroy)).subscribe((results) => {
            results.forEach((inner) => inner.forEach((r) => toToggle.push(this._getExpansionKey(r))));
            callback(toToggle);
          });
        } else {
          callback(toToggle);
        }
      }
      /** Clears the maps we use to store parents, level & aria-sets in. */
      _clearPreviousCache() {
        this._parents.clear();
        this._levels.clear();
        this._ariaSets.clear();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkTree, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _CdkTree, isStandalone: true, selector: "cdk-tree", inputs: { dataSource: "dataSource", treeControl: "treeControl", levelAccessor: "levelAccessor", childrenAccessor: "childrenAccessor", trackBy: "trackBy", expansionKey: "expansionKey" }, host: { attributes: { "role": "tree" }, listeners: { "keydown": "_sendKeydownToKeyManager($event)" }, classAttribute: "cdk-tree" }, queries: [{ propertyName: "_nodeDefs", predicate: CdkTreeNodeDef, descendants: true }], viewQueries: [{ propertyName: "_nodeOutlet", first: true, predicate: CdkTreeNodeOutlet, descendants: true, static: true }], exportAs: ["cdkTree"], ngImport: core_exports, template: `<ng-container cdkTreeNodeOutlet></ng-container>`, isInline: true, dependencies: [{ kind: "directive", type: CdkTreeNodeOutlet, selector: "[cdkTreeNodeOutlet]" }], changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkTree, decorators: [{
      type: Component,
      args: [{
        selector: "cdk-tree",
        exportAs: "cdkTree",
        template: `<ng-container cdkTreeNodeOutlet></ng-container>`,
        host: {
          "class": "cdk-tree",
          "role": "tree",
          "(keydown)": "_sendKeydownToKeyManager($event)"
        },
        encapsulation: ViewEncapsulation.None,
        // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
        // The view for `CdkTree` consists entirely of templates declared in other views. As they are
        // declared elsewhere, they are checked when their declaration points are checked.
        // tslint:disable-next-line:validate-decorators
        changeDetection: ChangeDetectionStrategy.Default,
        imports: [CdkTreeNodeOutlet]
      }]
    }], ctorParameters: () => [], propDecorators: { dataSource: [{
      type: Input
    }], treeControl: [{
      type: Input
    }], levelAccessor: [{
      type: Input
    }], childrenAccessor: [{
      type: Input
    }], trackBy: [{
      type: Input
    }], expansionKey: [{
      type: Input
    }], _nodeOutlet: [{
      type: ViewChild,
      args: [CdkTreeNodeOutlet, { static: true }]
    }], _nodeDefs: [{
      type: ContentChildren,
      args: [CdkTreeNodeDef, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }] } });
    CdkTreeNode = class _CdkTreeNode {
      _elementRef = inject(ElementRef);
      _tree = inject(CdkTree);
      _tabindex = -1;
      _type = "flat";
      /**
       * The role of the tree node.
       *
       * @deprecated This will be ignored; the tree will automatically determine the appropriate role
       * for tree node. This input will be removed in a future version.
       * @breaking-change 21.0.0
       */
      get role() {
        return "treeitem";
      }
      set role(_role) {
      }
      /**
       * Whether or not this node is expandable.
       *
       * If not using `FlatTreeControl`, or if `isExpandable` is not provided to
       * `NestedTreeControl`, this should be provided for correct node a11y.
       */
      get isExpandable() {
        return this._isExpandable();
      }
      set isExpandable(isExpandable) {
        this._inputIsExpandable = isExpandable;
        if (this.data && !this._isExpandable || !this._inputIsExpandable) {
          return;
        }
        if (this._inputIsExpanded) {
          this.expand();
        } else if (this._inputIsExpanded === false) {
          this.collapse();
        }
      }
      get isExpanded() {
        return this._tree.isExpanded(this._data);
      }
      set isExpanded(isExpanded) {
        this._inputIsExpanded = isExpanded;
        if (isExpanded) {
          this.expand();
        } else {
          this.collapse();
        }
      }
      /**
       * Whether or not this node is disabled. If it's disabled, then the user won't be able to focus
       * or activate this node.
       */
      isDisabled;
      /**
       * The text used to locate this item during typeahead. If not specified, the `textContent` will
       * will be used.
       */
      typeaheadLabel;
      getLabel() {
        return this.typeaheadLabel || this._elementRef.nativeElement.textContent?.trim() || "";
      }
      /** This emits when the node has been programatically activated or activated by keyboard. */
      activation = new EventEmitter();
      /** This emits when the node's expansion status has been changed. */
      expandedChange = new EventEmitter();
      /**
       * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
       * in `CdkTree` and set the data to it.
       */
      static mostRecentTreeNode = null;
      /** Subject that emits when the component has been destroyed. */
      _destroyed = new Subject();
      /** Emits when the node's data has changed. */
      _dataChanges = new Subject();
      _inputIsExpandable = false;
      _inputIsExpanded = void 0;
      /**
       * Flag used to determine whether or not we should be focusing the actual element based on
       * some user interaction (click or focus). On click, we don't forcibly focus the element
       * since the click could trigger some other component that wants to grab its own focus
       * (e.g. menu, dialog).
       */
      _shouldFocus = true;
      _parentNodeAriaLevel;
      /** The tree node's data. */
      get data() {
        return this._data;
      }
      set data(value) {
        if (value !== this._data) {
          this._data = value;
          this._dataChanges.next();
        }
      }
      _data;
      /* If leaf node, return true to not assign aria-expanded attribute */
      get isLeafNode() {
        if (this._tree.treeControl?.isExpandable !== void 0 && !this._tree.treeControl.isExpandable(this._data)) {
          return true;
        } else if (this._tree.treeControl?.isExpandable === void 0 && this._tree.treeControl?.getDescendants(this._data).length === 0) {
          return true;
        }
        return false;
      }
      get level() {
        return this._tree._getLevel(this._data) ?? this._parentNodeAriaLevel;
      }
      /** Determines if the tree node is expandable. */
      _isExpandable() {
        if (this._tree.treeControl) {
          if (this.isLeafNode) {
            return false;
          }
          return true;
        }
        return this._inputIsExpandable;
      }
      /**
       * Determines the value for `aria-expanded`.
       *
       * For non-expandable nodes, this is `null`.
       */
      _getAriaExpanded() {
        if (!this._isExpandable()) {
          return null;
        }
        return String(this.isExpanded);
      }
      /**
       * Determines the size of this node's parent's child set.
       *
       * This is intended to be used for `aria-setsize`.
       */
      _getSetSize() {
        return this._tree._getSetSize(this._data);
      }
      /**
       * Determines the index (starting from 1) of this node in its parent's child set.
       *
       * This is intended to be used for `aria-posinset`.
       */
      _getPositionInSet() {
        return this._tree._getPositionInSet(this._data);
      }
      _changeDetectorRef = inject(ChangeDetectorRef);
      constructor() {
        _CdkTreeNode.mostRecentTreeNode = this;
      }
      ngOnInit() {
        this._parentNodeAriaLevel = getParentNodeAriaLevel(this._elementRef.nativeElement);
        this._tree._getExpansionModel().changed.pipe(map(() => this.isExpanded), distinctUntilChanged(), takeUntil(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
        this._tree._setNodeTypeIfUnset(this._type);
        this._tree._registerNode(this);
      }
      ngOnDestroy() {
        if (_CdkTreeNode.mostRecentTreeNode === this) {
          _CdkTreeNode.mostRecentTreeNode = null;
        }
        this._dataChanges.complete();
        this._destroyed.next();
        this._destroyed.complete();
      }
      getParent() {
        return this._tree._getNodeParent(this) ?? null;
      }
      getChildren() {
        return this._tree._getNodeChildren(this);
      }
      /** Focuses this data node. Implemented for TreeKeyManagerItem. */
      focus() {
        this._tabindex = 0;
        if (this._shouldFocus) {
          this._elementRef.nativeElement.focus();
        }
        this._changeDetectorRef.markForCheck();
      }
      /** Defocus this data node. */
      unfocus() {
        this._tabindex = -1;
        this._changeDetectorRef.markForCheck();
      }
      /** Emits an activation event. Implemented for TreeKeyManagerItem. */
      activate() {
        if (this.isDisabled) {
          return;
        }
        this.activation.next(this._data);
      }
      /** Collapses this data node. Implemented for TreeKeyManagerItem. */
      collapse() {
        if (this.isExpandable) {
          this._tree.collapse(this._data);
        }
      }
      /** Expands this data node. Implemented for TreeKeyManagerItem. */
      expand() {
        if (this.isExpandable) {
          this._tree.expand(this._data);
        }
      }
      /** Makes the node focusable. Implemented for TreeKeyManagerItem. */
      makeFocusable() {
        this._tabindex = 0;
        this._changeDetectorRef.markForCheck();
      }
      _focusItem() {
        if (this.isDisabled) {
          return;
        }
        this._tree._keyManager.focusItem(this);
      }
      _setActiveItem() {
        if (this.isDisabled) {
          return;
        }
        this._shouldFocus = false;
        this._tree._keyManager.focusItem(this);
        this._shouldFocus = true;
      }
      _emitExpansionState(expanded) {
        this.expandedChange.emit(expanded);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkTreeNode, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkTreeNode, isStandalone: true, selector: "cdk-tree-node", inputs: { role: "role", isExpandable: ["isExpandable", "isExpandable", booleanAttribute], isExpanded: "isExpanded", isDisabled: ["isDisabled", "isDisabled", booleanAttribute], typeaheadLabel: ["cdkTreeNodeTypeaheadLabel", "typeaheadLabel"] }, outputs: { activation: "activation", expandedChange: "expandedChange" }, host: { attributes: { "role": "treeitem" }, listeners: { "click": "_setActiveItem()", "focus": "_focusItem()" }, properties: { "attr.aria-expanded": "_getAriaExpanded()", "attr.aria-level": "level + 1", "attr.aria-posinset": "_getPositionInSet()", "attr.aria-setsize": "_getSetSize()", "tabindex": "_tabindex" }, classAttribute: "cdk-tree-node" }, exportAs: ["cdkTreeNode"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkTreeNode, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-tree-node",
        exportAs: "cdkTreeNode",
        host: {
          "class": "cdk-tree-node",
          "[attr.aria-expanded]": "_getAriaExpanded()",
          "[attr.aria-level]": "level + 1",
          "[attr.aria-posinset]": "_getPositionInSet()",
          "[attr.aria-setsize]": "_getSetSize()",
          "[tabindex]": "_tabindex",
          "role": "treeitem",
          "(click)": "_setActiveItem()",
          "(focus)": "_focusItem()"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { role: [{
      type: Input
    }], isExpandable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], isExpanded: [{
      type: Input
    }], isDisabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], typeaheadLabel: [{
      type: Input,
      args: ["cdkTreeNodeTypeaheadLabel"]
    }], activation: [{
      type: Output
    }], expandedChange: [{
      type: Output
    }] } });
    CdkNestedTreeNode = class _CdkNestedTreeNode extends CdkTreeNode {
      _type = "nested";
      _differs = inject(IterableDiffers);
      /** Differ used to find the changes in the data provided by the data source. */
      _dataDiffer;
      /** The children data dataNodes of current node. They will be placed in `CdkTreeNodeOutlet`. */
      _children;
      /** The children node placeholder. */
      nodeOutlet;
      constructor() {
        super();
      }
      ngAfterContentInit() {
        this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);
        this._tree._getDirectChildren(this.data).pipe(takeUntil(this._destroyed)).subscribe((result) => this.updateChildrenNodes(result));
        this.nodeOutlet.changes.pipe(takeUntil(this._destroyed)).subscribe(() => this.updateChildrenNodes());
      }
      ngOnDestroy() {
        this._clear();
        super.ngOnDestroy();
      }
      /** Add children dataNodes to the NodeOutlet */
      updateChildrenNodes(children) {
        const outlet = this._getNodeOutlet();
        if (children) {
          this._children = children;
        }
        if (outlet && this._children) {
          const viewContainer = outlet.viewContainer;
          this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
        } else {
          this._dataDiffer.diff([]);
        }
      }
      /** Clear the children dataNodes. */
      _clear() {
        const outlet = this._getNodeOutlet();
        if (outlet) {
          outlet.viewContainer.clear();
          this._dataDiffer.diff([]);
        }
      }
      /** Gets the outlet for the current node. */
      _getNodeOutlet() {
        const outlets = this.nodeOutlet;
        return outlets && outlets.find((outlet) => !outlet._node || outlet._node === this);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkNestedTreeNode, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkNestedTreeNode, isStandalone: true, selector: "cdk-nested-tree-node", host: { classAttribute: "cdk-nested-tree-node" }, providers: [
        { provide: CdkTreeNode, useExisting: _CdkNestedTreeNode },
        { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: _CdkNestedTreeNode }
      ], queries: [{ propertyName: "nodeOutlet", predicate: CdkTreeNodeOutlet, descendants: true }], exportAs: ["cdkNestedTreeNode"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkNestedTreeNode, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-nested-tree-node",
        exportAs: "cdkNestedTreeNode",
        providers: [
          { provide: CdkTreeNode, useExisting: CdkNestedTreeNode },
          { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: CdkNestedTreeNode }
        ],
        host: {
          "class": "cdk-nested-tree-node"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { nodeOutlet: [{
      type: ContentChildren,
      args: [CdkTreeNodeOutlet, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }] } });
    cssUnitPattern = /([A-Za-z%]+)$/;
    CdkTreeNodePadding = class _CdkTreeNodePadding {
      _treeNode = inject(CdkTreeNode);
      _tree = inject(CdkTree);
      _element = inject(ElementRef);
      _dir = inject(Directionality, { optional: true });
      /** Current padding value applied to the element. Used to avoid unnecessarily hitting the DOM. */
      _currentPadding;
      /** Subject that emits when the component has been destroyed. */
      _destroyed = new Subject();
      /** CSS units used for the indentation value. */
      indentUnits = "px";
      /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
      get level() {
        return this._level;
      }
      set level(value) {
        this._setLevelInput(value);
      }
      _level;
      /**
       * The indent for each level. Can be a number or a CSS string.
       * Default number 40px from material design menu sub-menu spec.
       */
      get indent() {
        return this._indent;
      }
      set indent(indent) {
        this._setIndentInput(indent);
      }
      _indent = 40;
      constructor() {
        this._setPadding();
        this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe(() => this._setPadding(true));
        this._treeNode._dataChanges.subscribe(() => this._setPadding());
      }
      ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
      }
      /** The padding indent value for the tree node. Returns a string with px numbers if not null. */
      _paddingIndent() {
        const nodeLevel = (this._treeNode.data && this._tree._getLevel(this._treeNode.data)) ?? null;
        const level = this._level == null ? nodeLevel : this._level;
        return typeof level === "number" ? `${level * this._indent}${this.indentUnits}` : null;
      }
      _setPadding(forceChange = false) {
        const padding = this._paddingIndent();
        if (padding !== this._currentPadding || forceChange) {
          const element = this._element.nativeElement;
          const paddingProp = this._dir && this._dir.value === "rtl" ? "paddingRight" : "paddingLeft";
          const resetProp = paddingProp === "paddingLeft" ? "paddingRight" : "paddingLeft";
          element.style[paddingProp] = padding || "";
          element.style[resetProp] = "";
          this._currentPadding = padding;
        }
      }
      /**
       * This has been extracted to a util because of TS 4 and VE.
       * View Engine doesn't support property rename inheritance.
       * TS 4.0 doesn't allow properties to override accessors or vice-versa.
       * @docs-private
       */
      _setLevelInput(value) {
        this._level = isNaN(value) ? null : value;
        this._setPadding();
      }
      /**
       * This has been extracted to a util because of TS 4 and VE.
       * View Engine doesn't support property rename inheritance.
       * TS 4.0 doesn't allow properties to override accessors or vice-versa.
       * @docs-private
       */
      _setIndentInput(indent) {
        let value = indent;
        let units = "px";
        if (typeof indent === "string") {
          const parts = indent.split(cssUnitPattern);
          value = parts[0];
          units = parts[1] || units;
        }
        this.indentUnits = units;
        this._indent = numberAttribute(value);
        this._setPadding();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkTreeNodePadding, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkTreeNodePadding, isStandalone: true, selector: "[cdkTreeNodePadding]", inputs: { level: ["cdkTreeNodePadding", "level", numberAttribute], indent: ["cdkTreeNodePaddingIndent", "indent"] }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkTreeNodePadding, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkTreeNodePadding]"
      }]
    }], ctorParameters: () => [], propDecorators: { level: [{
      type: Input,
      args: [{ alias: "cdkTreeNodePadding", transform: numberAttribute }]
    }], indent: [{
      type: Input,
      args: ["cdkTreeNodePaddingIndent"]
    }] } });
    CdkTreeNodeToggle = class _CdkTreeNodeToggle {
      _tree = inject(CdkTree);
      _treeNode = inject(CdkTreeNode);
      /** Whether expand/collapse the node recursively. */
      recursive = false;
      constructor() {
      }
      // Toggle the expanded or collapsed state of this node.
      //
      // Focus this node with expanding or collapsing it. This ensures that the active node will always
      // be visible when expanding and collapsing.
      _toggle() {
        this.recursive ? this._tree.toggleDescendants(this._treeNode.data) : this._tree.toggle(this._treeNode.data);
        this._tree._keyManager.focusItem(this._treeNode);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkTreeNodeToggle, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkTreeNodeToggle, isStandalone: true, selector: "[cdkTreeNodeToggle]", inputs: { recursive: ["cdkTreeNodeToggleRecursive", "recursive", booleanAttribute] }, host: { attributes: { "tabindex": "-1" }, listeners: { "click": "_toggle(); $event.stopPropagation();", "keydown.Enter": "_toggle(); $event.preventDefault();", "keydown.Space": "_toggle(); $event.preventDefault();" } }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkTreeNodeToggle, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkTreeNodeToggle]",
        host: {
          "(click)": "_toggle(); $event.stopPropagation();",
          "(keydown.Enter)": "_toggle(); $event.preventDefault();",
          "(keydown.Space)": "_toggle(); $event.preventDefault();",
          "tabindex": "-1"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { recursive: [{
      type: Input,
      args: [{ alias: "cdkTreeNodeToggleRecursive", transform: booleanAttribute }]
    }] } });
    EXPORTED_DECLARATIONS = [
      CdkNestedTreeNode,
      CdkTreeNodeDef,
      CdkTreeNodePadding,
      CdkTreeNodeToggle,
      CdkTree,
      CdkTreeNode,
      CdkTreeNodeOutlet
    ];
    CdkTreeModule = class _CdkTreeModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkTreeModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkTreeModule, imports: [
        CdkNestedTreeNode,
        CdkTreeNodeDef,
        CdkTreeNodePadding,
        CdkTreeNodeToggle,
        CdkTree,
        CdkTreeNode,
        CdkTreeNodeOutlet
      ], exports: [
        CdkNestedTreeNode,
        CdkTreeNodeDef,
        CdkTreeNodePadding,
        CdkTreeNodeToggle,
        CdkTree,
        CdkTreeNode,
        CdkTreeNodeOutlet
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkTreeModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkTreeModule, decorators: [{
      type: NgModule,
      args: [{
        imports: EXPORTED_DECLARATIONS,
        exports: EXPORTED_DECLARATIONS
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/tree.mjs
function isNoopTreeKeyManager(keyManager) {
  return !!keyManager._isNoopTreeKeyManager;
}
var MatTreeNode, MatTreeNodeDef, MatNestedTreeNode, MatTreeNodePadding, MatTreeNodeOutlet, MatTree, MatTreeNodeToggle, MAT_TREE_DIRECTIVES, MatTreeModule;
var init_tree2 = __esm({
  "node_modules/@angular/material/fesm2022/tree.mjs"() {
    "use strict";
    init_tree();
    init_core();
    init_core();
    init_common_module_cKSwHniA();
    MatTreeNode = class _MatTreeNode extends CdkTreeNode {
      /**
       * The tabindex of the tree node.
       *
       * @deprecated By default MatTreeNode manages focus using TreeKeyManager instead of tabIndex.
       *   Recommend to avoid setting tabIndex directly to prevent TreeKeyManager form getting into
       *   an unexpected state. Tabindex to be removed in a future version.
       * @breaking-change 21.0.0 Remove this attribute.
       */
      get tabIndexInputBinding() {
        return this._tabIndexInputBinding;
      }
      set tabIndexInputBinding(value) {
        this._tabIndexInputBinding = value;
      }
      _tabIndexInputBinding;
      /**
       * The default tabindex of the tree node.
       *
       * @deprecated By default MatTreeNode manages focus using TreeKeyManager instead of tabIndex.
       *   Recommend to avoid setting tabIndex directly to prevent TreeKeyManager form getting into
       *   an unexpected state. Tabindex to be removed in a future version.
       * @breaking-change 21.0.0 Remove this attribute.
       */
      defaultTabIndex = 0;
      _getTabindexAttribute() {
        if (isNoopTreeKeyManager(this._tree._keyManager)) {
          return this.tabIndexInputBinding;
        }
        return this._tabindex;
      }
      /**
       * Whether the component is disabled.
       *
       * @deprecated This is an alias for `isDisabled`.
       * @breaking-change 21.0.0 Remove this input
       */
      get disabled() {
        return this.isDisabled;
      }
      set disabled(value) {
        this.isDisabled = value;
      }
      constructor() {
        super();
        const tabIndex = inject(new HostAttributeToken("tabindex"), { optional: true });
        this.tabIndexInputBinding = Number(tabIndex) || this.defaultTabIndex;
      }
      // This is a workaround for https://github.com/angular/angular/issues/23091
      // In aot mode, the lifecycle hooks from parent class are not called.
      ngOnInit() {
        super.ngOnInit();
      }
      ngOnDestroy() {
        super.ngOnDestroy();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTreeNode, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _MatTreeNode, isStandalone: true, selector: "mat-tree-node", inputs: { tabIndexInputBinding: ["tabIndex", "tabIndexInputBinding", (value) => value == null ? 0 : numberAttribute(value)], disabled: ["disabled", "disabled", booleanAttribute] }, outputs: { activation: "activation", expandedChange: "expandedChange" }, host: { listeners: { "click": "_focusItem()" }, properties: { "attr.aria-expanded": "_getAriaExpanded()", "attr.aria-level": "level + 1", "attr.aria-posinset": "_getPositionInSet()", "attr.aria-setsize": "_getSetSize()", "tabindex": "_getTabindexAttribute()" }, classAttribute: "mat-tree-node" }, providers: [{ provide: CdkTreeNode, useExisting: _MatTreeNode }], exportAs: ["matTreeNode"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTreeNode, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-tree-node",
        exportAs: "matTreeNode",
        outputs: ["activation", "expandedChange"],
        providers: [{ provide: CdkTreeNode, useExisting: MatTreeNode }],
        host: {
          "class": "mat-tree-node",
          "[attr.aria-expanded]": "_getAriaExpanded()",
          "[attr.aria-level]": "level + 1",
          "[attr.aria-posinset]": "_getPositionInSet()",
          "[attr.aria-setsize]": "_getSetSize()",
          "(click)": "_focusItem()",
          "[tabindex]": "_getTabindexAttribute()"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { tabIndexInputBinding: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value),
        alias: "tabIndex"
      }]
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    MatTreeNodeDef = class _MatTreeNodeDef extends CdkTreeNodeDef {
      data;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTreeNodeDef, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatTreeNodeDef, isStandalone: true, selector: "[matTreeNodeDef]", inputs: { when: ["matTreeNodeDefWhen", "when"], data: ["matTreeNode", "data"] }, providers: [{ provide: CdkTreeNodeDef, useExisting: _MatTreeNodeDef }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTreeNodeDef, decorators: [{
      type: Directive,
      args: [{
        selector: "[matTreeNodeDef]",
        inputs: [{ name: "when", alias: "matTreeNodeDefWhen" }],
        providers: [{ provide: CdkTreeNodeDef, useExisting: MatTreeNodeDef }]
      }]
    }], propDecorators: { data: [{
      type: Input,
      args: ["matTreeNode"]
    }] } });
    MatNestedTreeNode = class _MatNestedTreeNode extends CdkNestedTreeNode {
      node;
      /**
       * Whether the node is disabled.
       *
       * @deprecated This is an alias for `isDisabled`.
       * @breaking-change 21.0.0 Remove this input
       */
      get disabled() {
        return this.isDisabled;
      }
      set disabled(value) {
        this.isDisabled = value;
      }
      /** Tabindex of the node. */
      get tabIndex() {
        return this.isDisabled ? -1 : this._tabIndex;
      }
      set tabIndex(value) {
        this._tabIndex = value;
      }
      _tabIndex;
      // This is a workaround for https://github.com/angular/angular/issues/19145
      // In aot mode, the lifecycle hooks from parent class are not called.
      // TODO(tinayuangao): Remove when the angular issue #19145 is fixed
      ngOnInit() {
        super.ngOnInit();
      }
      ngAfterContentInit() {
        super.ngAfterContentInit();
      }
      ngOnDestroy() {
        super.ngOnDestroy();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatNestedTreeNode, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _MatNestedTreeNode, isStandalone: true, selector: "mat-nested-tree-node", inputs: { node: ["matNestedTreeNode", "node"], disabled: ["disabled", "disabled", booleanAttribute], tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)] }, outputs: { activation: "activation", expandedChange: "expandedChange" }, host: { classAttribute: "mat-nested-tree-node" }, providers: [
        { provide: CdkNestedTreeNode, useExisting: _MatNestedTreeNode },
        { provide: CdkTreeNode, useExisting: _MatNestedTreeNode },
        { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: _MatNestedTreeNode }
      ], exportAs: ["matNestedTreeNode"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatNestedTreeNode, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-nested-tree-node",
        exportAs: "matNestedTreeNode",
        outputs: ["activation", "expandedChange"],
        providers: [
          { provide: CdkNestedTreeNode, useExisting: MatNestedTreeNode },
          { provide: CdkTreeNode, useExisting: MatNestedTreeNode },
          { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: MatNestedTreeNode }
        ],
        host: {
          "class": "mat-nested-tree-node"
        }
      }]
    }], propDecorators: { node: [{
      type: Input,
      args: ["matNestedTreeNode"]
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }] } });
    MatTreeNodePadding = class _MatTreeNodePadding extends CdkTreeNodePadding {
      /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
      get level() {
        return this._level;
      }
      set level(value) {
        this._setLevelInput(value);
      }
      /** The indent for each level. Default number 40px from material design menu sub-menu spec. */
      get indent() {
        return this._indent;
      }
      set indent(indent) {
        this._setIndentInput(indent);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTreeNodePadding, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _MatTreeNodePadding, isStandalone: true, selector: "[matTreeNodePadding]", inputs: { level: ["matTreeNodePadding", "level", numberAttribute], indent: ["matTreeNodePaddingIndent", "indent"] }, providers: [{ provide: CdkTreeNodePadding, useExisting: _MatTreeNodePadding }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTreeNodePadding, decorators: [{
      type: Directive,
      args: [{
        selector: "[matTreeNodePadding]",
        providers: [{ provide: CdkTreeNodePadding, useExisting: MatTreeNodePadding }]
      }]
    }], propDecorators: { level: [{
      type: Input,
      args: [{ alias: "matTreeNodePadding", transform: numberAttribute }]
    }], indent: [{
      type: Input,
      args: ["matTreeNodePaddingIndent"]
    }] } });
    MatTreeNodeOutlet = class _MatTreeNodeOutlet {
      viewContainer = inject(ViewContainerRef);
      _node = inject(CDK_TREE_NODE_OUTLET_NODE, { optional: true });
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTreeNodeOutlet, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatTreeNodeOutlet, isStandalone: true, selector: "[matTreeNodeOutlet]", providers: [
        {
          provide: CdkTreeNodeOutlet,
          useExisting: _MatTreeNodeOutlet
        }
      ], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTreeNodeOutlet, decorators: [{
      type: Directive,
      args: [{
        selector: "[matTreeNodeOutlet]",
        providers: [
          {
            provide: CdkTreeNodeOutlet,
            useExisting: MatTreeNodeOutlet
          }
        ]
      }]
    }] });
    MatTree = class _MatTree extends CdkTree {
      // Outlets within the tree's template where the dataNodes will be inserted.
      // We need an initializer here to avoid a TS error. The value will be set in `ngAfterViewInit`.
      _nodeOutlet = void 0;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTree, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatTree, isStandalone: true, selector: "mat-tree", host: { classAttribute: "mat-tree" }, providers: [{ provide: CdkTree, useExisting: _MatTree }], viewQueries: [{ propertyName: "_nodeOutlet", first: true, predicate: MatTreeNodeOutlet, descendants: true, static: true }], exportAs: ["matTree"], usesInheritance: true, ngImport: core_exports, template: `<ng-container matTreeNodeOutlet></ng-container>`, isInline: true, styles: [".mat-tree{display:block;background-color:var(--mat-tree-container-background-color, var(--mat-sys-surface))}.mat-tree-node,.mat-nested-tree-node{color:var(--mat-tree-node-text-color, var(--mat-sys-on-surface));font-family:var(--mat-tree-node-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-tree-node-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-tree-node-text-weight, var(--mat-sys-body-large-weight))}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word;min-height:var(--mat-tree-node-min-height, 48px)}.mat-nested-tree-node{border-bottom-width:0}\n"], dependencies: [{ kind: "directive", type: MatTreeNodeOutlet, selector: "[matTreeNodeOutlet]" }], changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTree, decorators: [{
      type: Component,
      args: [{ selector: "mat-tree", exportAs: "matTree", template: `<ng-container matTreeNodeOutlet></ng-container>`, host: {
        "class": "mat-tree"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.Default, providers: [{ provide: CdkTree, useExisting: MatTree }], imports: [MatTreeNodeOutlet], styles: [".mat-tree{display:block;background-color:var(--mat-tree-container-background-color, var(--mat-sys-surface))}.mat-tree-node,.mat-nested-tree-node{color:var(--mat-tree-node-text-color, var(--mat-sys-on-surface));font-family:var(--mat-tree-node-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-tree-node-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-tree-node-text-weight, var(--mat-sys-body-large-weight))}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word;min-height:var(--mat-tree-node-min-height, 48px)}.mat-nested-tree-node{border-bottom-width:0}\n"] }]
    }], propDecorators: { _nodeOutlet: [{
      type: ViewChild,
      args: [MatTreeNodeOutlet, { static: true }]
    }] } });
    MatTreeNodeToggle = class _MatTreeNodeToggle extends CdkTreeNodeToggle {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTreeNodeToggle, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatTreeNodeToggle, isStandalone: true, selector: "[matTreeNodeToggle]", inputs: { recursive: ["matTreeNodeToggleRecursive", "recursive"] }, providers: [{ provide: CdkTreeNodeToggle, useExisting: _MatTreeNodeToggle }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTreeNodeToggle, decorators: [{
      type: Directive,
      args: [{
        selector: "[matTreeNodeToggle]",
        providers: [{ provide: CdkTreeNodeToggle, useExisting: MatTreeNodeToggle }],
        inputs: [{ name: "recursive", alias: "matTreeNodeToggleRecursive" }]
      }]
    }] });
    MAT_TREE_DIRECTIVES = [
      MatNestedTreeNode,
      MatTreeNodeDef,
      MatTreeNodePadding,
      MatTreeNodeToggle,
      MatTree,
      MatTreeNode,
      MatTreeNodeOutlet
    ];
    MatTreeModule = class _MatTreeModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTreeModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTreeModule, imports: [
        CdkTreeModule,
        MatCommonModule,
        MatNestedTreeNode,
        MatTreeNodeDef,
        MatTreeNodePadding,
        MatTreeNodeToggle,
        MatTree,
        MatTreeNode,
        MatTreeNodeOutlet
      ], exports: [
        MatCommonModule,
        MatNestedTreeNode,
        MatTreeNodeDef,
        MatTreeNodePadding,
        MatTreeNodeToggle,
        MatTree,
        MatTreeNode,
        MatTreeNodeOutlet
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTreeModule, imports: [CdkTreeModule, MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTreeModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CdkTreeModule, MatCommonModule, ...MAT_TREE_DIRECTIVES],
        exports: [MatCommonModule, MAT_TREE_DIRECTIVES]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/chips.mjs
var MAT_CHIPS_DEFAULT_OPTIONS, MAT_CHIP_AVATAR, MAT_CHIP_TRAILING_ICON, MAT_CHIP_EDIT, MAT_CHIP_REMOVE, MAT_CHIP, MatChipAction, MatChipAvatar, MatChipTrailingIcon, MatChipEdit, MatChipRemove, MatChip, MatChipOption, MatChipEditInput, MatChipRow, MatChipSet, MatChipListboxChange, MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR, MatChipListbox, MatChipGridChange, MatChipGrid, MatChipInput, CHIP_DECLARATIONS, MatChipsModule;
var init_chips = __esm({
  "node_modules/@angular/material/fesm2022/chips.mjs"() {
    "use strict";
    init_a11y();
    init_keycodes();
    init_private();
    init_core();
    init_core();
    init_esm();
    init_structural_styles_CObeNzjn();
    init_ripple_BYgV4oZC();
    init_animation_DfMFjxHu();
    init_ripple_loader_BnMiRtmT();
    init_operators();
    init_bidi();
    init_forms();
    init_error_options_DCNQlTOA();
    init_error_state_Dtb1IHM();
    init_form_field_CFbrnFED();
    init_common_module_cKSwHniA();
    init_index_BFRo2fUq();
    MAT_CHIPS_DEFAULT_OPTIONS = new InjectionToken("mat-chips-default-options", {
      providedIn: "root",
      factory: () => ({
        separatorKeyCodes: [ENTER]
      })
    });
    MAT_CHIP_AVATAR = new InjectionToken("MatChipAvatar");
    MAT_CHIP_TRAILING_ICON = new InjectionToken("MatChipTrailingIcon");
    MAT_CHIP_EDIT = new InjectionToken("MatChipEdit");
    MAT_CHIP_REMOVE = new InjectionToken("MatChipRemove");
    MAT_CHIP = new InjectionToken("MatChip");
    MatChipAction = class _MatChipAction {
      _elementRef = inject(ElementRef);
      _parentChip = inject(MAT_CHIP);
      /** Whether the action is interactive. */
      isInteractive = true;
      /** Whether this is the primary action in the chip. */
      _isPrimary = true;
      /** Whether this is the leading action in the chip. */
      _isLeading = false;
      // TODO(adolgachev): consolidate usage to secondary css class
      /** Whether the action is disabled. */
      get disabled() {
        return this._disabled || this._parentChip?.disabled || false;
      }
      set disabled(value) {
        this._disabled = value;
      }
      _disabled = false;
      /** Tab index of the action. */
      tabIndex = -1;
      /**
       * Private API to allow focusing this chip when it is disabled.
       */
      _allowFocusWhenDisabled = false;
      /**
       * Determine the value of the disabled attribute for this chip action.
       */
      _getDisabledAttribute() {
        return this.disabled && !this._allowFocusWhenDisabled ? "" : null;
      }
      /**
       * Determine the value of the tabindex attribute for this chip action.
       */
      _getTabindex() {
        return this.disabled && !this._allowFocusWhenDisabled || !this.isInteractive ? null : this.tabIndex.toString();
      }
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        if (this._elementRef.nativeElement.nodeName === "BUTTON") {
          this._elementRef.nativeElement.setAttribute("type", "button");
        }
      }
      focus() {
        this._elementRef.nativeElement.focus();
      }
      _handleClick(event) {
        if (!this.disabled && this.isInteractive && this._isPrimary) {
          event.preventDefault();
          this._parentChip._handlePrimaryActionInteraction();
        }
      }
      _handleKeydown(event) {
        if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this.disabled && this.isInteractive && this._isPrimary && !this._parentChip._isEditing) {
          event.preventDefault();
          this._parentChip._handlePrimaryActionInteraction();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipAction, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _MatChipAction, isStandalone: true, selector: "[matChipAction]", inputs: { isInteractive: "isInteractive", disabled: ["disabled", "disabled", booleanAttribute], tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? -1 : numberAttribute(value)], _allowFocusWhenDisabled: "_allowFocusWhenDisabled" }, host: { listeners: { "click": "_handleClick($event)", "keydown": "_handleKeydown($event)" }, properties: { "class.mdc-evolution-chip__action--primary": "_isPrimary", "class.mdc-evolution-chip__action--presentational": "!isInteractive", "class.mdc-evolution-chip__action--secondary": "!_isPrimary", "class.mdc-evolution-chip__action--trailing": "!_isPrimary && !_isLeading", "attr.tabindex": "_getTabindex()", "attr.disabled": "_getDisabledAttribute()", "attr.aria-disabled": "disabled" }, classAttribute: "mdc-evolution-chip__action mat-mdc-chip-action" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipAction, decorators: [{
      type: Directive,
      args: [{
        selector: "[matChipAction]",
        host: {
          "class": "mdc-evolution-chip__action mat-mdc-chip-action",
          "[class.mdc-evolution-chip__action--primary]": "_isPrimary",
          "[class.mdc-evolution-chip__action--presentational]": "!isInteractive",
          "[class.mdc-evolution-chip__action--secondary]": "!_isPrimary",
          "[class.mdc-evolution-chip__action--trailing]": "!_isPrimary && !_isLeading",
          "[attr.tabindex]": "_getTabindex()",
          "[attr.disabled]": "_getDisabledAttribute()",
          "[attr.aria-disabled]": "disabled",
          "(click)": "_handleClick($event)",
          "(keydown)": "_handleKeydown($event)"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { isInteractive: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? -1 : numberAttribute(value)
      }]
    }], _allowFocusWhenDisabled: [{
      type: Input
    }] } });
    MatChipAvatar = class _MatChipAvatar {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipAvatar, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatChipAvatar, isStandalone: true, selector: "mat-chip-avatar, [matChipAvatar]", host: { attributes: { "role": "img" }, classAttribute: "mat-mdc-chip-avatar mdc-evolution-chip__icon mdc-evolution-chip__icon--primary" }, providers: [{ provide: MAT_CHIP_AVATAR, useExisting: _MatChipAvatar }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipAvatar, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-chip-avatar, [matChipAvatar]",
        host: {
          "class": "mat-mdc-chip-avatar mdc-evolution-chip__icon mdc-evolution-chip__icon--primary",
          "role": "img"
        },
        providers: [{ provide: MAT_CHIP_AVATAR, useExisting: MatChipAvatar }]
      }]
    }] });
    MatChipTrailingIcon = class _MatChipTrailingIcon extends MatChipAction {
      /**
       * MDC considers all trailing actions as a remove icon,
       * but we support non-interactive trailing icons.
       */
      isInteractive = false;
      _isPrimary = false;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipTrailingIcon, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatChipTrailingIcon, isStandalone: true, selector: "mat-chip-trailing-icon, [matChipTrailingIcon]", host: { attributes: { "aria-hidden": "true" }, classAttribute: "mat-mdc-chip-trailing-icon mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing" }, providers: [{ provide: MAT_CHIP_TRAILING_ICON, useExisting: _MatChipTrailingIcon }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipTrailingIcon, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-chip-trailing-icon, [matChipTrailingIcon]",
        host: {
          "class": "mat-mdc-chip-trailing-icon mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing",
          "aria-hidden": "true"
        },
        providers: [{ provide: MAT_CHIP_TRAILING_ICON, useExisting: MatChipTrailingIcon }]
      }]
    }] });
    MatChipEdit = class _MatChipEdit extends MatChipAction {
      _isPrimary = false;
      _isLeading = true;
      _handleClick(event) {
        if (!this.disabled) {
          event.stopPropagation();
          event.preventDefault();
          this._parentChip._edit();
        }
      }
      _handleKeydown(event) {
        if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this.disabled) {
          event.stopPropagation();
          event.preventDefault();
          this._parentChip._edit();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipEdit, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatChipEdit, isStandalone: true, selector: "[matChipEdit]", host: { attributes: { "role": "button" }, properties: { "attr.aria-hidden": "null" }, classAttribute: "mat-mdc-chip-edit mat-mdc-chip-avatar mat-focus-indicator mdc-evolution-chip__icon mdc-evolution-chip__icon--primary" }, providers: [{ provide: MAT_CHIP_EDIT, useExisting: _MatChipEdit }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipEdit, decorators: [{
      type: Directive,
      args: [{
        selector: "[matChipEdit]",
        host: {
          "class": "mat-mdc-chip-edit mat-mdc-chip-avatar mat-focus-indicator mdc-evolution-chip__icon mdc-evolution-chip__icon--primary",
          "role": "button",
          "[attr.aria-hidden]": "null"
        },
        providers: [{ provide: MAT_CHIP_EDIT, useExisting: MatChipEdit }]
      }]
    }] });
    MatChipRemove = class _MatChipRemove extends MatChipAction {
      _isPrimary = false;
      _handleClick(event) {
        if (!this.disabled) {
          event.stopPropagation();
          event.preventDefault();
          this._parentChip.remove();
        }
      }
      _handleKeydown(event) {
        if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this.disabled) {
          event.stopPropagation();
          event.preventDefault();
          this._parentChip.remove();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipRemove, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatChipRemove, isStandalone: true, selector: "[matChipRemove]", host: { attributes: { "role": "button" }, properties: { "attr.aria-hidden": "null" }, classAttribute: "mat-mdc-chip-remove mat-mdc-chip-trailing-icon mat-focus-indicator mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing" }, providers: [{ provide: MAT_CHIP_REMOVE, useExisting: _MatChipRemove }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipRemove, decorators: [{
      type: Directive,
      args: [{
        selector: "[matChipRemove]",
        host: {
          "class": "mat-mdc-chip-remove mat-mdc-chip-trailing-icon mat-focus-indicator mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing",
          "role": "button",
          "[attr.aria-hidden]": "null"
        },
        providers: [{ provide: MAT_CHIP_REMOVE, useExisting: MatChipRemove }]
      }]
    }] });
    MatChip = class _MatChip {
      _changeDetectorRef = inject(ChangeDetectorRef);
      _elementRef = inject(ElementRef);
      _tagName = inject(HOST_TAG_NAME);
      _ngZone = inject(NgZone);
      _focusMonitor = inject(FocusMonitor);
      _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
        optional: true
      });
      _document = inject(DOCUMENT);
      /** Emits when the chip is focused. */
      _onFocus = new Subject();
      /** Emits when the chip is blurred. */
      _onBlur = new Subject();
      /** Whether this chip is a basic (unstyled) chip. */
      _isBasicChip;
      /** Role for the root of the chip. */
      role = null;
      /** Whether the chip has focus. */
      _hasFocusInternal = false;
      /** Whether moving focus into the chip is pending. */
      _pendingFocus;
      /** Subscription to changes in the chip's actions. */
      _actionChanges;
      /** Whether animations for the chip are enabled. */
      _animationsDisabled = _animationsDisabled();
      /** All avatars present in the chip. */
      _allLeadingIcons;
      /** All trailing icons present in the chip. */
      _allTrailingIcons;
      /** All edit icons present in the chip. */
      _allEditIcons;
      /** All remove icons present in the chip. */
      _allRemoveIcons;
      _hasFocus() {
        return this._hasFocusInternal;
      }
      /** A unique id for the chip. If none is supplied, it will be auto-generated. */
      id = inject(_IdGenerator).getId("mat-mdc-chip-");
      // TODO(#26104): Consider deprecating and using `_computeAriaAccessibleName` instead.
      // `ariaLabel` may be unnecessary, and `_computeAriaAccessibleName` only supports
      // datepicker's use case.
      /** ARIA label for the content of the chip. */
      ariaLabel = null;
      // TODO(#26104): Consider deprecating and using `_computeAriaAccessibleName` instead.
      // `ariaDescription` may be unnecessary, and `_computeAriaAccessibleName` only supports
      // datepicker's use case.
      /** ARIA description for the content of the chip. */
      ariaDescription = null;
      /** Id of a span that contains this chip's aria description. */
      _ariaDescriptionId = `${this.id}-aria-description`;
      /** Whether the chip list is disabled. */
      _chipListDisabled = false;
      _textElement;
      /**
       * The value of the chip. Defaults to the content inside
       * the `mat-mdc-chip-action-label` element.
       */
      get value() {
        return this._value !== void 0 ? this._value : this._textElement.textContent.trim();
      }
      set value(value) {
        this._value = value;
      }
      _value;
      // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
      /**
       * Theme color of the chip. This API is supported in M2 themes only, it has no
       * effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/chips/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /**
       * Determines whether or not the chip displays the remove styling and emits (removed) events.
       */
      removable = true;
      /**
       * Colors the chip for emphasis as if it were selected.
       */
      highlighted = false;
      /** Whether the ripple effect is disabled or not. */
      disableRipple = false;
      /** Whether the chip is disabled. */
      get disabled() {
        return this._disabled || this._chipListDisabled;
      }
      set disabled(value) {
        this._disabled = value;
      }
      _disabled = false;
      /** Emitted when a chip is to be removed. */
      removed = new EventEmitter();
      /** Emitted when the chip is destroyed. */
      destroyed = new EventEmitter();
      /** The unstyled chip selector for this component. */
      basicChipAttrName = "mat-basic-chip";
      /** The chip's leading icon. */
      leadingIcon;
      /** The chip's leading edit icon. */
      editIcon;
      /** The chip's trailing icon. */
      trailingIcon;
      /** The chip's trailing remove icon. */
      removeIcon;
      /** Action receiving the primary set of user interactions. */
      primaryAction;
      /**
       * Handles the lazy creation of the MatChip ripple.
       * Used to improve initial load time of large applications.
       */
      _rippleLoader = inject(MatRippleLoader);
      _injector = inject(Injector);
      constructor() {
        const styleLoader = inject(_CdkPrivateStyleLoader);
        styleLoader.load(_StructuralStylesLoader);
        styleLoader.load(_VisuallyHiddenLoader);
        this._monitorFocus();
        this._rippleLoader?.configureRipple(this._elementRef.nativeElement, {
          className: "mat-mdc-chip-ripple",
          disabled: this._isRippleDisabled()
        });
      }
      ngOnInit() {
        this._isBasicChip = this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName) || this._tagName.toLowerCase() === this.basicChipAttrName;
      }
      ngAfterViewInit() {
        this._textElement = this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label");
        if (this._pendingFocus) {
          this._pendingFocus = false;
          this.focus();
        }
      }
      ngAfterContentInit() {
        this._actionChanges = merge(this._allLeadingIcons.changes, this._allTrailingIcons.changes, this._allEditIcons.changes, this._allRemoveIcons.changes).subscribe(() => this._changeDetectorRef.markForCheck());
      }
      ngDoCheck() {
        this._rippleLoader.setDisabled(this._elementRef.nativeElement, this._isRippleDisabled());
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
        this._actionChanges?.unsubscribe();
        this.destroyed.emit({ chip: this });
        this.destroyed.complete();
      }
      /**
       * Allows for programmatic removal of the chip.
       *
       * Informs any listeners of the removal request. Does not remove the chip from the DOM.
       */
      remove() {
        if (this.removable) {
          this.removed.emit({ chip: this });
        }
      }
      /** Whether or not the ripple should be disabled. */
      _isRippleDisabled() {
        return this.disabled || this.disableRipple || this._animationsDisabled || this._isBasicChip || !!this._globalRippleOptions?.disabled;
      }
      /** Returns whether the chip has a trailing icon. */
      _hasTrailingIcon() {
        return !!(this.trailingIcon || this.removeIcon);
      }
      /** Handles keyboard events on the chip. */
      _handleKeydown(event) {
        if (event.keyCode === BACKSPACE && !event.repeat || event.keyCode === DELETE) {
          event.preventDefault();
          this.remove();
        }
      }
      /** Allows for programmatic focusing of the chip. */
      focus() {
        if (!this.disabled) {
          if (this.primaryAction) {
            this.primaryAction.focus();
          } else {
            this._pendingFocus = true;
          }
        }
      }
      /** Gets the action that contains a specific target node. */
      _getSourceAction(target) {
        return this._getActions().find((action) => {
          const element = action._elementRef.nativeElement;
          return element === target || element.contains(target);
        });
      }
      /** Gets all of the actions within the chip. */
      _getActions() {
        const result = [];
        if (this.editIcon) {
          result.push(this.editIcon);
        }
        if (this.primaryAction) {
          result.push(this.primaryAction);
        }
        if (this.removeIcon) {
          result.push(this.removeIcon);
        }
        if (this.trailingIcon) {
          result.push(this.trailingIcon);
        }
        return result;
      }
      /** Handles interactions with the primary action of the chip. */
      _handlePrimaryActionInteraction() {
      }
      /** Handles interactions with the edit action of the chip. */
      _edit(event) {
      }
      /** Starts the focus monitoring process on the chip. */
      _monitorFocus() {
        this._focusMonitor.monitor(this._elementRef, true).subscribe((origin) => {
          const hasFocus = origin !== null;
          if (hasFocus !== this._hasFocusInternal) {
            this._hasFocusInternal = hasFocus;
            if (hasFocus) {
              this._onFocus.next({ chip: this });
            } else {
              this._changeDetectorRef.markForCheck();
              setTimeout(() => this._ngZone.run(() => this._onBlur.next({ chip: this })));
            }
          }
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChip, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatChip, isStandalone: true, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: { role: "role", id: "id", ariaLabel: ["aria-label", "ariaLabel"], ariaDescription: ["aria-description", "ariaDescription"], value: "value", color: "color", removable: ["removable", "removable", booleanAttribute], highlighted: ["highlighted", "highlighted", booleanAttribute], disableRipple: ["disableRipple", "disableRipple", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute] }, outputs: { removed: "removed", destroyed: "destroyed" }, host: { listeners: { "keydown": "_handleKeydown($event)" }, properties: { "class": '"mat-" + (color || "primary")', "class.mdc-evolution-chip": "!_isBasicChip", "class.mdc-evolution-chip--disabled": "disabled", "class.mdc-evolution-chip--with-trailing-action": "_hasTrailingIcon()", "class.mdc-evolution-chip--with-primary-graphic": "leadingIcon", "class.mdc-evolution-chip--with-primary-icon": "leadingIcon", "class.mdc-evolution-chip--with-avatar": "leadingIcon", "class.mat-mdc-chip-with-avatar": "leadingIcon", "class.mat-mdc-chip-highlighted": "highlighted", "class.mat-mdc-chip-disabled": "disabled", "class.mat-mdc-basic-chip": "_isBasicChip", "class.mat-mdc-standard-chip": "!_isBasicChip", "class.mat-mdc-chip-with-trailing-icon": "_hasTrailingIcon()", "class._mat-animation-noopable": "_animationsDisabled", "id": "id", "attr.role": "role", "attr.aria-label": "ariaLabel" }, classAttribute: "mat-mdc-chip" }, providers: [{ provide: MAT_CHIP, useExisting: _MatChip }], queries: [{ propertyName: "leadingIcon", first: true, predicate: MAT_CHIP_AVATAR, descendants: true }, { propertyName: "editIcon", first: true, predicate: MAT_CHIP_EDIT, descendants: true }, { propertyName: "trailingIcon", first: true, predicate: MAT_CHIP_TRAILING_ICON, descendants: true }, { propertyName: "removeIcon", first: true, predicate: MAT_CHIP_REMOVE, descendants: true }, { propertyName: "_allLeadingIcons", predicate: MAT_CHIP_AVATAR, descendants: true }, { propertyName: "_allTrailingIcons", predicate: MAT_CHIP_TRAILING_ICON, descendants: true }, { propertyName: "_allEditIcons", predicate: MAT_CHIP_EDIT, descendants: true }, { propertyName: "_allRemoveIcons", predicate: MAT_CHIP_REMOVE, descendants: true }], viewQueries: [{ propertyName: "primaryAction", first: true, predicate: MatChipAction, descendants: true }], exportAs: ["matChip"], ngImport: core_exports, template: '<span class="mat-mdc-chip-focus-overlay"></span>\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary">\n  <span matChipAction [isInteractive]="false">\n    @if (leadingIcon) {\n      <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n        <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n      </span>\n    }\n    <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n      <ng-content></ng-content>\n      <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator"></span>\n    </span>\n  </span>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n', styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}@media(forced-colors: active){.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{forced-color-adjust:none}}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-outline-width, 1px);border-radius:var(--mat-chip-container-shape-radius, 8px);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-outline-color, var(--mat-sys-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--secondary{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary{color:var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary{color:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mat-chip-with-avatar-avatar-size, 24px);height:var(--mat-chip-with-avatar-avatar-size, 24px);font-size:var(--mat-chip-with-avatar-avatar-size, 24px)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic{padding-left:0}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@media(forced-colors: active){.mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mat-mdc-standard-chip{border-radius:var(--mat-chip-container-shape-radius, 8px);height:var(--mat-chip-container-height, 32px)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-container-color, transparent)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mat-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}@media(forced-colors: active){.mat-mdc-standard-chip{outline:solid 1px}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mat-chip-with-avatar-avatar-shape-radius, 24px);width:var(--mat-chip-with-icon-icon-size, 18px);height:var(--mat-chip-with-icon-icon-size, 18px);font-size:var(--mat-chip-with-icon-icon-size, 18px)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-highlighted{--mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));--mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));--mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));--mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mat-chip-with-icon-disabled-icon-opacity, 0.38)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity, 1)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-edit,.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity, 1)}.mat-mdc-chip-edit:focus,.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity, 1)}.mat-mdc-chip-edit::after,.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-edit:hover::after,.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-edit:focus::after,.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mat-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-edit::before,.mat-mdc-chip-remove::before{margin:calc(var(--mat-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-edit::after,.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-edit .mat-icon,.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}@media(forced-colors: active){.mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}}.mat-mdc-chip-action:focus .mat-focus-indicator::before{content:""}.mdc-evolution-chip__icon,.mat-mdc-chip-edit .mat-icon,.mat-mdc-chip-remove .mat-icon{min-height:fit-content}\n'], dependencies: [{ kind: "directive", type: MatChipAction, selector: "[matChipAction]", inputs: ["isInteractive", "disabled", "tabIndex", "_allowFocusWhenDisabled"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChip, decorators: [{
      type: Component,
      args: [{ selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", exportAs: "matChip", host: {
        "class": "mat-mdc-chip",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mdc-evolution-chip]": "!_isBasicChip",
        "[class.mdc-evolution-chip--disabled]": "disabled",
        "[class.mdc-evolution-chip--with-trailing-action]": "_hasTrailingIcon()",
        "[class.mdc-evolution-chip--with-primary-graphic]": "leadingIcon",
        "[class.mdc-evolution-chip--with-primary-icon]": "leadingIcon",
        "[class.mdc-evolution-chip--with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-highlighted]": "highlighted",
        "[class.mat-mdc-chip-disabled]": "disabled",
        "[class.mat-mdc-basic-chip]": "_isBasicChip",
        "[class.mat-mdc-standard-chip]": "!_isBasicChip",
        "[class.mat-mdc-chip-with-trailing-icon]": "_hasTrailingIcon()",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[id]": "id",
        "[attr.role]": "role",
        "[attr.aria-label]": "ariaLabel",
        "(keydown)": "_handleKeydown($event)"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: MAT_CHIP, useExisting: MatChip }], imports: [MatChipAction], template: '<span class="mat-mdc-chip-focus-overlay"></span>\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary">\n  <span matChipAction [isInteractive]="false">\n    @if (leadingIcon) {\n      <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n        <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n      </span>\n    }\n    <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n      <ng-content></ng-content>\n      <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator"></span>\n    </span>\n  </span>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n', styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}@media(forced-colors: active){.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{forced-color-adjust:none}}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-outline-width, 1px);border-radius:var(--mat-chip-container-shape-radius, 8px);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-outline-color, var(--mat-sys-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--secondary{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary{color:var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary{color:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mat-chip-with-avatar-avatar-size, 24px);height:var(--mat-chip-with-avatar-avatar-size, 24px);font-size:var(--mat-chip-with-avatar-avatar-size, 24px)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic{padding-left:0}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@media(forced-colors: active){.mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mat-mdc-standard-chip{border-radius:var(--mat-chip-container-shape-radius, 8px);height:var(--mat-chip-container-height, 32px)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-container-color, transparent)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mat-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}@media(forced-colors: active){.mat-mdc-standard-chip{outline:solid 1px}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mat-chip-with-avatar-avatar-shape-radius, 24px);width:var(--mat-chip-with-icon-icon-size, 18px);height:var(--mat-chip-with-icon-icon-size, 18px);font-size:var(--mat-chip-with-icon-icon-size, 18px)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-highlighted{--mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));--mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));--mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));--mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mat-chip-with-icon-disabled-icon-opacity, 0.38)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity, 1)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-edit,.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity, 1)}.mat-mdc-chip-edit:focus,.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity, 1)}.mat-mdc-chip-edit::after,.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-edit:hover::after,.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-edit:focus::after,.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mat-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-edit::before,.mat-mdc-chip-remove::before{margin:calc(var(--mat-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-edit::after,.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-edit .mat-icon,.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}@media(forced-colors: active){.mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}}.mat-mdc-chip-action:focus .mat-focus-indicator::before{content:""}.mdc-evolution-chip__icon,.mat-mdc-chip-edit .mat-icon,.mat-mdc-chip-remove .mat-icon{min-height:fit-content}\n'] }]
    }], ctorParameters: () => [], propDecorators: { role: [{
      type: Input
    }], _allLeadingIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_AVATAR, { descendants: true }]
    }], _allTrailingIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_TRAILING_ICON, { descendants: true }]
    }], _allEditIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_EDIT, { descendants: true }]
    }], _allRemoveIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_REMOVE, { descendants: true }]
    }], id: [{
      type: Input
    }], ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaDescription: [{
      type: Input,
      args: ["aria-description"]
    }], value: [{
      type: Input
    }], color: [{
      type: Input
    }], removable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], highlighted: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], removed: [{
      type: Output
    }], destroyed: [{
      type: Output
    }], leadingIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_AVATAR]
    }], editIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_EDIT]
    }], trailingIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_TRAILING_ICON]
    }], removeIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_REMOVE]
    }], primaryAction: [{
      type: ViewChild,
      args: [MatChipAction]
    }] } });
    MatChipOption = class _MatChipOption extends MatChip {
      /** Default chip options. */
      _defaultOptions = inject(MAT_CHIPS_DEFAULT_OPTIONS, { optional: true });
      /** Whether the chip list is selectable. */
      chipListSelectable = true;
      /** Whether the chip list is in multi-selection mode. */
      _chipListMultiple = false;
      /** Whether the chip list hides single-selection indicator. */
      _chipListHideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
      /**
       * Whether or not the chip is selectable.
       *
       * When a chip is not selectable, changes to its selected state are always
       * ignored. By default an option chip is selectable, and it becomes
       * non-selectable if its parent chip list is not selectable.
       */
      get selectable() {
        return this._selectable && this.chipListSelectable;
      }
      set selectable(value) {
        this._selectable = value;
        this._changeDetectorRef.markForCheck();
      }
      _selectable = true;
      /** Whether the chip is selected. */
      get selected() {
        return this._selected;
      }
      set selected(value) {
        this._setSelectedState(value, false, true);
      }
      _selected = false;
      /**
       * The ARIA selected applied to the chip. Conforms to WAI ARIA best practices for listbox
       * interaction patterns.
       *
       * From [WAI ARIA Listbox authoring practices guide](
       * https://www.w3.org/WAI/ARIA/apg/patterns/listbox/):
       *  "If any options are selected, each selected option has either aria-selected or aria-checked
       *  set to true. All options that are selectable but not selected have either aria-selected or
       *  aria-checked set to false."
       *
       * Set `aria-selected="false"` on not-selected listbox options that are selectable to fix
       * VoiceOver reading every option as "selected" (#25736).
       */
      get ariaSelected() {
        return this.selectable ? this.selected.toString() : null;
      }
      /** The unstyled chip selector for this component. */
      basicChipAttrName = "mat-basic-chip-option";
      /** Emitted when the chip is selected or deselected. */
      selectionChange = new EventEmitter();
      ngOnInit() {
        super.ngOnInit();
        this.role = "presentation";
      }
      /** Selects the chip. */
      select() {
        this._setSelectedState(true, false, true);
      }
      /** Deselects the chip. */
      deselect() {
        this._setSelectedState(false, false, true);
      }
      /** Selects this chip and emits userInputSelection event */
      selectViaInteraction() {
        this._setSelectedState(true, true, true);
      }
      /** Toggles the current selected state of this chip. */
      toggleSelected(isUserInput = false) {
        this._setSelectedState(!this.selected, isUserInput, true);
        return this.selected;
      }
      _handlePrimaryActionInteraction() {
        if (!this.disabled) {
          this.focus();
          if (this.selectable) {
            this.toggleSelected(true);
          }
        }
      }
      _hasLeadingGraphic() {
        if (this.leadingIcon) {
          return true;
        }
        return !this._chipListHideSingleSelectionIndicator || this._chipListMultiple;
      }
      _setSelectedState(isSelected, isUserInput, emitEvent) {
        if (isSelected !== this.selected) {
          this._selected = isSelected;
          if (emitEvent) {
            this.selectionChange.emit({
              source: this,
              isUserInput,
              selected: this.selected
            });
          }
          this._changeDetectorRef.markForCheck();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipOption, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatChipOption, isStandalone: true, selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", inputs: { selectable: ["selectable", "selectable", booleanAttribute], selected: ["selected", "selected", booleanAttribute] }, outputs: { selectionChange: "selectionChange" }, host: { properties: { "class.mdc-evolution-chip": "!_isBasicChip", "class.mdc-evolution-chip--filter": "!_isBasicChip", "class.mdc-evolution-chip--selectable": "!_isBasicChip", "class.mat-mdc-chip-selected": "selected", "class.mat-mdc-chip-multiple": "_chipListMultiple", "class.mat-mdc-chip-disabled": "disabled", "class.mat-mdc-chip-with-avatar": "leadingIcon", "class.mdc-evolution-chip--disabled": "disabled", "class.mdc-evolution-chip--selected": "selected", "class.mdc-evolution-chip--selecting": "!_animationsDisabled", "class.mdc-evolution-chip--with-trailing-action": "_hasTrailingIcon()", "class.mdc-evolution-chip--with-primary-icon": "leadingIcon", "class.mdc-evolution-chip--with-primary-graphic": "_hasLeadingGraphic()", "class.mdc-evolution-chip--with-avatar": "leadingIcon", "class.mat-mdc-chip-highlighted": "highlighted", "class.mat-mdc-chip-with-trailing-icon": "_hasTrailingIcon()", "attr.tabindex": "null", "attr.aria-label": "null", "attr.aria-description": "null", "attr.role": "role", "id": "id" }, classAttribute: "mat-mdc-chip mat-mdc-chip-option" }, providers: [
        { provide: MatChip, useExisting: _MatChipOption },
        { provide: MAT_CHIP, useExisting: _MatChipOption }
      ], usesInheritance: true, ngImport: core_exports, template: '<span class="mat-mdc-chip-focus-overlay"></span>\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary">\n  <button\n    matChipAction\n    [_allowFocusWhenDisabled]="true"\n    [attr.aria-selected]="ariaSelected"\n    [attr.aria-label]="ariaLabel"\n    [attr.aria-describedby]="_ariaDescriptionId"\n    role="option">\n    @if (_hasLeadingGraphic()) {\n      <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n        <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n        <span class="mdc-evolution-chip__checkmark">\n          <svg\n            class="mdc-evolution-chip__checkmark-svg"\n            viewBox="-2 -3 30 30"\n            focusable="false"\n            aria-hidden="true">\n            <path class="mdc-evolution-chip__checkmark-path"\n                  fill="none" stroke="currentColor" d="M1.73,12.91 8.1,19.28 22.79,4.59" />\n          </svg>\n        </span>\n      </span>\n    }\n    <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n      <ng-content></ng-content>\n      <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator"></span>\n    </span>\n  </button>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n\n<span class="cdk-visually-hidden" [id]="_ariaDescriptionId">{{ariaDescription}}</span>\n', styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}@media(forced-colors: active){.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{forced-color-adjust:none}}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-outline-width, 1px);border-radius:var(--mat-chip-container-shape-radius, 8px);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-outline-color, var(--mat-sys-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--secondary{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary{color:var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary{color:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mat-chip-with-avatar-avatar-size, 24px);height:var(--mat-chip-with-avatar-avatar-size, 24px);font-size:var(--mat-chip-with-avatar-avatar-size, 24px)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic{padding-left:0}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@media(forced-colors: active){.mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mat-mdc-standard-chip{border-radius:var(--mat-chip-container-shape-radius, 8px);height:var(--mat-chip-container-height, 32px)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-container-color, transparent)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mat-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}@media(forced-colors: active){.mat-mdc-standard-chip{outline:solid 1px}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mat-chip-with-avatar-avatar-shape-radius, 24px);width:var(--mat-chip-with-icon-icon-size, 18px);height:var(--mat-chip-with-icon-icon-size, 18px);font-size:var(--mat-chip-with-icon-icon-size, 18px)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-highlighted{--mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));--mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));--mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));--mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mat-chip-with-icon-disabled-icon-opacity, 0.38)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity, 1)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-edit,.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity, 1)}.mat-mdc-chip-edit:focus,.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity, 1)}.mat-mdc-chip-edit::after,.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-edit:hover::after,.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-edit:focus::after,.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mat-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-edit::before,.mat-mdc-chip-remove::before{margin:calc(var(--mat-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-edit::after,.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-edit .mat-icon,.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}@media(forced-colors: active){.mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}}.mat-mdc-chip-action:focus .mat-focus-indicator::before{content:""}.mdc-evolution-chip__icon,.mat-mdc-chip-edit .mat-icon,.mat-mdc-chip-remove .mat-icon{min-height:fit-content}\n'], dependencies: [{ kind: "directive", type: MatChipAction, selector: "[matChipAction]", inputs: ["isInteractive", "disabled", "tabIndex", "_allowFocusWhenDisabled"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipOption, decorators: [{
      type: Component,
      args: [{ selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", host: {
        "class": "mat-mdc-chip mat-mdc-chip-option",
        "[class.mdc-evolution-chip]": "!_isBasicChip",
        "[class.mdc-evolution-chip--filter]": "!_isBasicChip",
        "[class.mdc-evolution-chip--selectable]": "!_isBasicChip",
        "[class.mat-mdc-chip-selected]": "selected",
        "[class.mat-mdc-chip-multiple]": "_chipListMultiple",
        "[class.mat-mdc-chip-disabled]": "disabled",
        "[class.mat-mdc-chip-with-avatar]": "leadingIcon",
        "[class.mdc-evolution-chip--disabled]": "disabled",
        "[class.mdc-evolution-chip--selected]": "selected",
        // This class enables the transition on the checkmark. Usually MDC adds it when selection
        // starts and removes it once the animation is finished. We don't need to go through all
        // the trouble, because we only care about the selection animation. MDC needs to do it,
        // because they also have an exit animation that we don't care about.
        "[class.mdc-evolution-chip--selecting]": "!_animationsDisabled",
        "[class.mdc-evolution-chip--with-trailing-action]": "_hasTrailingIcon()",
        "[class.mdc-evolution-chip--with-primary-icon]": "leadingIcon",
        "[class.mdc-evolution-chip--with-primary-graphic]": "_hasLeadingGraphic()",
        "[class.mdc-evolution-chip--with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-highlighted]": "highlighted",
        "[class.mat-mdc-chip-with-trailing-icon]": "_hasTrailingIcon()",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-description]": "null",
        "[attr.role]": "role",
        "[id]": "id"
      }, providers: [
        { provide: MatChip, useExisting: MatChipOption },
        { provide: MAT_CHIP, useExisting: MatChipOption }
      ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [MatChipAction], template: '<span class="mat-mdc-chip-focus-overlay"></span>\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary">\n  <button\n    matChipAction\n    [_allowFocusWhenDisabled]="true"\n    [attr.aria-selected]="ariaSelected"\n    [attr.aria-label]="ariaLabel"\n    [attr.aria-describedby]="_ariaDescriptionId"\n    role="option">\n    @if (_hasLeadingGraphic()) {\n      <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n        <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n        <span class="mdc-evolution-chip__checkmark">\n          <svg\n            class="mdc-evolution-chip__checkmark-svg"\n            viewBox="-2 -3 30 30"\n            focusable="false"\n            aria-hidden="true">\n            <path class="mdc-evolution-chip__checkmark-path"\n                  fill="none" stroke="currentColor" d="M1.73,12.91 8.1,19.28 22.79,4.59" />\n          </svg>\n        </span>\n      </span>\n    }\n    <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n      <ng-content></ng-content>\n      <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator"></span>\n    </span>\n  </button>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n\n<span class="cdk-visually-hidden" [id]="_ariaDescriptionId">{{ariaDescription}}</span>\n', styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}@media(forced-colors: active){.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{forced-color-adjust:none}}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-outline-width, 1px);border-radius:var(--mat-chip-container-shape-radius, 8px);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-outline-color, var(--mat-sys-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--secondary{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary{color:var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary{color:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mat-chip-with-avatar-avatar-size, 24px);height:var(--mat-chip-with-avatar-avatar-size, 24px);font-size:var(--mat-chip-with-avatar-avatar-size, 24px)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic{padding-left:0}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@media(forced-colors: active){.mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mat-mdc-standard-chip{border-radius:var(--mat-chip-container-shape-radius, 8px);height:var(--mat-chip-container-height, 32px)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-container-color, transparent)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mat-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}@media(forced-colors: active){.mat-mdc-standard-chip{outline:solid 1px}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mat-chip-with-avatar-avatar-shape-radius, 24px);width:var(--mat-chip-with-icon-icon-size, 18px);height:var(--mat-chip-with-icon-icon-size, 18px);font-size:var(--mat-chip-with-icon-icon-size, 18px)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-highlighted{--mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));--mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));--mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));--mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mat-chip-with-icon-disabled-icon-opacity, 0.38)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity, 1)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-edit,.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity, 1)}.mat-mdc-chip-edit:focus,.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity, 1)}.mat-mdc-chip-edit::after,.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-edit:hover::after,.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-edit:focus::after,.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mat-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-edit::before,.mat-mdc-chip-remove::before{margin:calc(var(--mat-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-edit::after,.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-edit .mat-icon,.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}@media(forced-colors: active){.mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}}.mat-mdc-chip-action:focus .mat-focus-indicator::before{content:""}.mdc-evolution-chip__icon,.mat-mdc-chip-edit .mat-icon,.mat-mdc-chip-remove .mat-icon{min-height:fit-content}\n'] }]
    }], propDecorators: { selectable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], selected: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], selectionChange: [{
      type: Output
    }] } });
    MatChipEditInput = class _MatChipEditInput {
      _elementRef = inject(ElementRef);
      _document = inject(DOCUMENT);
      constructor() {
      }
      initialize(initialValue) {
        this.getNativeElement().focus();
        this.setValue(initialValue);
      }
      getNativeElement() {
        return this._elementRef.nativeElement;
      }
      setValue(value) {
        this.getNativeElement().textContent = value;
        this._moveCursorToEndOfInput();
      }
      getValue() {
        return this.getNativeElement().textContent || "";
      }
      _moveCursorToEndOfInput() {
        const range = this._document.createRange();
        range.selectNodeContents(this.getNativeElement());
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipEditInput, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatChipEditInput, isStandalone: true, selector: "span[matChipEditInput]", host: { attributes: { "role": "textbox", "tabindex": "-1", "contenteditable": "true" }, classAttribute: "mat-chip-edit-input" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipEditInput, decorators: [{
      type: Directive,
      args: [{
        selector: "span[matChipEditInput]",
        host: {
          "class": "mat-chip-edit-input",
          "role": "textbox",
          "tabindex": "-1",
          "contenteditable": "true"
        }
      }]
    }], ctorParameters: () => [] });
    MatChipRow = class _MatChipRow extends MatChip {
      basicChipAttrName = "mat-basic-chip-row";
      /**
       * The editing action has to be triggered in a timeout. While we're waiting on it, a blur
       * event might occur which will interrupt the editing. This flag is used to avoid interruptions
       * while the editing action is being initialized.
       */
      _editStartPending = false;
      editable = false;
      /** Emitted when the chip is edited. */
      edited = new EventEmitter();
      /** The default chip edit input that is used if none is projected into this chip row. */
      defaultEditInput;
      /** The projected chip edit input. */
      contentEditInput;
      /**
       * Set on a mousedown when the chip is already focused via mouse or keyboard.
       *
       * This allows us to ensure chip is already focused when deciding whether to enter the
       * edit mode on a subsequent click. Otherwise, the chip appears focused when handling the
       * first click event.
       */
      _alreadyFocused = false;
      _isEditing = false;
      constructor() {
        super();
        this.role = "row";
        this._onBlur.pipe(takeUntil(this.destroyed)).subscribe(() => {
          if (this._isEditing && !this._editStartPending) {
            this._onEditFinish();
          }
          this._alreadyFocused = false;
        });
      }
      ngAfterViewInit() {
        super.ngAfterViewInit();
        this._ngZone.runOutsideAngular(() => {
          this._elementRef.nativeElement.addEventListener("mousedown", () => this._alreadyFocused = this._hasFocus());
        });
      }
      _hasLeadingActionIcon() {
        return !this._isEditing && !!this.editIcon;
      }
      _hasTrailingIcon() {
        return !this._isEditing && super._hasTrailingIcon();
      }
      /** Sends focus to the first gridcell when the user clicks anywhere inside the chip. */
      _handleFocus() {
        if (!this._isEditing && !this.disabled) {
          this.focus();
        }
      }
      _handleKeydown(event) {
        if (event.keyCode === ENTER && !this.disabled) {
          if (this._isEditing) {
            event.preventDefault();
            this._onEditFinish();
          } else if (this.editable) {
            this._startEditing(event);
          }
        } else if (this._isEditing) {
          event.stopPropagation();
        } else {
          super._handleKeydown(event);
        }
      }
      _handleClick(event) {
        if (!this.disabled && this.editable && !this._isEditing && this._alreadyFocused) {
          event.preventDefault();
          event.stopPropagation();
          this._startEditing(event);
        }
      }
      _handleDoubleclick(event) {
        if (!this.disabled && this.editable) {
          this._startEditing(event);
        }
      }
      _edit() {
        this._changeDetectorRef.markForCheck();
        this._startEditing();
      }
      _startEditing(event) {
        if (!this.primaryAction || this.removeIcon && !!event && this._getSourceAction(event.target) === this.removeIcon) {
          return;
        }
        const value = this.value;
        this._isEditing = this._editStartPending = true;
        afterNextRender(() => {
          this._getEditInput().initialize(value);
          setTimeout(() => this._ngZone.run(() => this._editStartPending = false));
        }, { injector: this._injector });
      }
      _onEditFinish() {
        this._isEditing = this._editStartPending = false;
        this.edited.emit({ chip: this, value: this._getEditInput().getValue() });
        if (this._document.activeElement === this._getEditInput().getNativeElement() || this._document.activeElement === this._document.body) {
          this.primaryAction.focus();
        }
      }
      _isRippleDisabled() {
        return super._isRippleDisabled() || this._isEditing;
      }
      /**
       * Gets the projected chip edit input, or the default input if none is projected in. One of these
       * two values is guaranteed to be defined.
       */
      _getEditInput() {
        return this.contentEditInput || this.defaultEditInput;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipRow, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatChipRow, isStandalone: true, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: { editable: "editable" }, outputs: { edited: "edited" }, host: { listeners: { "focus": "_handleFocus()", "click": "_handleClick($event)", "dblclick": "_handleDoubleclick($event)" }, properties: { "class.mat-mdc-chip-with-avatar": "leadingIcon", "class.mat-mdc-chip-disabled": "disabled", "class.mat-mdc-chip-editing": "_isEditing", "class.mat-mdc-chip-editable": "editable", "class.mdc-evolution-chip--disabled": "disabled", "class.mdc-evolution-chip--with-leading-action": "_hasLeadingActionIcon()", "class.mdc-evolution-chip--with-trailing-action": "_hasTrailingIcon()", "class.mdc-evolution-chip--with-primary-graphic": "leadingIcon", "class.mdc-evolution-chip--with-primary-icon": "leadingIcon", "class.mdc-evolution-chip--with-avatar": "leadingIcon", "class.mat-mdc-chip-highlighted": "highlighted", "class.mat-mdc-chip-with-trailing-icon": "_hasTrailingIcon()", "id": "id", "attr.tabindex": "disabled ? null : -1", "attr.aria-label": "null", "attr.aria-description": "null", "attr.role": "role" }, classAttribute: "mat-mdc-chip mat-mdc-chip-row mdc-evolution-chip" }, providers: [
        { provide: MatChip, useExisting: _MatChipRow },
        { provide: MAT_CHIP, useExisting: _MatChipRow }
      ], queries: [{ propertyName: "contentEditInput", first: true, predicate: MatChipEditInput, descendants: true }], viewQueries: [{ propertyName: "defaultEditInput", first: true, predicate: MatChipEditInput, descendants: true }], usesInheritance: true, ngImport: core_exports, template: '@if (!_isEditing) {\n  <span class="mat-mdc-chip-focus-overlay"></span>\n}\n\n@if (_hasLeadingActionIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--leading" role="gridcell">\n    <ng-content select="[matChipEdit]"></ng-content>\n  </span>\n}\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary" role="gridcell"\n    matChipAction\n    [disabled]="disabled"\n    [attr.aria-label]="ariaLabel"\n    [attr.aria-describedby]="_ariaDescriptionId">\n  @if (leadingIcon) {\n    <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n      <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n    </span>\n  }\n\n  <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n    @if (_isEditing) {\n      @if (contentEditInput) {\n        <ng-content select="[matChipEditInput]"></ng-content>\n      } @else {\n        <span matChipEditInput></span>\n      }\n    } @else {\n      <ng-content></ng-content>\n    }\n\n    <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator" aria-hidden="true"></span>\n  </span>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span\n    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing"\n    role="gridcell">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n\n<span class="cdk-visually-hidden" [id]="_ariaDescriptionId">{{ariaDescription}}</span>\n', styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}@media(forced-colors: active){.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{forced-color-adjust:none}}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-outline-width, 1px);border-radius:var(--mat-chip-container-shape-radius, 8px);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-outline-color, var(--mat-sys-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--secondary{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary{color:var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary{color:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mat-chip-with-avatar-avatar-size, 24px);height:var(--mat-chip-with-avatar-avatar-size, 24px);font-size:var(--mat-chip-with-avatar-avatar-size, 24px)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic{padding-left:0}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@media(forced-colors: active){.mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mat-mdc-standard-chip{border-radius:var(--mat-chip-container-shape-radius, 8px);height:var(--mat-chip-container-height, 32px)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-container-color, transparent)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mat-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}@media(forced-colors: active){.mat-mdc-standard-chip{outline:solid 1px}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mat-chip-with-avatar-avatar-shape-radius, 24px);width:var(--mat-chip-with-icon-icon-size, 18px);height:var(--mat-chip-with-icon-icon-size, 18px);font-size:var(--mat-chip-with-icon-icon-size, 18px)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-highlighted{--mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));--mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));--mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));--mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mat-chip-with-icon-disabled-icon-opacity, 0.38)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity, 1)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-edit,.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity, 1)}.mat-mdc-chip-edit:focus,.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity, 1)}.mat-mdc-chip-edit::after,.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-edit:hover::after,.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-edit:focus::after,.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mat-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-edit::before,.mat-mdc-chip-remove::before{margin:calc(var(--mat-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-edit::after,.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-edit .mat-icon,.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}@media(forced-colors: active){.mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}}.mat-mdc-chip-action:focus .mat-focus-indicator::before{content:""}.mdc-evolution-chip__icon,.mat-mdc-chip-edit .mat-icon,.mat-mdc-chip-remove .mat-icon{min-height:fit-content}\n'], dependencies: [{ kind: "directive", type: MatChipAction, selector: "[matChipAction]", inputs: ["isInteractive", "disabled", "tabIndex", "_allowFocusWhenDisabled"] }, { kind: "directive", type: MatChipEditInput, selector: "span[matChipEditInput]" }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipRow, decorators: [{
      type: Component,
      args: [{ selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", host: {
        "class": "mat-mdc-chip mat-mdc-chip-row mdc-evolution-chip",
        "[class.mat-mdc-chip-with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-disabled]": "disabled",
        "[class.mat-mdc-chip-editing]": "_isEditing",
        "[class.mat-mdc-chip-editable]": "editable",
        "[class.mdc-evolution-chip--disabled]": "disabled",
        "[class.mdc-evolution-chip--with-leading-action]": "_hasLeadingActionIcon()",
        "[class.mdc-evolution-chip--with-trailing-action]": "_hasTrailingIcon()",
        "[class.mdc-evolution-chip--with-primary-graphic]": "leadingIcon",
        "[class.mdc-evolution-chip--with-primary-icon]": "leadingIcon",
        "[class.mdc-evolution-chip--with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-highlighted]": "highlighted",
        "[class.mat-mdc-chip-with-trailing-icon]": "_hasTrailingIcon()",
        "[id]": "id",
        // Has to have a negative tabindex in order to capture
        // focus and redirect it to the primary action.
        "[attr.tabindex]": "disabled ? null : -1",
        "[attr.aria-label]": "null",
        "[attr.aria-description]": "null",
        "[attr.role]": "role",
        "(focus)": "_handleFocus()",
        "(click)": "_handleClick($event)",
        "(dblclick)": "_handleDoubleclick($event)"
      }, providers: [
        { provide: MatChip, useExisting: MatChipRow },
        { provide: MAT_CHIP, useExisting: MatChipRow }
      ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [MatChipAction, MatChipEditInput], template: '@if (!_isEditing) {\n  <span class="mat-mdc-chip-focus-overlay"></span>\n}\n\n@if (_hasLeadingActionIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--leading" role="gridcell">\n    <ng-content select="[matChipEdit]"></ng-content>\n  </span>\n}\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary" role="gridcell"\n    matChipAction\n    [disabled]="disabled"\n    [attr.aria-label]="ariaLabel"\n    [attr.aria-describedby]="_ariaDescriptionId">\n  @if (leadingIcon) {\n    <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n      <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n    </span>\n  }\n\n  <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n    @if (_isEditing) {\n      @if (contentEditInput) {\n        <ng-content select="[matChipEditInput]"></ng-content>\n      } @else {\n        <span matChipEditInput></span>\n      }\n    } @else {\n      <ng-content></ng-content>\n    }\n\n    <span class="mat-mdc-chip-primary-focus-indicator mat-focus-indicator" aria-hidden="true"></span>\n  </span>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span\n    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing"\n    role="gridcell">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n\n<span class="cdk-visually-hidden" [id]="_ariaDescriptionId">{{ariaDescription}}</span>\n', styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}@media(forced-colors: active){.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{forced-color-adjust:none}}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-outline-width, 1px);border-radius:var(--mat-chip-container-shape-radius, 8px);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-outline-color, var(--mat-sys-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--secondary{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary{color:var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary{color:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mat-chip-with-avatar-avatar-size, 24px);height:var(--mat-chip-with-avatar-avatar-size, 24px);font-size:var(--mat-chip-with-avatar-avatar-size, 24px)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic{padding-left:0}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@media(forced-colors: active){.mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mat-mdc-standard-chip{border-radius:var(--mat-chip-container-shape-radius, 8px);height:var(--mat-chip-container-height, 32px)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-container-color, transparent)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mat-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}@media(forced-colors: active){.mat-mdc-standard-chip{outline:solid 1px}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mat-chip-with-avatar-avatar-shape-radius, 24px);width:var(--mat-chip-with-icon-icon-size, 18px);height:var(--mat-chip-with-icon-icon-size, 18px);font-size:var(--mat-chip-with-icon-icon-size, 18px)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-highlighted{--mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));--mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));--mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));--mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mat-chip-with-icon-disabled-icon-opacity, 0.38)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity, 1)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-edit,.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity, 1)}.mat-mdc-chip-edit:focus,.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity, 1)}.mat-mdc-chip-edit::after,.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-edit:hover::after,.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-edit:focus::after,.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mat-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-edit::before,.mat-mdc-chip-remove::before{margin:calc(var(--mat-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-edit::after,.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-edit .mat-icon,.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}@media(forced-colors: active){.mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}}.mat-mdc-chip-action:focus .mat-focus-indicator::before{content:""}.mdc-evolution-chip__icon,.mat-mdc-chip-edit .mat-icon,.mat-mdc-chip-remove .mat-icon{min-height:fit-content}\n'] }]
    }], ctorParameters: () => [], propDecorators: { editable: [{
      type: Input
    }], edited: [{
      type: Output
    }], defaultEditInput: [{
      type: ViewChild,
      args: [MatChipEditInput]
    }], contentEditInput: [{
      type: ContentChild,
      args: [MatChipEditInput]
    }] } });
    MatChipSet = class _MatChipSet {
      _elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _dir = inject(Directionality, { optional: true });
      /** Index of the last destroyed chip that had focus. */
      _lastDestroyedFocusedChipIndex = null;
      /** Used to manage focus within the chip list. */
      _keyManager;
      /** Subject that emits when the component has been destroyed. */
      _destroyed = new Subject();
      /** Role to use if it hasn't been overwritten by the user. */
      _defaultRole = "presentation";
      /** Combined stream of all of the child chips' focus events. */
      get chipFocusChanges() {
        return this._getChipStream((chip) => chip._onFocus);
      }
      /** Combined stream of all of the child chips' destroy events. */
      get chipDestroyedChanges() {
        return this._getChipStream((chip) => chip.destroyed);
      }
      /** Combined stream of all of the child chips' remove events. */
      get chipRemovedChanges() {
        return this._getChipStream((chip) => chip.removed);
      }
      /** Whether the chip set is disabled. */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        this._disabled = value;
        this._syncChipsState();
      }
      _disabled = false;
      /** Whether the chip list contains chips or not. */
      get empty() {
        return !this._chips || this._chips.length === 0;
      }
      /** The ARIA role applied to the chip set. */
      get role() {
        if (this._explicitRole) {
          return this._explicitRole;
        }
        return this.empty ? null : this._defaultRole;
      }
      /** Tabindex of the chip set. */
      tabIndex = 0;
      set role(value) {
        this._explicitRole = value;
      }
      _explicitRole = null;
      /** Whether any of the chips inside of this chip-set has focus. */
      get focused() {
        return this._hasFocusedChip();
      }
      /** The chips that are part of this chip set. */
      _chips;
      /** Flat list of all the actions contained within the chips. */
      _chipActions = new QueryList();
      constructor() {
      }
      ngAfterViewInit() {
        this._setUpFocusManagement();
        this._trackChipSetChanges();
        this._trackDestroyedFocusedChip();
      }
      ngOnDestroy() {
        this._keyManager?.destroy();
        this._chipActions.destroy();
        this._destroyed.next();
        this._destroyed.complete();
      }
      /** Checks whether any of the chips is focused. */
      _hasFocusedChip() {
        return this._chips && this._chips.some((chip) => chip._hasFocus());
      }
      /** Syncs the chip-set's state with the individual chips. */
      _syncChipsState() {
        this._chips?.forEach((chip) => {
          chip._chipListDisabled = this._disabled;
          chip._changeDetectorRef.markForCheck();
        });
      }
      /** Dummy method for subclasses to override. Base chip set cannot be focused. */
      focus() {
      }
      /** Handles keyboard events on the chip set. */
      _handleKeydown(event) {
        if (this._originatesFromChip(event)) {
          this._keyManager.onKeydown(event);
        }
      }
      /**
       * Utility to ensure all indexes are valid.
       *
       * @param index The index to be checked.
       * @returns True if the index is valid for our list of chips.
       */
      _isValidIndex(index) {
        return index >= 0 && index < this._chips.length;
      }
      /**
       * Removes the `tabindex` from the chip set and resets it back afterwards, allowing the
       * user to tab out of it. This prevents the set from capturing focus and redirecting
       * it back to the first chip, creating a focus trap, if it user tries to tab away.
       */
      _allowFocusEscape() {
        const previous = this._elementRef.nativeElement.tabIndex;
        if (previous !== -1) {
          this._elementRef.nativeElement.tabIndex = -1;
          setTimeout(() => this._elementRef.nativeElement.tabIndex = previous);
        }
      }
      /**
       * Gets a stream of events from all the chips within the set.
       * The stream will automatically incorporate any newly-added chips.
       */
      _getChipStream(mappingFunction) {
        return this._chips.changes.pipe(startWith(null), switchMap(() => merge(...this._chips.map(mappingFunction))));
      }
      /** Checks whether an event comes from inside a chip element. */
      _originatesFromChip(event) {
        let currentElement = event.target;
        while (currentElement && currentElement !== this._elementRef.nativeElement) {
          if (currentElement.classList.contains("mat-mdc-chip")) {
            return true;
          }
          currentElement = currentElement.parentElement;
        }
        return false;
      }
      /** Sets up the chip set's focus management logic. */
      _setUpFocusManagement() {
        this._chips.changes.pipe(startWith(this._chips)).subscribe((chips) => {
          const actions = [];
          chips.forEach((chip) => chip._getActions().forEach((action) => actions.push(action)));
          this._chipActions.reset(actions);
          this._chipActions.notifyOnChanges();
        });
        this._keyManager = new FocusKeyManager(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir ? this._dir.value : "ltr").withHomeAndEnd().skipPredicate((action) => this._skipPredicate(action));
        this.chipFocusChanges.pipe(takeUntil(this._destroyed)).subscribe(({ chip }) => {
          const action = chip._getSourceAction(document.activeElement);
          if (action) {
            this._keyManager.updateActiveItem(action);
          }
        });
        this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe((direction) => this._keyManager.withHorizontalOrientation(direction));
      }
      /**
       * Determines if key manager should avoid putting a given chip action in the tab index. Skip
       * non-interactive and disabled actions since the user can't do anything with them.
       */
      _skipPredicate(action) {
        return !action.isInteractive || action.disabled;
      }
      /** Listens to changes in the chip set and syncs up the state of the individual chips. */
      _trackChipSetChanges() {
        this._chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
          if (this.disabled) {
            Promise.resolve().then(() => this._syncChipsState());
          }
          this._redirectDestroyedChipFocus();
        });
      }
      /** Starts tracking the destroyed chips in order to capture the focused one. */
      _trackDestroyedFocusedChip() {
        this.chipDestroyedChanges.pipe(takeUntil(this._destroyed)).subscribe((event) => {
          const chipArray = this._chips.toArray();
          const chipIndex = chipArray.indexOf(event.chip);
          if (this._isValidIndex(chipIndex) && event.chip._hasFocus()) {
            this._lastDestroyedFocusedChipIndex = chipIndex;
          }
        });
      }
      /**
       * Finds the next appropriate chip to move focus to,
       * if the currently-focused chip is destroyed.
       */
      _redirectDestroyedChipFocus() {
        if (this._lastDestroyedFocusedChipIndex == null) {
          return;
        }
        if (this._chips.length) {
          const newIndex = Math.min(this._lastDestroyedFocusedChipIndex, this._chips.length - 1);
          const chipToFocus = this._chips.toArray()[newIndex];
          if (chipToFocus.disabled) {
            if (this._chips.length === 1) {
              this.focus();
            } else {
              this._keyManager.setPreviousItemActive();
            }
          } else {
            chipToFocus.focus();
          }
        } else {
          this.focus();
        }
        this._lastDestroyedFocusedChipIndex = null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipSet, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatChipSet, isStandalone: true, selector: "mat-chip-set", inputs: { disabled: ["disabled", "disabled", booleanAttribute], role: "role", tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)] }, host: { listeners: { "keydown": "_handleKeydown($event)" }, properties: { "attr.role": "role" }, classAttribute: "mat-mdc-chip-set mdc-evolution-chip-set" }, queries: [{ propertyName: "_chips", predicate: MatChip, descendants: true }], ngImport: core_exports, template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `, isInline: true, styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder{opacity:1}.mat-mdc-chip-set+input.mat-mdc-chip-input{margin-left:0;margin-right:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipSet, decorators: [{
      type: Component,
      args: [{ selector: "mat-chip-set", template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `, host: {
        "class": "mat-mdc-chip-set mdc-evolution-chip-set",
        "(keydown)": "_handleKeydown($event)",
        "[attr.role]": "role"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder{opacity:1}.mat-mdc-chip-set+input.mat-mdc-chip-input{margin-left:0;margin-right:0}\n"] }]
    }], ctorParameters: () => [], propDecorators: { disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], role: [{
      type: Input
    }], tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }], _chips: [{
      type: ContentChildren,
      args: [MatChip, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }] } });
    MatChipListboxChange = class {
      source;
      value;
      constructor(source, value) {
        this.source = source;
        this.value = value;
      }
    };
    MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatChipListbox),
      multi: true
    };
    MatChipListbox = class _MatChipListbox extends MatChipSet {
      /**
       * Function when touched. Set as part of ControlValueAccessor implementation.
       * @docs-private
       */
      _onTouched = () => {
      };
      /**
       * Function when changed. Set as part of ControlValueAccessor implementation.
       * @docs-private
       */
      _onChange = () => {
      };
      // TODO: MDC uses `grid` here
      _defaultRole = "listbox";
      /** Default chip options. */
      _defaultOptions = inject(MAT_CHIPS_DEFAULT_OPTIONS, { optional: true });
      /** Whether the user should be allowed to select multiple chips. */
      get multiple() {
        return this._multiple;
      }
      set multiple(value) {
        this._multiple = value;
        this._syncListboxProperties();
      }
      _multiple = false;
      /** The array of selected chips inside the chip listbox. */
      get selected() {
        const selectedChips = this._chips.toArray().filter((chip) => chip.selected);
        return this.multiple ? selectedChips : selectedChips[0];
      }
      /** Orientation of the chip list. */
      ariaOrientation = "horizontal";
      /**
       * Whether or not this chip listbox is selectable.
       *
       * When a chip listbox is not selectable, the selected states for all
       * the chips inside the chip listbox are always ignored.
       */
      get selectable() {
        return this._selectable;
      }
      set selectable(value) {
        this._selectable = value;
        this._syncListboxProperties();
      }
      _selectable = true;
      /**
       * A function to compare the option values with the selected values. The first argument
       * is a value from an option. The second is a value from the selection. A boolean
       * should be returned.
       */
      compareWith = (o1, o2) => o1 === o2;
      /** Whether this chip listbox is required. */
      required = false;
      /** Whether checkmark indicator for single-selection options is hidden. */
      get hideSingleSelectionIndicator() {
        return this._hideSingleSelectionIndicator;
      }
      set hideSingleSelectionIndicator(value) {
        this._hideSingleSelectionIndicator = value;
        this._syncListboxProperties();
      }
      _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
      /** Combined stream of all of the child chips' selection change events. */
      get chipSelectionChanges() {
        return this._getChipStream((chip) => chip.selectionChange);
      }
      /** Combined stream of all of the child chips' blur events. */
      get chipBlurChanges() {
        return this._getChipStream((chip) => chip._onBlur);
      }
      /** The value of the listbox, which is the combined value of the selected chips. */
      get value() {
        return this._value;
      }
      set value(value) {
        if (this._chips && this._chips.length) {
          this._setSelectionByValue(value, false);
        }
        this._value = value;
      }
      _value;
      /** Event emitted when the selected chip listbox value has been changed by the user. */
      change = new EventEmitter();
      _chips = void 0;
      ngAfterContentInit() {
        this._chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
          if (this.value !== void 0) {
            Promise.resolve().then(() => {
              this._setSelectionByValue(this.value, false);
            });
          }
          this._syncListboxProperties();
        });
        this.chipBlurChanges.pipe(takeUntil(this._destroyed)).subscribe(() => this._blur());
        this.chipSelectionChanges.pipe(takeUntil(this._destroyed)).subscribe((event) => {
          if (!this.multiple) {
            this._chips.forEach((chip) => {
              if (chip !== event.source) {
                chip._setSelectedState(false, false, false);
              }
            });
          }
          if (event.isUserInput) {
            this._propagateChanges();
          }
        });
      }
      /**
       * Focuses the first selected chip in this chip listbox, or the first non-disabled chip when there
       * are no selected chips.
       */
      focus() {
        if (this.disabled) {
          return;
        }
        const firstSelectedChip = this._getFirstSelectedChip();
        if (firstSelectedChip && !firstSelectedChip.disabled) {
          firstSelectedChip.focus();
        } else if (this._chips.length > 0) {
          this._keyManager.setFirstItemActive();
        } else {
          this._elementRef.nativeElement.focus();
        }
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      writeValue(value) {
        if (value != null) {
          this.value = value;
        } else {
          this.value = void 0;
        }
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      registerOnChange(fn) {
        this._onChange = fn;
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      registerOnTouched(fn) {
        this._onTouched = fn;
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      setDisabledState(isDisabled) {
        this.disabled = isDisabled;
      }
      /** Selects all chips with value. */
      _setSelectionByValue(value, isUserInput = true) {
        this._clearSelection();
        if (Array.isArray(value)) {
          value.forEach((currentValue) => this._selectValue(currentValue, isUserInput));
        } else {
          this._selectValue(value, isUserInput);
        }
      }
      /** When blurred, marks the field as touched when focus moved outside the chip listbox. */
      _blur() {
        if (!this.disabled) {
          setTimeout(() => {
            if (!this.focused) {
              this._markAsTouched();
            }
          });
        }
      }
      _keydown(event) {
        if (event.keyCode === TAB) {
          super._allowFocusEscape();
        }
      }
      /** Marks the field as touched */
      _markAsTouched() {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
      }
      /** Emits change event to set the model value. */
      _propagateChanges() {
        let valueToEmit = null;
        if (Array.isArray(this.selected)) {
          valueToEmit = this.selected.map((chip) => chip.value);
        } else {
          valueToEmit = this.selected ? this.selected.value : void 0;
        }
        this._value = valueToEmit;
        this.change.emit(new MatChipListboxChange(this, valueToEmit));
        this._onChange(valueToEmit);
        this._changeDetectorRef.markForCheck();
      }
      /**
       * Deselects every chip in the listbox.
       * @param skip Chip that should not be deselected.
       */
      _clearSelection(skip) {
        this._chips.forEach((chip) => {
          if (chip !== skip) {
            chip.deselect();
          }
        });
      }
      /**
       * Finds and selects the chip based on its value.
       * @returns Chip that has the corresponding value.
       */
      _selectValue(value, isUserInput) {
        const correspondingChip = this._chips.find((chip) => {
          return chip.value != null && this.compareWith(chip.value, value);
        });
        if (correspondingChip) {
          isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
        }
        return correspondingChip;
      }
      /** Syncs the chip-listbox selection state with the individual chips. */
      _syncListboxProperties() {
        if (this._chips) {
          Promise.resolve().then(() => {
            this._chips.forEach((chip) => {
              chip._chipListMultiple = this.multiple;
              chip.chipListSelectable = this._selectable;
              chip._chipListHideSingleSelectionIndicator = this.hideSingleSelectionIndicator;
              chip._changeDetectorRef.markForCheck();
            });
          });
        }
      }
      /** Returns the first selected chip in this listbox, or undefined if no chips are selected. */
      _getFirstSelectedChip() {
        if (Array.isArray(this.selected)) {
          return this.selected.length ? this.selected[0] : void 0;
        } else {
          return this.selected;
        }
      }
      /**
       * Determines if key manager should avoid putting a given chip action in the tab index. Skip
       * non-interactive actions since the user can't do anything with them.
       */
      _skipPredicate(action) {
        return !action.isInteractive;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipListbox, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatChipListbox, isStandalone: true, selector: "mat-chip-listbox", inputs: { multiple: ["multiple", "multiple", booleanAttribute], ariaOrientation: ["aria-orientation", "ariaOrientation"], selectable: ["selectable", "selectable", booleanAttribute], compareWith: "compareWith", required: ["required", "required", booleanAttribute], hideSingleSelectionIndicator: ["hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute], value: "value" }, outputs: { change: "change" }, host: { listeners: { "focus": "focus()", "blur": "_blur()", "keydown": "_keydown($event)" }, properties: { "attr.role": "role", "tabIndex": "(disabled || empty) ? -1 : tabIndex", "attr.aria-required": "role ? required : null", "attr.aria-disabled": "disabled.toString()", "attr.aria-multiselectable": "multiple", "attr.aria-orientation": "ariaOrientation", "class.mat-mdc-chip-list-disabled": "disabled", "class.mat-mdc-chip-list-required": "required" }, classAttribute: "mdc-evolution-chip-set mat-mdc-chip-listbox" }, providers: [MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR], queries: [{ propertyName: "_chips", predicate: MatChipOption, descendants: true }], usesInheritance: true, ngImport: core_exports, template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `, isInline: true, styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder{opacity:1}.mat-mdc-chip-set+input.mat-mdc-chip-input{margin-left:0;margin-right:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipListbox, decorators: [{
      type: Component,
      args: [{ selector: "mat-chip-listbox", template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `, host: {
        "class": "mdc-evolution-chip-set mat-mdc-chip-listbox",
        "[attr.role]": "role",
        "[tabIndex]": "(disabled || empty) ? -1 : tabIndex",
        "[attr.aria-required]": "role ? required : null",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-multiselectable]": "multiple",
        "[attr.aria-orientation]": "ariaOrientation",
        "[class.mat-mdc-chip-list-disabled]": "disabled",
        "[class.mat-mdc-chip-list-required]": "required",
        "(focus)": "focus()",
        "(blur)": "_blur()",
        "(keydown)": "_keydown($event)"
      }, providers: [MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder{opacity:1}.mat-mdc-chip-set+input.mat-mdc-chip-input{margin-left:0;margin-right:0}\n"] }]
    }], propDecorators: { multiple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], ariaOrientation: [{
      type: Input,
      args: ["aria-orientation"]
    }], selectable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], compareWith: [{
      type: Input
    }], required: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], hideSingleSelectionIndicator: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], value: [{
      type: Input
    }], change: [{
      type: Output
    }], _chips: [{
      type: ContentChildren,
      args: [MatChipOption, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }] } });
    MatChipGridChange = class {
      source;
      value;
      constructor(source, value) {
        this.source = source;
        this.value = value;
      }
    };
    MatChipGrid = class _MatChipGrid extends MatChipSet {
      ngControl = inject(NgControl, { optional: true, self: true });
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      controlType = "mat-chip-grid";
      /** The chip input to add more chips */
      _chipInput;
      _defaultRole = "grid";
      _errorStateTracker;
      /**
       * List of element ids to propagate to the chipInput's aria-describedby attribute.
       */
      _ariaDescribedbyIds = [];
      /**
       * Function when touched. Set as part of ControlValueAccessor implementation.
       * @docs-private
       */
      _onTouched = () => {
      };
      /**
       * Function when changed. Set as part of ControlValueAccessor implementation.
       * @docs-private
       */
      _onChange = () => {
      };
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get disabled() {
        return this.ngControl ? !!this.ngControl.disabled : this._disabled;
      }
      set disabled(value) {
        this._disabled = value;
        this._syncChipsState();
        this.stateChanges.next();
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get id() {
        return this._chipInput.id;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get empty() {
        return (!this._chipInput || this._chipInput.empty) && (!this._chips || this._chips.length === 0);
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get placeholder() {
        return this._chipInput ? this._chipInput.placeholder : this._placeholder;
      }
      set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
      }
      _placeholder;
      /** Whether any chips or the matChipInput inside of this chip-grid has focus. */
      get focused() {
        return this._chipInput.focused || this._hasFocusedChip();
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get required() {
        return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
      }
      set required(value) {
        this._required = value;
        this.stateChanges.next();
      }
      _required;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get shouldLabelFloat() {
        return !this.empty || this.focused;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get value() {
        return this._value;
      }
      set value(value) {
        this._value = value;
      }
      _value = [];
      /** An object used to control when error messages are shown. */
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(value) {
        this._errorStateTracker.matcher = value;
      }
      /** Combined stream of all of the child chips' blur events. */
      get chipBlurChanges() {
        return this._getChipStream((chip) => chip._onBlur);
      }
      /** Emits when the chip grid value has been changed by the user. */
      change = new EventEmitter();
      /**
       * Emits whenever the raw value of the chip-grid changes. This is here primarily
       * to facilitate the two-way binding for the `value` input.
       * @docs-private
       */
      valueChange = new EventEmitter();
      _chips = void 0;
      /**
       * Emits whenever the component state changes and should cause the parent
       * form-field to update. Implemented as part of `MatFormFieldControl`.
       * @docs-private
       */
      stateChanges = new Subject();
      /** Whether the chip grid is in an error state. */
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(value) {
        this._errorStateTracker.errorState = value;
      }
      constructor() {
        super();
        const parentForm = inject(NgForm, { optional: true });
        const parentFormGroup = inject(FormGroupDirective, { optional: true });
        const defaultErrorStateMatcher = inject(ErrorStateMatcher);
        if (this.ngControl) {
          this.ngControl.valueAccessor = this;
        }
        this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
      }
      ngAfterContentInit() {
        this.chipBlurChanges.pipe(takeUntil(this._destroyed)).subscribe(() => {
          this._blur();
          this.stateChanges.next();
        });
        merge(this.chipFocusChanges, this._chips.changes).pipe(takeUntil(this._destroyed)).subscribe(() => this.stateChanges.next());
      }
      ngAfterViewInit() {
        super.ngAfterViewInit();
        if (!this._chipInput && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("mat-chip-grid must be used in combination with matChipInputFor.");
        }
      }
      ngDoCheck() {
        if (this.ngControl) {
          this.updateErrorState();
        }
      }
      ngOnDestroy() {
        super.ngOnDestroy();
        this.stateChanges.complete();
      }
      /** Associates an HTML input element with this chip grid. */
      registerInput(inputElement) {
        this._chipInput = inputElement;
        this._chipInput.setDescribedByIds(this._ariaDescribedbyIds);
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      onContainerClick(event) {
        if (!this.disabled && !this._originatesFromChip(event)) {
          this.focus();
        }
      }
      /**
       * Focuses the first chip in this chip grid, or the associated input when there
       * are no eligible chips.
       */
      focus() {
        if (this.disabled || this._chipInput.focused) {
          return;
        }
        if (!this._chips.length || this._chips.first.disabled) {
          Promise.resolve().then(() => this._chipInput.focus());
        } else {
          const activeItem = this._keyManager.activeItem;
          if (activeItem) {
            activeItem.focus();
          } else {
            this._keyManager.setFirstItemActive();
          }
        }
        this.stateChanges.next();
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get describedByIds() {
        return this._chipInput?.describedByIds || [];
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      setDescribedByIds(ids) {
        this._ariaDescribedbyIds = ids;
        this._chipInput?.setDescribedByIds(ids);
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      writeValue(value) {
        this._value = value;
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      registerOnChange(fn) {
        this._onChange = fn;
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      registerOnTouched(fn) {
        this._onTouched = fn;
      }
      /**
       * Implemented as part of ControlValueAccessor.
       * @docs-private
       */
      setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.stateChanges.next();
      }
      /** Refreshes the error state of the chip grid. */
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      /** When blurred, mark the field as touched when focus moved outside the chip grid. */
      _blur() {
        if (!this.disabled) {
          setTimeout(() => {
            if (!this.focused) {
              this._propagateChanges();
              this._markAsTouched();
            }
          });
        }
      }
      /**
       * Removes the `tabindex` from the chip grid and resets it back afterwards, allowing the
       * user to tab out of it. This prevents the grid from capturing focus and redirecting
       * it back to the first chip, creating a focus trap, if it user tries to tab away.
       */
      _allowFocusEscape() {
        if (!this._chipInput.focused) {
          super._allowFocusEscape();
        }
      }
      /** Handles custom keyboard events. */
      _handleKeydown(event) {
        const keyCode = event.keyCode;
        const activeItem = this._keyManager.activeItem;
        if (keyCode === TAB) {
          if (this._chipInput.focused && hasModifierKey(event, "shiftKey") && this._chips.length && !this._chips.last.disabled) {
            event.preventDefault();
            if (activeItem) {
              this._keyManager.setActiveItem(activeItem);
            } else {
              this._focusLastChip();
            }
          } else {
            super._allowFocusEscape();
          }
        } else if (!this._chipInput.focused) {
          if ((keyCode === UP_ARROW || keyCode === DOWN_ARROW) && activeItem) {
            const eligibleActions = this._chipActions.filter((action) => action._isPrimary === activeItem._isPrimary && !this._skipPredicate(action));
            const currentIndex = eligibleActions.indexOf(activeItem);
            const delta = event.keyCode === UP_ARROW ? -1 : 1;
            event.preventDefault();
            if (currentIndex > -1 && this._isValidIndex(currentIndex + delta)) {
              this._keyManager.setActiveItem(eligibleActions[currentIndex + delta]);
            }
          } else {
            super._handleKeydown(event);
          }
        }
        this.stateChanges.next();
      }
      _focusLastChip() {
        if (this._chips.length) {
          this._chips.last.focus();
        }
      }
      /** Emits change event to set the model value. */
      _propagateChanges() {
        const valueToEmit = this._chips.length ? this._chips.toArray().map((chip) => chip.value) : [];
        this._value = valueToEmit;
        this.change.emit(new MatChipGridChange(this, valueToEmit));
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this._changeDetectorRef.markForCheck();
      }
      /** Mark the field as touched */
      _markAsTouched() {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipGrid, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatChipGrid, isStandalone: true, selector: "mat-chip-grid", inputs: { disabled: ["disabled", "disabled", booleanAttribute], placeholder: "placeholder", required: ["required", "required", booleanAttribute], value: "value", errorStateMatcher: "errorStateMatcher" }, outputs: { change: "change", valueChange: "valueChange" }, host: { listeners: { "focus": "focus()", "blur": "_blur()" }, properties: { "attr.role": "role", "attr.tabindex": "(disabled || (_chips && _chips.length === 0)) ? -1 : tabIndex", "attr.aria-disabled": "disabled.toString()", "attr.aria-invalid": "errorState", "class.mat-mdc-chip-list-disabled": "disabled", "class.mat-mdc-chip-list-invalid": "errorState", "class.mat-mdc-chip-list-required": "required" }, classAttribute: "mat-mdc-chip-set mat-mdc-chip-grid mdc-evolution-chip-set" }, providers: [{ provide: MatFormFieldControl, useExisting: _MatChipGrid }], queries: [{ propertyName: "_chips", predicate: MatChipRow, descendants: true }], usesInheritance: true, ngImport: core_exports, template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `, isInline: true, styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder{opacity:1}.mat-mdc-chip-set+input.mat-mdc-chip-input{margin-left:0;margin-right:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipGrid, decorators: [{
      type: Component,
      args: [{ selector: "mat-chip-grid", template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `, host: {
        "class": "mat-mdc-chip-set mat-mdc-chip-grid mdc-evolution-chip-set",
        "[attr.role]": "role",
        "[attr.tabindex]": "(disabled || (_chips && _chips.length === 0)) ? -1 : tabIndex",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-invalid]": "errorState",
        "[class.mat-mdc-chip-list-disabled]": "disabled",
        "[class.mat-mdc-chip-list-invalid]": "errorState",
        "[class.mat-mdc-chip-list-required]": "required",
        "(focus)": "focus()",
        "(blur)": "_blur()"
      }, providers: [{ provide: MatFormFieldControl, useExisting: MatChipGrid }], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder{opacity:1}.mat-mdc-chip-set+input.mat-mdc-chip-input{margin-left:0;margin-right:0}\n"] }]
    }], ctorParameters: () => [], propDecorators: { disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], placeholder: [{
      type: Input
    }], required: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], value: [{
      type: Input
    }], errorStateMatcher: [{
      type: Input
    }], change: [{
      type: Output
    }], valueChange: [{
      type: Output
    }], _chips: [{
      type: ContentChildren,
      args: [MatChipRow, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }] } });
    MatChipInput = class _MatChipInput {
      _elementRef = inject(ElementRef);
      /** Whether the control is focused. */
      focused = false;
      /** Register input for chip list */
      get chipGrid() {
        return this._chipGrid;
      }
      set chipGrid(value) {
        if (value) {
          this._chipGrid = value;
          this._chipGrid.registerInput(this);
        }
      }
      _chipGrid;
      /**
       * Whether or not the chipEnd event will be emitted when the input is blurred.
       */
      addOnBlur = false;
      /**
       * The list of key codes that will trigger a chipEnd event.
       *
       * Defaults to `[ENTER]`.
       */
      separatorKeyCodes;
      /** Emitted when a chip is to be added. */
      chipEnd = new EventEmitter();
      /** The input's placeholder text. */
      placeholder = "";
      /** Unique id for the input. */
      id = inject(_IdGenerator).getId("mat-mdc-chip-list-input-");
      /** Whether the input is disabled. */
      get disabled() {
        return this._disabled || this._chipGrid && this._chipGrid.disabled;
      }
      set disabled(value) {
        this._disabled = value;
      }
      _disabled = false;
      /** Whether the input is readonly. */
      readonly = false;
      /** Whether the input should remain interactive when it is disabled. */
      disabledInteractive;
      /** Whether the input is empty. */
      get empty() {
        return !this.inputElement.value;
      }
      /** The native input element to which this directive is attached. */
      inputElement;
      constructor() {
        const defaultOptions = inject(MAT_CHIPS_DEFAULT_OPTIONS);
        const formField = inject(MAT_FORM_FIELD, { optional: true });
        this.inputElement = this._elementRef.nativeElement;
        this.separatorKeyCodes = defaultOptions.separatorKeyCodes;
        this.disabledInteractive = defaultOptions.inputDisabledInteractive ?? false;
        if (formField) {
          this.inputElement.classList.add("mat-mdc-form-field-input-control");
        }
      }
      ngOnChanges() {
        this._chipGrid.stateChanges.next();
      }
      ngOnDestroy() {
        this.chipEnd.complete();
      }
      /** Utility method to make host definition/tests more clear. */
      _keydown(event) {
        if (this.empty && event.keyCode === BACKSPACE) {
          if (!event.repeat) {
            this._chipGrid._focusLastChip();
          }
          event.preventDefault();
        } else {
          this._emitChipEnd(event);
        }
      }
      /** Checks to see if the blur should emit the (chipEnd) event. */
      _blur() {
        if (this.addOnBlur) {
          this._emitChipEnd();
        }
        this.focused = false;
        if (!this._chipGrid.focused) {
          this._chipGrid._blur();
        }
        this._chipGrid.stateChanges.next();
      }
      _focus() {
        this.focused = true;
        this._chipGrid.stateChanges.next();
      }
      /** Checks to see if the (chipEnd) event needs to be emitted. */
      _emitChipEnd(event) {
        if (!event || this._isSeparatorKey(event) && !event.repeat) {
          this.chipEnd.emit({
            input: this.inputElement,
            value: this.inputElement.value,
            chipInput: this
          });
          event?.preventDefault();
        }
      }
      _onInput() {
        this._chipGrid.stateChanges.next();
      }
      /** Focuses the input. */
      focus() {
        this.inputElement.focus();
      }
      /** Clears the input */
      clear() {
        this.inputElement.value = "";
      }
      /**
       * Implemented as part of MatChipTextControl.
       * @docs-private
       */
      get describedByIds() {
        const element = this._elementRef.nativeElement;
        const existingDescribedBy = element.getAttribute("aria-describedby");
        return existingDescribedBy?.split(" ") || [];
      }
      setDescribedByIds(ids) {
        const element = this._elementRef.nativeElement;
        if (ids.length) {
          element.setAttribute("aria-describedby", ids.join(" "));
        } else {
          element.removeAttribute("aria-describedby");
        }
      }
      /** Checks whether a keycode is one of the configured separators. */
      _isSeparatorKey(event) {
        return !hasModifierKey(event) && new Set(this.separatorKeyCodes).has(event.keyCode);
      }
      /** Gets the value to set on the `readonly` attribute. */
      _getReadonlyAttribute() {
        return this.readonly || this.disabled && this.disabledInteractive ? "true" : null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipInput, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _MatChipInput, isStandalone: true, selector: "input[matChipInputFor]", inputs: { chipGrid: ["matChipInputFor", "chipGrid"], addOnBlur: ["matChipInputAddOnBlur", "addOnBlur", booleanAttribute], separatorKeyCodes: ["matChipInputSeparatorKeyCodes", "separatorKeyCodes"], placeholder: "placeholder", id: "id", disabled: ["disabled", "disabled", booleanAttribute], readonly: ["readonly", "readonly", booleanAttribute], disabledInteractive: ["matChipInputDisabledInteractive", "disabledInteractive", booleanAttribute] }, outputs: { chipEnd: "matChipInputTokenEnd" }, host: { listeners: { "keydown": "_keydown($event)", "blur": "_blur()", "focus": "_focus()", "input": "_onInput()" }, properties: { "id": "id", "attr.disabled": 'disabled && !disabledInteractive ? "" : null', "attr.placeholder": "placeholder || null", "attr.aria-invalid": "_chipGrid && _chipGrid.ngControl ? _chipGrid.ngControl.invalid : null", "attr.aria-required": "_chipGrid && _chipGrid.required || null", "attr.aria-disabled": 'disabled && disabledInteractive ? "true" : null', "attr.readonly": "_getReadonlyAttribute()", "attr.required": "_chipGrid && _chipGrid.required || null" }, classAttribute: "mat-mdc-chip-input mat-mdc-input-element mdc-text-field__input mat-input-element" }, exportAs: ["matChipInput", "matChipInputFor"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipInput, decorators: [{
      type: Directive,
      args: [{
        selector: "input[matChipInputFor]",
        exportAs: "matChipInput, matChipInputFor",
        host: {
          // TODO: eventually we should remove `mat-input-element` from here since it comes from the
          // non-MDC version of the input. It's currently being kept for backwards compatibility, because
          // the MDC chips were landed initially with it.
          "class": "mat-mdc-chip-input mat-mdc-input-element mdc-text-field__input mat-input-element",
          "(keydown)": "_keydown($event)",
          "(blur)": "_blur()",
          "(focus)": "_focus()",
          "(input)": "_onInput()",
          "[id]": "id",
          "[attr.disabled]": 'disabled && !disabledInteractive ? "" : null',
          "[attr.placeholder]": "placeholder || null",
          "[attr.aria-invalid]": "_chipGrid && _chipGrid.ngControl ? _chipGrid.ngControl.invalid : null",
          "[attr.aria-required]": "_chipGrid && _chipGrid.required || null",
          "[attr.aria-disabled]": 'disabled && disabledInteractive ? "true" : null',
          "[attr.readonly]": "_getReadonlyAttribute()",
          "[attr.required]": "_chipGrid && _chipGrid.required || null"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { chipGrid: [{
      type: Input,
      args: ["matChipInputFor"]
    }], addOnBlur: [{
      type: Input,
      args: [{ alias: "matChipInputAddOnBlur", transform: booleanAttribute }]
    }], separatorKeyCodes: [{
      type: Input,
      args: ["matChipInputSeparatorKeyCodes"]
    }], chipEnd: [{
      type: Output,
      args: ["matChipInputTokenEnd"]
    }], placeholder: [{
      type: Input
    }], id: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], readonly: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabledInteractive: [{
      type: Input,
      args: [{ alias: "matChipInputDisabledInteractive", transform: booleanAttribute }]
    }] } });
    CHIP_DECLARATIONS = [
      MatChip,
      MatChipAvatar,
      MatChipEdit,
      MatChipEditInput,
      MatChipGrid,
      MatChipInput,
      MatChipListbox,
      MatChipOption,
      MatChipRemove,
      MatChipRow,
      MatChipSet,
      MatChipTrailingIcon
    ];
    MatChipsModule = class _MatChipsModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipsModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipsModule, imports: [
        MatCommonModule,
        MatRippleModule,
        MatChipAction,
        MatChip,
        MatChipAvatar,
        MatChipEdit,
        MatChipEditInput,
        MatChipGrid,
        MatChipInput,
        MatChipListbox,
        MatChipOption,
        MatChipRemove,
        MatChipRow,
        MatChipSet,
        MatChipTrailingIcon
      ], exports: [
        MatCommonModule,
        MatChip,
        MatChipAvatar,
        MatChipEdit,
        MatChipEditInput,
        MatChipGrid,
        MatChipInput,
        MatChipListbox,
        MatChipOption,
        MatChipRemove,
        MatChipRow,
        MatChipSet,
        MatChipTrailingIcon
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatChipsModule, providers: [
        ErrorStateMatcher,
        {
          provide: MAT_CHIPS_DEFAULT_OPTIONS,
          useValue: {
            separatorKeyCodes: [ENTER]
          }
        }
      ], imports: [MatCommonModule, MatRippleModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatChipsModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatRippleModule, MatChipAction, CHIP_DECLARATIONS],
        exports: [MatCommonModule, CHIP_DECLARATIONS],
        providers: [
          ErrorStateMatcher,
          {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue: {
              separatorKeyCodes: [ENTER]
            }
          }
        ]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/slide-toggle.mjs
var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MatSlideToggleChange, MatSlideToggle, MatSlideToggleModule;
var init_slide_toggle = __esm({
  "node_modules/@angular/material/fesm2022/slide-toggle.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_forms();
    init_a11y();
    init_private();
    init_animation_DfMFjxHu();
    init_structural_styles_CObeNzjn();
    init_ripple_BYgV4oZC();
    init_internal_form_field_D5iFxU6d();
    init_common_module_cKSwHniA();
    MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("mat-slide-toggle-default-options", {
      providedIn: "root",
      factory: () => ({ disableToggleValue: false, hideIcon: false, disabledInteractive: false })
    });
    MatSlideToggleChange = class {
      source;
      checked;
      constructor(source, checked) {
        this.source = source;
        this.checked = checked;
      }
    };
    MatSlideToggle = class _MatSlideToggle {
      _elementRef = inject(ElementRef);
      _focusMonitor = inject(FocusMonitor);
      _changeDetectorRef = inject(ChangeDetectorRef);
      defaults = inject(MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS);
      _onChange = (_) => {
      };
      _onTouched = () => {
      };
      _validatorOnChange = () => {
      };
      _uniqueId;
      _checked = false;
      _createChangeEvent(isChecked) {
        return new MatSlideToggleChange(this, isChecked);
      }
      /** Unique ID for the label element. */
      _labelId;
      /** Returns the unique id for the visual hidden button. */
      get buttonId() {
        return `${this.id || this._uniqueId}-button`;
      }
      /** Reference to the MDC switch element. */
      _switchElement;
      /** Focuses the slide-toggle. */
      focus() {
        this._switchElement.nativeElement.focus();
      }
      /** Whether noop animations are enabled. */
      _noopAnimations = _animationsDisabled();
      /** Whether the slide toggle is currently focused. */
      _focused;
      /** Name value will be applied to the input element if present. */
      name = null;
      /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
      id;
      /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */
      labelPosition = "after";
      /** Used to set the aria-label attribute on the underlying input element. */
      ariaLabel = null;
      /** Used to set the aria-labelledby attribute on the underlying input element. */
      ariaLabelledby = null;
      /** Used to set the aria-describedby attribute on the underlying input element. */
      ariaDescribedby;
      /** Whether the slide-toggle is required. */
      required;
      // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
      // the lack of type checking previously and assigning random strings.
      /**
       * Theme color of the slide toggle. This API is supported in M2 themes only,
       * it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/slide-toggle/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /** Whether the slide toggle is disabled. */
      disabled = false;
      /** Whether the slide toggle has a ripple. */
      disableRipple = false;
      /** Tabindex of slide toggle. */
      tabIndex = 0;
      /** Whether the slide-toggle element is checked or not. */
      get checked() {
        return this._checked;
      }
      set checked(value) {
        this._checked = value;
        this._changeDetectorRef.markForCheck();
      }
      /** Whether to hide the icon inside of the slide toggle. */
      hideIcon;
      /** Whether the slide toggle should remain interactive when it is disabled. */
      disabledInteractive;
      /** An event will be dispatched each time the slide-toggle changes its value. */
      change = new EventEmitter();
      /**
       * An event will be dispatched each time the slide-toggle input is toggled.
       * This event is always emitted when the user toggles the slide toggle, but this does not mean
       * the slide toggle's value has changed.
       */
      toggleChange = new EventEmitter();
      /** Returns the unique id for the visual hidden input. */
      get inputId() {
        return `${this.id || this._uniqueId}-input`;
      }
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        const tabIndex = inject(new HostAttributeToken("tabindex"), { optional: true });
        const defaults2 = this.defaults;
        this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
        this.color = defaults2.color || "accent";
        this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-slide-toggle-");
        this.hideIcon = defaults2.hideIcon ?? false;
        this.disabledInteractive = defaults2.disabledInteractive ?? false;
        this._labelId = this._uniqueId + "-label";
      }
      ngAfterContentInit() {
        this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
          if (focusOrigin === "keyboard" || focusOrigin === "program") {
            this._focused = true;
            this._changeDetectorRef.markForCheck();
          } else if (!focusOrigin) {
            Promise.resolve().then(() => {
              this._focused = false;
              this._onTouched();
              this._changeDetectorRef.markForCheck();
            });
          }
        });
      }
      ngOnChanges(changes) {
        if (changes["required"]) {
          this._validatorOnChange();
        }
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
      }
      /** Implemented as part of ControlValueAccessor. */
      writeValue(value) {
        this.checked = !!value;
      }
      /** Implemented as part of ControlValueAccessor. */
      registerOnChange(fn) {
        this._onChange = fn;
      }
      /** Implemented as part of ControlValueAccessor. */
      registerOnTouched(fn) {
        this._onTouched = fn;
      }
      /** Implemented as a part of Validator. */
      validate(control) {
        return this.required && control.value !== true ? { "required": true } : null;
      }
      /** Implemented as a part of Validator. */
      registerOnValidatorChange(fn) {
        this._validatorOnChange = fn;
      }
      /** Implemented as a part of ControlValueAccessor. */
      setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
      }
      /** Toggles the checked state of the slide-toggle. */
      toggle() {
        this.checked = !this.checked;
        this._onChange(this.checked);
      }
      /**
       * Emits a change event on the `change` output. Also notifies the FormControl about the change.
       */
      _emitChangeEvent() {
        this._onChange(this.checked);
        this.change.emit(this._createChangeEvent(this.checked));
      }
      /** Method being called whenever the underlying button is clicked. */
      _handleClick() {
        if (!this.disabled) {
          this.toggleChange.emit();
          if (!this.defaults.disableToggleValue) {
            this.checked = !this.checked;
            this._onChange(this.checked);
            this.change.emit(new MatSlideToggleChange(this, this.checked));
          }
        }
      }
      _getAriaLabelledBy() {
        if (this.ariaLabelledby) {
          return this.ariaLabelledby;
        }
        return this.ariaLabel ? null : this._labelId;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSlideToggle, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatSlideToggle, isStandalone: true, selector: "mat-slide-toggle", inputs: { name: "name", id: "id", labelPosition: "labelPosition", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"], required: ["required", "required", booleanAttribute], color: "color", disabled: ["disabled", "disabled", booleanAttribute], disableRipple: ["disableRipple", "disableRipple", booleanAttribute], tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)], checked: ["checked", "checked", booleanAttribute], hideIcon: ["hideIcon", "hideIcon", booleanAttribute], disabledInteractive: ["disabledInteractive", "disabledInteractive", booleanAttribute] }, outputs: { change: "change", toggleChange: "toggleChange" }, host: { properties: { "id": "id", "attr.tabindex": "null", "attr.aria-label": "null", "attr.name": "null", "attr.aria-labelledby": "null", "class.mat-mdc-slide-toggle-focused": "_focused", "class.mat-mdc-slide-toggle-checked": "checked", "class._mat-animation-noopable": "_noopAnimations", "class": 'color ? "mat-" + color : ""' }, classAttribute: "mat-mdc-slide-toggle" }, providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => _MatSlideToggle),
          multi: true
        },
        {
          provide: NG_VALIDATORS,
          useExisting: _MatSlideToggle,
          multi: true
        }
      ], viewQueries: [{ propertyName: "_switchElement", first: true, predicate: ["switch"], descendants: true }], exportAs: ["matSlideToggle"], usesOnChanges: true, ngImport: core_exports, template: `<div mat-internal-form-field [labelPosition]="labelPosition">
  <button
    class="mdc-switch"
    role="switch"
    type="button"
    [class.mdc-switch--selected]="checked"
    [class.mdc-switch--unselected]="!checked"
    [class.mdc-switch--checked]="checked"
    [class.mdc-switch--disabled]="disabled"
    [class.mat-mdc-slide-toggle-disabled-interactive]="disabledInteractive"
    [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
    [disabled]="disabled && !disabledInteractive"
    [attr.id]="buttonId"
    [attr.name]="name"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="_getAriaLabelledBy()"
    [attr.aria-describedby]="ariaDescribedby"
    [attr.aria-required]="required || null"
    [attr.aria-checked]="checked"
    [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
    (click)="_handleClick()"
    #switch>
    <span class="mdc-switch__track"></span>
    <span class="mdc-switch__handle-track">
      <span class="mdc-switch__handle">
        <span class="mdc-switch__shadow">
          <span class="mdc-elevation-overlay"></span>
        </span>
        <span class="mdc-switch__ripple">
          <span class="mat-mdc-slide-toggle-ripple mat-focus-indicator" mat-ripple
            [matRippleTrigger]="switch"
            [matRippleDisabled]="disableRipple || disabled"
            [matRippleCentered]="true"></span>
        </span>
        @if (!hideIcon) {
          <span class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </span>
        }
      </span>
    </span>
  </button>

  <!--
    Clicking on the label will trigger another click event from the button.
    Stop propagation here so other listeners further up in the DOM don't execute twice.
  -->
  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">
    <ng-content></ng-content>
  </label>
</div>
`, styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mat-slide-toggle-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mat-slide-toggle-track-height, 32px);border-radius:var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mat-slide-toggle-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-slide-toggle-track-outline-width, 2px);border-color:var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-slide-toggle-selected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mat-slide-toggle-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mat-slide-toggle-handle-width);height:var(--mat-slide-toggle-handle-height);border-radius:var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-slide-toggle-unselected-handle-size, 16px);height:var(--mat-slide-toggle-unselected-handle-size, 16px);margin:var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-slide-toggle-selected-handle-size, 24px);height:var(--mat-slide-toggle-selected-handle-size, 24px);margin:var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-slide-toggle-with-icon-handle-size, 24px);height:var(--mat-slide-toggle-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-slide-toggle-pressed-handle-size, 28px);height:var(--mat-slide-toggle-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mat-slide-toggle-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mat-slide-toggle-state-layer-size, 40px);height:var(--mat-slide-toggle-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mat-slide-toggle-unselected-icon-size, 16px);height:var(--mat-slide-toggle-unselected-icon-size, 16px);fill:var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mat-slide-toggle-selected-icon-size, 16px);height:var(--mat-slide-toggle-selected-icon-size, 16px);fill:var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface))}\n'], dependencies: [{ kind: "directive", type: MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "component", type: _MatInternalFormField, selector: "div[mat-internal-form-field]", inputs: ["labelPosition"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSlideToggle, decorators: [{
      type: Component,
      args: [{ selector: "mat-slide-toggle", host: {
        "class": "mat-mdc-slide-toggle",
        "[id]": "id",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.name]": "null",
        "[attr.aria-labelledby]": "null",
        "[class.mat-mdc-slide-toggle-focused]": "_focused",
        "[class.mat-mdc-slide-toggle-checked]": "checked",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[class]": 'color ? "mat-" + color : ""'
      }, exportAs: "matSlideToggle", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => MatSlideToggle),
          multi: true
        },
        {
          provide: NG_VALIDATORS,
          useExisting: MatSlideToggle,
          multi: true
        }
      ], imports: [MatRipple, _MatInternalFormField], template: `<div mat-internal-form-field [labelPosition]="labelPosition">
  <button
    class="mdc-switch"
    role="switch"
    type="button"
    [class.mdc-switch--selected]="checked"
    [class.mdc-switch--unselected]="!checked"
    [class.mdc-switch--checked]="checked"
    [class.mdc-switch--disabled]="disabled"
    [class.mat-mdc-slide-toggle-disabled-interactive]="disabledInteractive"
    [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
    [disabled]="disabled && !disabledInteractive"
    [attr.id]="buttonId"
    [attr.name]="name"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="_getAriaLabelledBy()"
    [attr.aria-describedby]="ariaDescribedby"
    [attr.aria-required]="required || null"
    [attr.aria-checked]="checked"
    [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
    (click)="_handleClick()"
    #switch>
    <span class="mdc-switch__track"></span>
    <span class="mdc-switch__handle-track">
      <span class="mdc-switch__handle">
        <span class="mdc-switch__shadow">
          <span class="mdc-elevation-overlay"></span>
        </span>
        <span class="mdc-switch__ripple">
          <span class="mat-mdc-slide-toggle-ripple mat-focus-indicator" mat-ripple
            [matRippleTrigger]="switch"
            [matRippleDisabled]="disableRipple || disabled"
            [matRippleCentered]="true"></span>
        </span>
        @if (!hideIcon) {
          <span class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </span>
        }
      </span>
    </span>
  </button>

  <!--
    Clicking on the label will trigger another click event from the button.
    Stop propagation here so other listeners further up in the DOM don't execute twice.
  -->
  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">
    <ng-content></ng-content>
  </label>
</div>
`, styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mat-slide-toggle-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mat-slide-toggle-track-height, 32px);border-radius:var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mat-slide-toggle-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-slide-toggle-track-outline-width, 2px);border-color:var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-slide-toggle-selected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mat-slide-toggle-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mat-slide-toggle-handle-width);height:var(--mat-slide-toggle-handle-height);border-radius:var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-slide-toggle-unselected-handle-size, 16px);height:var(--mat-slide-toggle-unselected-handle-size, 16px);margin:var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-slide-toggle-selected-handle-size, 24px);height:var(--mat-slide-toggle-selected-handle-size, 24px);margin:var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-slide-toggle-with-icon-handle-size, 24px);height:var(--mat-slide-toggle-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-slide-toggle-pressed-handle-size, 28px);height:var(--mat-slide-toggle-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mat-slide-toggle-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mat-slide-toggle-state-layer-size, 40px);height:var(--mat-slide-toggle-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mat-slide-toggle-unselected-icon-size, 16px);height:var(--mat-slide-toggle-unselected-icon-size, 16px);fill:var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mat-slide-toggle-selected-icon-size, 16px);height:var(--mat-slide-toggle-selected-icon-size, 16px);fill:var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface))}\n'] }]
    }], ctorParameters: () => [], propDecorators: { _switchElement: [{
      type: ViewChild,
      args: ["switch"]
    }], name: [{
      type: Input
    }], id: [{
      type: Input
    }], labelPosition: [{
      type: Input
    }], ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }], ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }], required: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], color: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], tabIndex: [{
      type: Input,
      args: [{ transform: (value) => value == null ? 0 : numberAttribute(value) }]
    }], checked: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], hideIcon: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabledInteractive: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], change: [{
      type: Output
    }], toggleChange: [{
      type: Output
    }] } });
    MatSlideToggleModule = class _MatSlideToggleModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSlideToggleModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSlideToggleModule, imports: [MatSlideToggle, MatCommonModule], exports: [MatSlideToggle, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSlideToggleModule, imports: [MatSlideToggle, MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSlideToggleModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatSlideToggle, MatCommonModule],
        exports: [MatSlideToggle, MatCommonModule]
      }]
    }] });
  }
});

// src/app/components/stepper/stepper.ts
var Stepper;
var init_stepper5 = __esm({
  "src/app/components/stepper/stepper.ts"() {
    "use strict";
    init_tslib_es6();
    init_stepper();
    init_stepper2();
    init_core();
    init_forms();
    init_input();
    init_form_field();
    init_stepper4();
    init_button();
    init_button_toggle();
    init_checkbox();
    init_list();
    init_expansion();
    init_card();
    init_common();
    init_tooltip();
    init_tree2();
    init_icon();
    init_application();
    init_select();
    init_chips();
    init_slide_toggle();
    init_customer();
    Stepper = class Stepper2 {
      customerSrv;
      applicationSrv;
      ngOnInit() {
        this.applicationConfigFormGroup.get("customer")?.valueChanges.subscribe((value) => {
          const orgEntityControl = this.applicationConfigFormGroup.get("OrgEntity");
          if (value) {
            orgEntityControl?.enable();
          } else {
            orgEntityControl?.disable();
          }
        });
        this.applicationConfigFormGroup.get("OrgEntity")?.valueChanges.subscribe((value) => {
          const applicationControl = this.applicationConfigFormGroup.get("application");
          if (value) {
            applicationControl?.enable();
          } else {
            applicationControl?.disable();
          }
        });
        this.applicationConfigFormGroup.get("application")?.valueChanges.subscribe((value) => {
          const oidcProvidersnControl = this.applicationConfigFormGroup.get("oidcProviders");
          if (value) {
            this.selectedApplication = value;
            oidcProvidersnControl?.enable();
          } else {
            oidcProvidersnControl?.disable();
          }
        });
        this.applicationConfigFormGroup.get("oidcProviders")?.valueChanges.subscribe((value) => {
          const oidcProvidersnControl = this.applicationConfigFormGroup.get("instrospecionEndpoint");
          if (value) {
            this.getIntrospecionEndpoint(value);
            oidcProvidersnControl?.enable();
          } else {
            oidcProvidersnControl?.disable();
          }
        });
        this.applicationConfigFormGroup.get("instrospecionEndpoint")?.valueChanges.subscribe((value) => {
          const oidcProvidersnControl = this.applicationConfigFormGroup.get("storageRegion");
          if (value) {
            this.getIntrospecionEndpoint(value);
            oidcProvidersnControl?.enable();
          } else {
            oidcProvidersnControl?.disable();
          }
        });
        this.applicationConfigFormGroup.get("storageRegion")?.valueChanges.subscribe((value) => {
          const oidcProvidersnControl = this.applicationConfigFormGroup.get("status");
          const enabled = this.applicationConfigFormGroup.get("enabled");
          if (value) {
            this.getIntrospecionEndpoint(value);
            oidcProvidersnControl?.enable();
            enabled?.enable();
          } else {
            oidcProvidersnControl?.disable();
            enabled?.disable();
          }
        });
      }
      childrenAccessor = (node) => node.children ?? [];
      hasChild = (_, node) => !!node.children && node.children.length > 0;
      isLinear = true;
      orgEntities = [];
      customers = [];
      applications = [];
      oidcProviders = ["IDP", "CUSTOM"];
      loading = false;
      configurations = [];
      creatingApplication = false;
      selectedApplication = { name: "", description: "" };
      selected = "CUSTOM";
      fileTypesForm;
      selectedConfiguration = null;
      configurationId = 1;
      _formBuilder = inject(FormBuilder);
      roles = [
        { value: "Role 1", viewValue: "Role 1" },
        { value: "Role 2", viewValue: "Role 2" }
      ];
      action = [
        { value: "SCAN", viewValue: "Scan" },
        { value: "SCAN AND REPAIR", viewValue: "Scan and repair" }
      ];
      foods = [
        { value: "CSV", viewValue: "CSV File" },
        { value: "PDF", viewValue: "PDF File" },
        { value: "TXT", viewValue: "TXT File" }
      ];
      constructor(customerSrv, applicationSrv) {
        this.customerSrv = customerSrv;
        this.applicationSrv = applicationSrv;
        this.orgEntities = this.customerSrv.getAllOe();
        this.customers = this.customerSrv.getAllCustomers();
        this.applications = this.applicationSrv.getapplications();
        this.fileTypesForm = this._formBuilder.group({
          action: ["", Validators.required],
          type: ["", Validators.required],
          size: ["", Validators.required]
        });
      }
      addConfiguration(flowName) {
        if (this.fileTypesForm.valid) {
          const config = __spreadProps(__spreadValues({}, this.fileTypesForm.value), { id: this.configurationId, flowName });
          this.configurations.push(config);
          this.fileTypesForm.reset();
          this.configurationId++;
        }
      }
      deleteConfiguration(index) {
        this.configurations.splice(index, 1);
      }
      consfigurationSelected(configurationId) {
        return this.selectedConfiguration && this.selectedConfiguration.id === configurationId;
      }
      selectConfiguration(config) {
        this.selectedConfiguration = config;
      }
      filterConfigurations(flowName) {
        return this.configurations.filter((config) => config.flowName === flowName);
      }
      selectapplication(app) {
        this.selectedApplication = app;
      }
      hasConfiguration(flowName) {
        return this.configurations.some((config) => config.flowName === flowName);
      }
      copyConfiguration(flowName) {
        if (this.selectedConfiguration) {
          const config = __spreadValues({}, this.selectedConfiguration);
          config.flowName = flowName;
          config.id = this.configurationId;
          console.log(config);
          this.configurations.push(config);
          this.configurationId++;
        }
      }
      applicationConfigFormGroup = this._formBuilder.group({
        customer: ["", Validators.required],
        OrgEntity: [{ value: "", disabled: true }, Validators.required],
        application: [{ value: "", disabled: true }, Validators.required],
        oidcProviders: [{ value: "", disabled: true }, Validators.required],
        instrospecionEndpoint: [{ value: "", disabled: true }, Validators.required],
        storageRegion: [{ value: "", disabled: true }, Validators.required],
        status: [{ value: true, disabled: true }, Validators.required],
        enabled: [{ value: false, disabled: true }, Validators.required]
      });
      roleConfigFormGroup = this._formBuilder.group({
        roles: ["", Validators.required]
      });
      instros = "";
      getIntrospecionEndpoint(value) {
        this.selected = value;
        if (value === "IDP") {
          this.instros = "https://OIDC.AZ/instrospect";
          this.applicationConfigFormGroup.patchValue({ instrospecionEndpoint: this.instros });
        } else if (value === "CUSTOM") {
          this.instros = "";
        }
      }
      static ctorParameters = () => [
        { type: Customer },
        { type: Application }
      ];
    };
    Stepper = __decorate([
      Component({
        selector: "app-stepper",
        imports: [
          CommonModule,
          MatButtonModule,
          MatStepperModule,
          FormsModule,
          ReactiveFormsModule,
          MatFormFieldModule,
          MatInputModule,
          MatButtonToggleModule,
          MatCheckboxModule,
          MatListModule,
          MatExpansionModule,
          MatCardModule,
          MatTooltipModule,
          MatTreeModule,
          MatIconModule,
          MatSelectModule,
          MatButtonModule,
          MatChipsModule,
          MatSlideToggleModule
        ],
        standalone: true,
        template: stepper_default,
        styles: [stepper_default2]
      })
    ], Stepper);
  }
});

export {
  Stepper,
  init_stepper5 as init_stepper
};
//# sourceMappingURL=chunk-KWONNRWY.js.map
