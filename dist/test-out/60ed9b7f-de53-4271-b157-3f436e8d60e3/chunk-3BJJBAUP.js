import {
  Auth,
  init_auth
} from "./chunk-4TNG36QQ.js";
import {
  RouterLink,
  init_router
} from "./chunk-TVKKCGZO.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-BGUUV7IW.js";
import {
  MatCommonModule,
  Platform,
  init_common_module_cKSwHniA,
  init_platform
} from "./chunk-IZ5VFSKW.js";
import {
  CommonModule,
  init_common
} from "./chunk-24PN7RHC.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  FactoryTarget,
  Input,
  NgModule,
  ViewEncapsulation,
  __decorate,
  __esm,
  core_exports,
  init_core,
  init_tslib_es6,
  inject,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-QKEEE2EE.js";

// angular:jit:template:src\app\components\nav-bar\nav-bar.html
var nav_bar_default;
var init_nav_bar = __esm({
  "angular:jit:template:src\\app\\components\\nav-bar\\nav-bar.html"() {
    nav_bar_default = '<mat-toolbar class="nav">\r\n    <div class="example-header-image">\r\n        <img src="https://ngx-ndbx.frameworks.allianz.io/assets/logos/allianz_logo_with_name.svg" alt="Allianz logo">\r\n    </div>\r\n    <button matButton class="nav-button" aria-label="Home button" routerLink="/home" routerLinkActive="active-link">\r\n        Home\r\n    </button>\r\n    <button matButton class="nav-button" aria-label="Administrator button" routerLink="/admin-distributive"\r\n        *ngIf="isAdminUser()">\r\n        Administrator\r\n    </button>\r\n    <button matButton class="nav-button" aria-label="Billing button" routerLink="/billing">\r\n        Billing account\r\n    </button>\r\n    <span class="example-spacer"></span>\r\n    <button matIconButton class="user-button" aria-label="User button" (click)="logOut()">\r\n        <mat-icon>logout</mat-icon>\r\n    </button>\r\n</mat-toolbar>';
  }
});

// angular:jit:style:src\app\components\nav-bar\nav-bar.css
var nav_bar_default2;
var init_nav_bar2 = __esm({
  "angular:jit:style:src\\app\\components\\nav-bar\\nav-bar.css"() {
    nav_bar_default2 = "/* src/app/components/nav-bar/nav-bar.css */\n.example-spacer {\n  flex: 1 1 auto;\n}\n.nav {\n  background-color: white;\n  border-bottom: 1px solid rgb(198, 198, 198);\n}\n.nav-button {\n  background-color: transparent;\n  border: none;\n  margin: 15px;\n  margin-bottom: 0px;\n  font-size: 15px;\n  font-family:\n    Verdana,\n    Geneva,\n    Tahoma,\n    sans-serif;\n  border-bottom: 4px transparent solid;\n  padding: 15px;\n  transition: 0.2s;\n}\n.nav-button:hover {\n  color: #006192;\n  border-bottom: 4px #006192 solid;\n}\n.user-button {\n  background-color: transparent;\n  color: #b7b7b7;\n  border: none;\n  transition: 0.9s;\n}\n.user-button:hover {\n  color: #006192;\n}\n.example-header-image {\n  width: 100px;\n}\n.active-link {\n  color: #006192;\n  border-bottom: 4px #006192 solid;\n}\n/*# sourceMappingURL=nav-bar.css.map */\n";
  }
});

// node_modules/@angular/material/fesm2022/toolbar.mjs
function throwToolbarMixedModesError() {
  throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.");
}
var MatToolbarRow, MatToolbar, MatToolbarModule;
var init_toolbar = __esm({
  "node_modules/@angular/material/fesm2022/toolbar.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_platform();
    init_common_module_cKSwHniA();
    MatToolbarRow = class _MatToolbarRow {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatToolbarRow, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatToolbarRow, isStandalone: true, selector: "mat-toolbar-row", host: { classAttribute: "mat-toolbar-row" }, exportAs: ["matToolbarRow"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatToolbarRow, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-toolbar-row",
        exportAs: "matToolbarRow",
        host: { "class": "mat-toolbar-row" }
      }]
    }] });
    MatToolbar = class _MatToolbar {
      _elementRef = inject(ElementRef);
      _platform = inject(Platform);
      _document = inject(DOCUMENT);
      // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
      /**
       * Theme color of the toolbar. This API is supported in M2 themes only, it has
       * no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/toolbar/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /** Reference to all toolbar row elements that have been projected. */
      _toolbarRows;
      constructor() {
      }
      ngAfterViewInit() {
        if (this._platform.isBrowser) {
          this._checkToolbarMixedModes();
          this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
        }
      }
      /**
       * Throws an exception when developers are attempting to combine the different toolbar row modes.
       */
      _checkToolbarMixedModes() {
        if (this._toolbarRows.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
          const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter((node) => !(node.classList && node.classList.contains("mat-toolbar-row"))).filter((node) => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some((node) => !!(node.textContent && node.textContent.trim()));
          if (isCombinedUsage) {
            throwToolbarMixedModesError();
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatToolbar, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatToolbar, isStandalone: true, selector: "mat-toolbar", inputs: { color: "color" }, host: { properties: { "class": 'color ? "mat-" + color : ""', "class.mat-toolbar-multiple-rows": "_toolbarRows.length > 0", "class.mat-toolbar-single-row": "_toolbarRows.length === 0" }, classAttribute: "mat-toolbar" }, queries: [{ propertyName: "_toolbarRows", predicate: MatToolbarRow, descendants: true }], exportAs: ["matToolbar"], ngImport: core_exports, template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n', styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatToolbar, decorators: [{
      type: Component,
      args: [{ selector: "mat-toolbar", exportAs: "matToolbar", host: {
        "class": "mat-toolbar",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mat-toolbar-multiple-rows]": "_toolbarRows.length > 0",
        "[class.mat-toolbar-single-row]": "_toolbarRows.length === 0"
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n', styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"] }]
    }], ctorParameters: () => [], propDecorators: { color: [{
      type: Input
    }], _toolbarRows: [{
      type: ContentChildren,
      args: [MatToolbarRow, { descendants: true }]
    }] } });
    MatToolbarModule = class _MatToolbarModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatToolbarModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatToolbarModule, imports: [MatCommonModule, MatToolbar, MatToolbarRow], exports: [MatToolbar, MatToolbarRow, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatToolbarModule, imports: [MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatToolbarModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatToolbar, MatToolbarRow],
        exports: [MatToolbar, MatToolbarRow, MatCommonModule]
      }]
    }] });
  }
});

// src/app/components/nav-bar/nav-bar.ts
var NavBar;
var init_nav_bar3 = __esm({
  "src/app/components/nav-bar/nav-bar.ts"() {
    "use strict";
    init_tslib_es6();
    init_nav_bar();
    init_nav_bar2();
    init_core();
    init_toolbar();
    init_router();
    init_icon();
    init_common();
    init_auth();
    NavBar = class NavBar2 {
      authSrv;
      constructor(authSrv) {
        this.authSrv = authSrv;
      }
      isAdminUser() {
        return this.authSrv.user?.rol === "admin" ? true : false;
      }
      logOut() {
        this.authSrv.logOut();
      }
      static ctorParameters = () => [
        { type: Auth }
      ];
    };
    NavBar = __decorate([
      Component({
        selector: "app-nav-bar",
        imports: [CommonModule, MatToolbarModule, RouterLink, MatIconModule],
        standalone: true,
        template: nav_bar_default,
        styles: [nav_bar_default2]
      })
    ], NavBar);
  }
});

export {
  NavBar,
  init_nav_bar3 as init_nav_bar
};
//# sourceMappingURL=chunk-3BJJBAUP.js.map
