import {
  CdkScrollable,
  CdkScrollableModule,
  ScrollDispatcher,
  ViewportRuler,
  init_scrolling
} from "./chunk-ASAJABVR.js";
import "./chunk-IMWK5FLG.js";
import {
  FormBuilder,
  init_forms
} from "./chunk-G5Q5MP62.js";
import {
  MatButtonModule,
  _animationsDisabled,
  coerceBooleanProperty,
  init_animation_DfMFjxHu,
  init_button,
  init_coercion
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
import {
  Directionality,
  ESCAPE,
  FocusMonitor,
  FocusTrapFactory,
  InteractivityChecker,
  MatCommonModule,
  Platform,
  coerceNumberProperty,
  hasModifierKey,
  init_a11y,
  init_bidi,
  init_common_module_cKSwHniA,
  init_keycodes,
  init_platform
} from "./chunk-IZ5VFSKW.js";
import "./chunk-DNNWWJOP.js";
import "./chunk-24PN7RHC.js";
import "./chunk-YYFSG6UY.js";
import "./chunk-2O7PQ6HR.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  QueryList,
  Renderer2,
  Subject,
  TestBed,
  ViewChild,
  ViewEncapsulation,
  __async,
  __commonJS,
  __decorate,
  __esm,
  afterNextRender,
  core_exports,
  debounceTime,
  filter,
  fromEvent,
  init_core,
  init_esm,
  init_operators,
  init_testing,
  init_tslib_es6,
  inject,
  map,
  mapTo,
  merge,
  signal,
  startWith,
  take,
  takeUntil,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-QKEEE2EE.js";

// angular:jit:template:src\app\pages\admin-distributive-page\admin-distributive-page.html
var admin_distributive_page_default;
var init_admin_distributive_page = __esm({
  "angular:jit:template:src\\app\\pages\\admin-distributive-page\\admin-distributive-page.html"() {
    admin_distributive_page_default = '<app-nav-bar></app-nav-bar>\r\n\r\n<div class="page-container">\r\n    <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: start;">\r\n        <mat-card class="application-card" appearance="outlined">\r\n            <mat-card-header>\r\n                <mat-card-title>Applications/Services</mat-card-title>\r\n                <mat-card-subtitle>Manage your Applications/Services</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content style="display: flex; flex-direction: column;">\r\n                <button matButton class="dist-button" routerLink="/configured-applications">\r\n                    <mat-icon>cloud_done</mat-icon>\r\n                    Existing Applications/Services\r\n                </button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n\r\n    <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: start;">\r\n        <mat-card class="application-card" appearance="outlined">\r\n            <mat-card-header>\r\n                <mat-card-title>Configuration</mat-card-title>\r\n                <mat-card-subtitle>Manage your core components</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content style="display: flex; flex-direction: column;">\r\n                <button matButton class="dist-button" routerLink="/customers">\r\n                    <mat-icon>person</mat-icon>\r\n                    Customers\r\n                </button>\r\n                <button matButton class="dist-button" routerLink="/organization-entities">\r\n                    <mat-icon>apartment</mat-icon>\r\n\r\n                    Organization Entities</button>\r\n                <button matButton class="dist-button" routerLink="/applications">\r\n                    <mat-icon>web</mat-icon>\r\n\r\n                    <p>\r\n                        Applications\r\n                    </p>\r\n                </button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>';
  }
});

// angular:jit:style:src\app\pages\admin-distributive-page\admin-distributive-page.css
var admin_distributive_page_default2;
var init_admin_distributive_page2 = __esm({
  "angular:jit:style:src\\app\\pages\\admin-distributive-page\\admin-distributive-page.css"() {
    admin_distributive_page_default2 = "/* src/app/pages/admin-distributive-page/admin-distributive-page.css */\n.example-card {\n  max-width: 200px;\n  height: 100px;\n  background-color: white;\n  background-color: #006192;\n}\n.application-card {\n  width: 420px;\n  color: #006192;\n  background-color: white;\n}\n.dist-button {\n  display: flex;\n  justify-content: start;\n}\n.page-container {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n/*# sourceMappingURL=admin-distributive-page.css.map */\n";
  }
});

// node_modules/@angular/material/fesm2022/sidenav.mjs
function throwMatDuplicatedDrawerError(position) {
  throw Error(`A drawer was already declared for 'position="${position}"'`);
}
function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
  return false;
}
var MAT_DRAWER_DEFAULT_AUTOSIZE, MAT_DRAWER_CONTAINER, MatDrawerContent, MatDrawer, MatDrawerContainer, MatSidenavContent, MatSidenav, MatSidenavContainer, MatSidenavModule;
var init_sidenav = __esm({
  "node_modules/@angular/material/fesm2022/sidenav.mjs"() {
    "use strict";
    init_a11y();
    init_bidi();
    init_coercion();
    init_keycodes();
    init_platform();
    init_scrolling();
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_animation_DfMFjxHu();
    init_common_module_cKSwHniA();
    MAT_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken("MAT_DRAWER_DEFAULT_AUTOSIZE", {
      providedIn: "root",
      factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY
    });
    MAT_DRAWER_CONTAINER = new InjectionToken("MAT_DRAWER_CONTAINER");
    MatDrawerContent = class _MatDrawerContent extends CdkScrollable {
      _platform = inject(Platform);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _container = inject(MatDrawerContainer);
      constructor() {
        const elementRef = inject(ElementRef);
        const scrollDispatcher = inject(ScrollDispatcher);
        const ngZone = inject(NgZone);
        super(elementRef, scrollDispatcher, ngZone);
      }
      ngAfterContentInit() {
        this._container._contentMarginChanges.subscribe(() => {
          this._changeDetectorRef.markForCheck();
        });
      }
      /** Determines whether the content element should be hidden from the user. */
      _shouldBeHidden() {
        if (this._platform.isBrowser) {
          return false;
        }
        const { start, end } = this._container;
        return start != null && start.mode !== "over" && start.opened || end != null && end.mode !== "over" && end.opened;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDrawerContent, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatDrawerContent, isStandalone: true, selector: "mat-drawer-content", host: { properties: { "style.margin-left.px": "_container._contentMargins.left", "style.margin-right.px": "_container._contentMargins.right", "class.mat-drawer-content-hidden": "_shouldBeHidden()" }, classAttribute: "mat-drawer-content" }, providers: [
        {
          provide: CdkScrollable,
          useExisting: _MatDrawerContent
        }
      ], usesInheritance: true, ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDrawerContent, decorators: [{
      type: Component,
      args: [{
        selector: "mat-drawer-content",
        template: "<ng-content></ng-content>",
        host: {
          "class": "mat-drawer-content",
          "[style.margin-left.px]": "_container._contentMargins.left",
          "[style.margin-right.px]": "_container._contentMargins.right",
          "[class.mat-drawer-content-hidden]": "_shouldBeHidden()"
        },
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [
          {
            provide: CdkScrollable,
            useExisting: MatDrawerContent
          }
        ]
      }]
    }], ctorParameters: () => [] });
    MatDrawer = class _MatDrawer {
      _elementRef = inject(ElementRef);
      _focusTrapFactory = inject(FocusTrapFactory);
      _focusMonitor = inject(FocusMonitor);
      _platform = inject(Platform);
      _ngZone = inject(NgZone);
      _renderer = inject(Renderer2);
      _interactivityChecker = inject(InteractivityChecker);
      _doc = inject(DOCUMENT);
      _container = inject(MAT_DRAWER_CONTAINER, { optional: true });
      _focusTrap = null;
      _elementFocusedBeforeDrawerWasOpened = null;
      _eventCleanups;
      /** Whether the view of the component has been attached. */
      _isAttached;
      /** Anchor node used to restore the drawer to its initial position. */
      _anchor;
      /** The side that the drawer is attached to. */
      get position() {
        return this._position;
      }
      set position(value) {
        value = value === "end" ? "end" : "start";
        if (value !== this._position) {
          if (this._isAttached) {
            this._updatePositionInParent(value);
          }
          this._position = value;
          this.onPositionChanged.emit();
        }
      }
      _position = "start";
      /** Mode of the drawer; one of 'over', 'push' or 'side'. */
      get mode() {
        return this._mode;
      }
      set mode(value) {
        this._mode = value;
        this._updateFocusTrapState();
        this._modeChanged.next();
      }
      _mode = "over";
      /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */
      get disableClose() {
        return this._disableClose;
      }
      set disableClose(value) {
        this._disableClose = coerceBooleanProperty(value);
      }
      _disableClose = false;
      /**
       * Whether the drawer should focus the first focusable element automatically when opened.
       * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
       * enabled, focus will be moved into the sidenav in `side` mode as well.
       * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or AutoFocusTarget
       * instead.
       */
      get autoFocus() {
        const value = this._autoFocus;
        if (value == null) {
          if (this.mode === "side") {
            return "dialog";
          } else {
            return "first-tabbable";
          }
        }
        return value;
      }
      set autoFocus(value) {
        if (value === "true" || value === "false" || value == null) {
          value = coerceBooleanProperty(value);
        }
        this._autoFocus = value;
      }
      _autoFocus;
      /**
       * Whether the drawer is opened. We overload this because we trigger an event when it
       * starts or end.
       */
      get opened() {
        return this._opened();
      }
      set opened(value) {
        this.toggle(coerceBooleanProperty(value));
      }
      _opened = signal(false);
      /** How the sidenav was opened (keypress, mouse click etc.) */
      _openedVia;
      /** Emits whenever the drawer has started animating. */
      _animationStarted = new Subject();
      /** Emits whenever the drawer is done animating. */
      _animationEnd = new Subject();
      /** Event emitted when the drawer open state is changed. */
      openedChange = (
        // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
        new EventEmitter(
          /* isAsync */
          true
        )
      );
      /** Event emitted when the drawer has been opened. */
      _openedStream = this.openedChange.pipe(filter((o) => o), map(() => {
      }));
      /** Event emitted when the drawer has started opening. */
      openedStart = this._animationStarted.pipe(filter(() => this.opened), mapTo(void 0));
      /** Event emitted when the drawer has been closed. */
      _closedStream = this.openedChange.pipe(filter((o) => !o), map(() => {
      }));
      /** Event emitted when the drawer has started closing. */
      closedStart = this._animationStarted.pipe(filter(() => !this.opened), mapTo(void 0));
      /** Emits when the component is destroyed. */
      _destroyed = new Subject();
      /** Event emitted when the drawer's position changes. */
      // tslint:disable-next-line:no-output-on-prefix
      onPositionChanged = new EventEmitter();
      /** Reference to the inner element that contains all the content. */
      _content;
      /**
       * An observable that emits when the drawer mode changes. This is used by the drawer container to
       * to know when to when the mode changes so it can adapt the margins on the content.
       */
      _modeChanged = new Subject();
      _injector = inject(Injector);
      _changeDetectorRef = inject(ChangeDetectorRef);
      constructor() {
        this.openedChange.pipe(takeUntil(this._destroyed)).subscribe((opened) => {
          if (opened) {
            this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement;
            this._takeFocus();
          } else if (this._isFocusWithinDrawer()) {
            this._restoreFocus(this._openedVia || "program");
          }
        });
        this._ngZone.runOutsideAngular(() => {
          const element = this._elementRef.nativeElement;
          fromEvent(element, "keydown").pipe(filter((event) => {
            return event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event);
          }), takeUntil(this._destroyed)).subscribe((event) => this._ngZone.run(() => {
            this.close();
            event.stopPropagation();
            event.preventDefault();
          }));
          this._eventCleanups = [
            this._renderer.listen(element, "transitionrun", this._handleTransitionEvent),
            this._renderer.listen(element, "transitionend", this._handleTransitionEvent),
            this._renderer.listen(element, "transitioncancel", this._handleTransitionEvent)
          ];
        });
        this._animationEnd.subscribe(() => {
          this.openedChange.emit(this.opened);
        });
      }
      /**
       * Focuses the provided element. If the element is not focusable, it will add a tabIndex
       * attribute to forcefully focus it. The attribute is removed after focus is moved.
       * @param element The element to focus.
       */
      _forceFocus(element, options) {
        if (!this._interactivityChecker.isFocusable(element)) {
          element.tabIndex = -1;
          this._ngZone.runOutsideAngular(() => {
            const callback = () => {
              cleanupBlur();
              cleanupMousedown();
              element.removeAttribute("tabindex");
            };
            const cleanupBlur = this._renderer.listen(element, "blur", callback);
            const cleanupMousedown = this._renderer.listen(element, "mousedown", callback);
          });
        }
        element.focus(options);
      }
      /**
       * Focuses the first element that matches the given selector within the focus trap.
       * @param selector The CSS selector for the element to set focus to.
       */
      _focusByCssSelector(selector, options) {
        let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
        if (elementToFocus) {
          this._forceFocus(elementToFocus, options);
        }
      }
      /**
       * Moves focus into the drawer. Note that this works even if
       * the focus trap is disabled in `side` mode.
       */
      _takeFocus() {
        if (!this._focusTrap) {
          return;
        }
        const element = this._elementRef.nativeElement;
        switch (this.autoFocus) {
          case false:
          case "dialog":
            return;
          case true:
          case "first-tabbable":
            afterNextRender(() => {
              const hasMovedFocus = this._focusTrap.focusInitialElement();
              if (!hasMovedFocus && typeof element.focus === "function") {
                element.focus();
              }
            }, { injector: this._injector });
            break;
          case "first-heading":
            this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
            break;
          default:
            this._focusByCssSelector(this.autoFocus);
            break;
        }
      }
      /**
       * Restores focus to the element that was originally focused when the drawer opened.
       * If no element was focused at that time, the focus will be restored to the drawer.
       */
      _restoreFocus(focusOrigin) {
        if (this.autoFocus === "dialog") {
          return;
        }
        if (this._elementFocusedBeforeDrawerWasOpened) {
          this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, focusOrigin);
        } else {
          this._elementRef.nativeElement.blur();
        }
        this._elementFocusedBeforeDrawerWasOpened = null;
      }
      /** Whether focus is currently within the drawer. */
      _isFocusWithinDrawer() {
        const activeEl = this._doc.activeElement;
        return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
      }
      ngAfterViewInit() {
        this._isAttached = true;
        if (this._position === "end") {
          this._updatePositionInParent("end");
        }
        if (this._platform.isBrowser) {
          this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
          this._updateFocusTrapState();
        }
      }
      ngOnDestroy() {
        this._eventCleanups.forEach((cleanup) => cleanup());
        this._focusTrap?.destroy();
        this._anchor?.remove();
        this._anchor = null;
        this._animationStarted.complete();
        this._animationEnd.complete();
        this._modeChanged.complete();
        this._destroyed.next();
        this._destroyed.complete();
      }
      /**
       * Open the drawer.
       * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
       * Used for focus management after the sidenav is closed.
       */
      open(openedVia) {
        return this.toggle(true, openedVia);
      }
      /** Close the drawer. */
      close() {
        return this.toggle(false);
      }
      /** Closes the drawer with context that the backdrop was clicked. */
      _closeViaBackdropClick() {
        return this._setOpen(
          /* isOpen */
          false,
          /* restoreFocus */
          true,
          "mouse"
        );
      }
      /**
       * Toggle this drawer.
       * @param isOpen Whether the drawer should be open.
       * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
       * Used for focus management after the sidenav is closed.
       */
      toggle(isOpen = !this.opened, openedVia) {
        if (isOpen && openedVia) {
          this._openedVia = openedVia;
        }
        const result = this._setOpen(
          isOpen,
          /* restoreFocus */
          !isOpen && this._isFocusWithinDrawer(),
          this._openedVia || "program"
        );
        if (!isOpen) {
          this._openedVia = null;
        }
        return result;
      }
      /**
       * Toggles the opened state of the drawer.
       * @param isOpen Whether the drawer should open or close.
       * @param restoreFocus Whether focus should be restored on close.
       * @param focusOrigin Origin to use when restoring focus.
       */
      _setOpen(isOpen, restoreFocus, focusOrigin) {
        if (isOpen === this.opened) {
          return Promise.resolve(isOpen ? "open" : "close");
        }
        this._opened.set(isOpen);
        if (this._container?._transitionsEnabled) {
          this._setIsAnimating(true);
        } else {
          setTimeout(() => {
            this._animationStarted.next();
            this._animationEnd.next();
          });
        }
        this._elementRef.nativeElement.classList.toggle("mat-drawer-opened", isOpen);
        if (!isOpen && restoreFocus) {
          this._restoreFocus(focusOrigin);
        }
        this._changeDetectorRef.markForCheck();
        this._updateFocusTrapState();
        return new Promise((resolve) => {
          this.openedChange.pipe(take(1)).subscribe((open) => resolve(open ? "open" : "close"));
        });
      }
      /** Toggles whether the drawer is currently animating. */
      _setIsAnimating(isAnimating) {
        this._elementRef.nativeElement.classList.toggle("mat-drawer-animating", isAnimating);
      }
      _getWidth() {
        return this._elementRef.nativeElement.offsetWidth || 0;
      }
      /** Updates the enabled state of the focus trap. */
      _updateFocusTrapState() {
        if (this._focusTrap) {
          this._focusTrap.enabled = !!this._container?.hasBackdrop && this.opened;
        }
      }
      /**
       * Updates the position of the drawer in the DOM. We need to move the element around ourselves
       * when it's in the `end` position so that it comes after the content and the visual order
       * matches the tab order. We also need to be able to move it back to `start` if the sidenav
       * started off as `end` and was changed to `start`.
       */
      _updatePositionInParent(newPosition) {
        if (!this._platform.isBrowser) {
          return;
        }
        const element = this._elementRef.nativeElement;
        const parent = element.parentNode;
        if (newPosition === "end") {
          if (!this._anchor) {
            this._anchor = this._doc.createComment("mat-drawer-anchor");
            parent.insertBefore(this._anchor, element);
          }
          parent.appendChild(element);
        } else if (this._anchor) {
          this._anchor.parentNode.insertBefore(element, this._anchor);
        }
      }
      /** Event handler for animation events. */
      _handleTransitionEvent = (event) => {
        const element = this._elementRef.nativeElement;
        if (event.target === element) {
          this._ngZone.run(() => {
            if (event.type === "transitionrun") {
              this._animationStarted.next(event);
            } else {
              if (event.type === "transitionend") {
                this._setIsAnimating(false);
              }
              this._animationEnd.next(event);
            }
          });
        }
      };
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDrawer, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatDrawer, isStandalone: true, selector: "mat-drawer", inputs: { position: "position", mode: "mode", disableClose: "disableClose", autoFocus: "autoFocus", opened: "opened" }, outputs: { openedChange: "openedChange", _openedStream: "opened", openedStart: "openedStart", _closedStream: "closed", closedStart: "closedStart", onPositionChanged: "positionChanged" }, host: { properties: { "attr.align": "null", "class.mat-drawer-end": 'position === "end"', "class.mat-drawer-over": 'mode === "over"', "class.mat-drawer-push": 'mode === "push"', "class.mat-drawer-side": 'mode === "side"', "style.visibility": '(!_container && !opened) ? "hidden" : null', "attr.tabIndex": '(mode !== "side") ? "-1" : null' }, classAttribute: "mat-drawer" }, viewQueries: [{ propertyName: "_content", first: true, predicate: ["content"], descendants: true }], exportAs: ["matDrawer"], ngImport: core_exports, template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n', dependencies: [{ kind: "directive", type: CdkScrollable, selector: "[cdk-scrollable], [cdkScrollable]" }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDrawer, decorators: [{
      type: Component,
      args: [{ selector: "mat-drawer", exportAs: "matDrawer", host: {
        "class": "mat-drawer",
        // must prevent the browser from aligning text based on value
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        // The styles that render the sidenav off-screen come from the drawer container. Prior to #30235
        // this was also done by the animations module which some internal tests seem to depend on.
        // Simulate it by toggling the `hidden` attribute instead.
        "[style.visibility]": '(!_container && !opened) ? "hidden" : null',
        // The sidenav container should not be focused on when used in side mode. See b/286459024 for
        // reference. Updates tabIndex of drawer/container to default to null if in side mode.
        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null'
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [CdkScrollable], template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n' }]
    }], ctorParameters: () => [], propDecorators: { position: [{
      type: Input
    }], mode: [{
      type: Input
    }], disableClose: [{
      type: Input
    }], autoFocus: [{
      type: Input
    }], opened: [{
      type: Input
    }], openedChange: [{
      type: Output
    }], _openedStream: [{
      type: Output,
      args: ["opened"]
    }], openedStart: [{
      type: Output
    }], _closedStream: [{
      type: Output,
      args: ["closed"]
    }], closedStart: [{
      type: Output
    }], onPositionChanged: [{
      type: Output,
      args: ["positionChanged"]
    }], _content: [{
      type: ViewChild,
      args: ["content"]
    }] } });
    MatDrawerContainer = class _MatDrawerContainer {
      _dir = inject(Directionality, { optional: true });
      _element = inject(ElementRef);
      _ngZone = inject(NgZone);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _animationDisabled = _animationsDisabled();
      _transitionsEnabled = false;
      /** All drawers in the container. Includes drawers from inside nested containers. */
      _allDrawers;
      /** Drawers that belong to this container. */
      _drawers = new QueryList();
      _content;
      _userContent;
      /** The drawer child with the `start` position. */
      get start() {
        return this._start;
      }
      /** The drawer child with the `end` position. */
      get end() {
        return this._end;
      }
      /**
       * Whether to automatically resize the container whenever
       * the size of any of its drawers changes.
       *
       * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
       * the drawers on every change detection cycle. Can be configured globally via the
       * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
       */
      get autosize() {
        return this._autosize;
      }
      set autosize(value) {
        this._autosize = coerceBooleanProperty(value);
      }
      _autosize = inject(MAT_DRAWER_DEFAULT_AUTOSIZE);
      /**
       * Whether the drawer container should have a backdrop while one of the sidenavs is open.
       * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
       * mode as well.
       */
      get hasBackdrop() {
        return this._drawerHasBackdrop(this._start) || this._drawerHasBackdrop(this._end);
      }
      set hasBackdrop(value) {
        this._backdropOverride = value == null ? null : coerceBooleanProperty(value);
      }
      _backdropOverride;
      /** Event emitted when the drawer backdrop is clicked. */
      backdropClick = new EventEmitter();
      /** The drawer at the start/end position, independent of direction. */
      _start;
      _end;
      /**
       * The drawer at the left/right. When direction changes, these will change as well.
       * They're used as aliases for the above to set the left/right style properly.
       * In LTR, _left == _start and _right == _end.
       * In RTL, _left == _end and _right == _start.
       */
      _left;
      _right;
      /** Emits when the component is destroyed. */
      _destroyed = new Subject();
      /** Emits on every ngDoCheck. Used for debouncing reflows. */
      _doCheckSubject = new Subject();
      /**
       * Margins to be applied to the content. These are used to push / shrink the drawer content when a
       * drawer is open. We use margin rather than transform even for push mode because transform breaks
       * fixed position elements inside of the transformed element.
       */
      _contentMargins = { left: null, right: null };
      _contentMarginChanges = new Subject();
      /** Reference to the CdkScrollable instance that wraps the scrollable content. */
      get scrollable() {
        return this._userContent || this._content;
      }
      _injector = inject(Injector);
      constructor() {
        const platform = inject(Platform);
        const viewportRuler = inject(ViewportRuler);
        this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
          this._validateDrawers();
          this.updateContentMargins();
        });
        viewportRuler.change().pipe(takeUntil(this._destroyed)).subscribe(() => this.updateContentMargins());
        if (!this._animationDisabled && platform.isBrowser) {
          this._ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              this._element.nativeElement.classList.add("mat-drawer-transition");
              this._transitionsEnabled = true;
            }, 200);
          });
        }
      }
      ngAfterContentInit() {
        this._allDrawers.changes.pipe(startWith(this._allDrawers), takeUntil(this._destroyed)).subscribe((drawer) => {
          this._drawers.reset(drawer.filter((item) => !item._container || item._container === this));
          this._drawers.notifyOnChanges();
        });
        this._drawers.changes.pipe(startWith(null)).subscribe(() => {
          this._validateDrawers();
          this._drawers.forEach((drawer) => {
            this._watchDrawerToggle(drawer);
            this._watchDrawerPosition(drawer);
            this._watchDrawerMode(drawer);
          });
          if (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) {
            this.updateContentMargins();
          }
          this._changeDetectorRef.markForCheck();
        });
        this._ngZone.runOutsideAngular(() => {
          this._doCheckSubject.pipe(
            debounceTime(10),
            // Arbitrary debounce time, less than a frame at 60fps
            takeUntil(this._destroyed)
          ).subscribe(() => this.updateContentMargins());
        });
      }
      ngOnDestroy() {
        this._contentMarginChanges.complete();
        this._doCheckSubject.complete();
        this._drawers.destroy();
        this._destroyed.next();
        this._destroyed.complete();
      }
      /** Calls `open` of both start and end drawers */
      open() {
        this._drawers.forEach((drawer) => drawer.open());
      }
      /** Calls `close` of both start and end drawers */
      close() {
        this._drawers.forEach((drawer) => drawer.close());
      }
      /**
       * Recalculates and updates the inline styles for the content. Note that this should be used
       * sparingly, because it causes a reflow.
       */
      updateContentMargins() {
        let left = 0;
        let right = 0;
        if (this._left && this._left.opened) {
          if (this._left.mode == "side") {
            left += this._left._getWidth();
          } else if (this._left.mode == "push") {
            const width = this._left._getWidth();
            left += width;
            right -= width;
          }
        }
        if (this._right && this._right.opened) {
          if (this._right.mode == "side") {
            right += this._right._getWidth();
          } else if (this._right.mode == "push") {
            const width = this._right._getWidth();
            right += width;
            left -= width;
          }
        }
        left = left || null;
        right = right || null;
        if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
          this._contentMargins = { left, right };
          this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins));
        }
      }
      ngDoCheck() {
        if (this._autosize && this._isPushed()) {
          this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
        }
      }
      /**
       * Subscribes to drawer events in order to set a class on the main container element when the
       * drawer is open and the backdrop is visible. This ensures any overflow on the container element
       * is properly hidden.
       */
      _watchDrawerToggle(drawer) {
        drawer._animationStarted.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
          this.updateContentMargins();
          this._changeDetectorRef.markForCheck();
        });
        if (drawer.mode !== "side") {
          drawer.openedChange.pipe(takeUntil(this._drawers.changes)).subscribe(() => this._setContainerClass(drawer.opened));
        }
      }
      /**
       * Subscribes to drawer onPositionChanged event in order to
       * re-validate drawers when the position changes.
       */
      _watchDrawerPosition(drawer) {
        drawer.onPositionChanged.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
          afterNextRender({ read: () => this._validateDrawers() }, { injector: this._injector });
        });
      }
      /** Subscribes to changes in drawer mode so we can run change detection. */
      _watchDrawerMode(drawer) {
        drawer._modeChanged.pipe(takeUntil(merge(this._drawers.changes, this._destroyed))).subscribe(() => {
          this.updateContentMargins();
          this._changeDetectorRef.markForCheck();
        });
      }
      /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */
      _setContainerClass(isAdd) {
        const classList = this._element.nativeElement.classList;
        const className = "mat-drawer-container-has-open";
        if (isAdd) {
          classList.add(className);
        } else {
          classList.remove(className);
        }
      }
      /** Validate the state of the drawer children components. */
      _validateDrawers() {
        this._start = this._end = null;
        this._drawers.forEach((drawer) => {
          if (drawer.position == "end") {
            if (this._end != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
              throwMatDuplicatedDrawerError("end");
            }
            this._end = drawer;
          } else {
            if (this._start != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
              throwMatDuplicatedDrawerError("start");
            }
            this._start = drawer;
          }
        });
        this._right = this._left = null;
        if (this._dir && this._dir.value === "rtl") {
          this._left = this._end;
          this._right = this._start;
        } else {
          this._left = this._start;
          this._right = this._end;
        }
      }
      /** Whether the container is being pushed to the side by one of the drawers. */
      _isPushed() {
        return this._isDrawerOpen(this._start) && this._start.mode != "over" || this._isDrawerOpen(this._end) && this._end.mode != "over";
      }
      _onBackdropClicked() {
        this.backdropClick.emit();
        this._closeModalDrawersViaBackdrop();
      }
      _closeModalDrawersViaBackdrop() {
        [this._start, this._end].filter((drawer) => drawer && !drawer.disableClose && this._drawerHasBackdrop(drawer)).forEach((drawer) => drawer._closeViaBackdropClick());
      }
      _isShowingBackdrop() {
        return this._isDrawerOpen(this._start) && this._drawerHasBackdrop(this._start) || this._isDrawerOpen(this._end) && this._drawerHasBackdrop(this._end);
      }
      _isDrawerOpen(drawer) {
        return drawer != null && drawer.opened;
      }
      // Whether argument drawer should have a backdrop when it opens
      _drawerHasBackdrop(drawer) {
        if (this._backdropOverride == null) {
          return !!drawer && drawer.mode !== "side";
        }
        return this._backdropOverride;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDrawerContainer, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatDrawerContainer, isStandalone: true, selector: "mat-drawer-container", inputs: { autosize: "autosize", hasBackdrop: "hasBackdrop" }, outputs: { backdropClick: "backdropClick" }, host: { properties: { "class.mat-drawer-container-explicit-backdrop": "_backdropOverride" }, classAttribute: "mat-drawer-container" }, providers: [
        {
          provide: MAT_DRAWER_CONTAINER,
          useExisting: _MatDrawerContainer
        }
      ], queries: [{ propertyName: "_content", first: true, predicate: MatDrawerContent, descendants: true }, { propertyName: "_allDrawers", predicate: MatDrawer, descendants: true }], viewQueries: [{ propertyName: "_userContent", first: true, predicate: MatDrawerContent, descendants: true }], exportAs: ["matDrawerContainer"], ngImport: core_exports, template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-drawer"></ng-content>\n\n<ng-content select="mat-drawer-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-drawer-content>\n    <ng-content></ng-content>\n  </mat-drawer-content>\n}\n', styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"], dependencies: [{ kind: "component", type: MatDrawerContent, selector: "mat-drawer-content" }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDrawerContainer, decorators: [{
      type: Component,
      args: [{ selector: "mat-drawer-container", exportAs: "matDrawerContainer", host: {
        "class": "mat-drawer-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
        {
          provide: MAT_DRAWER_CONTAINER,
          useExisting: MatDrawerContainer
        }
      ], imports: [MatDrawerContent], template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-drawer"></ng-content>\n\n<ng-content select="mat-drawer-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-drawer-content>\n    <ng-content></ng-content>\n  </mat-drawer-content>\n}\n', styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"] }]
    }], ctorParameters: () => [], propDecorators: { _allDrawers: [{
      type: ContentChildren,
      args: [MatDrawer, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }], _content: [{
      type: ContentChild,
      args: [MatDrawerContent]
    }], _userContent: [{
      type: ViewChild,
      args: [MatDrawerContent]
    }], autosize: [{
      type: Input
    }], hasBackdrop: [{
      type: Input
    }], backdropClick: [{
      type: Output
    }] } });
    MatSidenavContent = class _MatSidenavContent extends MatDrawerContent {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSidenavContent, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatSidenavContent, isStandalone: true, selector: "mat-sidenav-content", host: { classAttribute: "mat-drawer-content mat-sidenav-content" }, providers: [
        {
          provide: CdkScrollable,
          useExisting: _MatSidenavContent
        }
      ], usesInheritance: true, ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSidenavContent, decorators: [{
      type: Component,
      args: [{
        selector: "mat-sidenav-content",
        template: "<ng-content></ng-content>",
        host: {
          "class": "mat-drawer-content mat-sidenav-content"
        },
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [
          {
            provide: CdkScrollable,
            useExisting: MatSidenavContent
          }
        ]
      }]
    }] });
    MatSidenav = class _MatSidenav extends MatDrawer {
      /** Whether the sidenav is fixed in the viewport. */
      get fixedInViewport() {
        return this._fixedInViewport;
      }
      set fixedInViewport(value) {
        this._fixedInViewport = coerceBooleanProperty(value);
      }
      _fixedInViewport = false;
      /**
       * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
       * mode.
       */
      get fixedTopGap() {
        return this._fixedTopGap;
      }
      set fixedTopGap(value) {
        this._fixedTopGap = coerceNumberProperty(value);
      }
      _fixedTopGap = 0;
      /**
       * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
       * fixed mode.
       */
      get fixedBottomGap() {
        return this._fixedBottomGap;
      }
      set fixedBottomGap(value) {
        this._fixedBottomGap = coerceNumberProperty(value);
      }
      _fixedBottomGap = 0;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSidenav, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatSidenav, isStandalone: true, selector: "mat-sidenav", inputs: { fixedInViewport: "fixedInViewport", fixedTopGap: "fixedTopGap", fixedBottomGap: "fixedBottomGap" }, host: { properties: { "attr.tabIndex": '(mode !== "side") ? "-1" : null', "attr.align": "null", "class.mat-drawer-end": 'position === "end"', "class.mat-drawer-over": 'mode === "over"', "class.mat-drawer-push": 'mode === "push"', "class.mat-drawer-side": 'mode === "side"', "class.mat-sidenav-fixed": "fixedInViewport", "style.top.px": "fixedInViewport ? fixedTopGap : null", "style.bottom.px": "fixedInViewport ? fixedBottomGap : null" }, classAttribute: "mat-drawer mat-sidenav" }, providers: [{ provide: MatDrawer, useExisting: _MatSidenav }], exportAs: ["matSidenav"], usesInheritance: true, ngImport: core_exports, template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n', dependencies: [{ kind: "directive", type: CdkScrollable, selector: "[cdk-scrollable], [cdkScrollable]" }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSidenav, decorators: [{
      type: Component,
      args: [{ selector: "mat-sidenav", exportAs: "matSidenav", host: {
        "class": "mat-drawer mat-sidenav",
        // The sidenav container should not be focused on when used in side mode. See b/286459024 for
        // reference. Updates tabIndex of drawer/container to default to null if in side mode.
        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null',
        // must prevent the browser from aligning text based on value
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        "[class.mat-sidenav-fixed]": "fixedInViewport",
        "[style.top.px]": "fixedInViewport ? fixedTopGap : null",
        "[style.bottom.px]": "fixedInViewport ? fixedBottomGap : null"
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [CdkScrollable], providers: [{ provide: MatDrawer, useExisting: MatSidenav }], template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n' }]
    }], propDecorators: { fixedInViewport: [{
      type: Input
    }], fixedTopGap: [{
      type: Input
    }], fixedBottomGap: [{
      type: Input
    }] } });
    MatSidenavContainer = class _MatSidenavContainer extends MatDrawerContainer {
      _allDrawers = void 0;
      // We need an initializer here to avoid a TS error.
      _content = void 0;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSidenavContainer, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatSidenavContainer, isStandalone: true, selector: "mat-sidenav-container", host: { properties: { "class.mat-drawer-container-explicit-backdrop": "_backdropOverride" }, classAttribute: "mat-drawer-container mat-sidenav-container" }, providers: [
        {
          provide: MAT_DRAWER_CONTAINER,
          useExisting: _MatSidenavContainer
        },
        {
          provide: MatDrawerContainer,
          useExisting: _MatSidenavContainer
        }
      ], queries: [{ propertyName: "_content", first: true, predicate: MatSidenavContent, descendants: true }, { propertyName: "_allDrawers", predicate: MatSidenav, descendants: true }], exportAs: ["matSidenavContainer"], usesInheritance: true, ngImport: core_exports, template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-sidenav"></ng-content>\n\n<ng-content select="mat-sidenav-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-sidenav-content>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n}\n', styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"], dependencies: [{ kind: "component", type: MatSidenavContent, selector: "mat-sidenav-content" }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSidenavContainer, decorators: [{
      type: Component,
      args: [{ selector: "mat-sidenav-container", exportAs: "matSidenavContainer", host: {
        "class": "mat-drawer-container mat-sidenav-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
        {
          provide: MAT_DRAWER_CONTAINER,
          useExisting: MatSidenavContainer
        },
        {
          provide: MatDrawerContainer,
          useExisting: MatSidenavContainer
        }
      ], imports: [MatSidenavContent], template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-sidenav"></ng-content>\n\n<ng-content select="mat-sidenav-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-sidenav-content>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n}\n', styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"] }]
    }], propDecorators: { _allDrawers: [{
      type: ContentChildren,
      args: [MatSidenav, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }], _content: [{
      type: ContentChild,
      args: [MatSidenavContent]
    }] } });
    MatSidenavModule = class _MatSidenavModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSidenavModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSidenavModule, imports: [
        MatCommonModule,
        CdkScrollableModule,
        MatDrawer,
        MatDrawerContainer,
        MatDrawerContent,
        MatSidenav,
        MatSidenavContainer,
        MatSidenavContent
      ], exports: [
        CdkScrollableModule,
        MatCommonModule,
        MatDrawer,
        MatDrawerContainer,
        MatDrawerContent,
        MatSidenav,
        MatSidenavContainer,
        MatSidenavContent
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSidenavModule, imports: [
        MatCommonModule,
        CdkScrollableModule,
        CdkScrollableModule,
        MatCommonModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSidenavModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          MatCommonModule,
          CdkScrollableModule,
          MatDrawer,
          MatDrawerContainer,
          MatDrawerContent,
          MatSidenav,
          MatSidenavContainer,
          MatSidenavContent
        ],
        exports: [
          CdkScrollableModule,
          MatCommonModule,
          MatDrawer,
          MatDrawerContainer,
          MatDrawerContent,
          MatSidenav,
          MatSidenavContainer,
          MatSidenavContent
        ]
      }]
    }] });
  }
});

// src/app/pages/admin-distributive-page/admin-distributive-page.ts
var AdminDistributivePage;
var init_admin_distributive_page3 = __esm({
  "src/app/pages/admin-distributive-page/admin-distributive-page.ts"() {
    "use strict";
    init_tslib_es6();
    init_admin_distributive_page();
    init_admin_distributive_page2();
    init_core();
    init_nav_bar();
    init_card();
    init_button();
    init_icon();
    init_forms();
    init_sidenav();
    init_router();
    AdminDistributivePage = class AdminDistributivePage2 {
      _formBuilder = inject(FormBuilder);
      options = this._formBuilder.group({
        bottom: 0,
        fixed: false,
        top: 0
      });
      shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
    };
    AdminDistributivePage = __decorate([
      Component({
        selector: "app-admin-distributive-page",
        standalone: true,
        imports: [NavBar, MatCard, MatCardModule, MatButtonModule, MatIconModule, MatSidenavModule, RouterLink],
        template: admin_distributive_page_default,
        styles: [admin_distributive_page_default2]
      })
    ], AdminDistributivePage);
  }
});

// src/app/pages/admin-distributive-page/admin-distributive-page.spec.ts
var require_admin_distributive_page_spec = __commonJS({
  "src/app/pages/admin-distributive-page/admin-distributive-page.spec.ts"(exports) {
    init_testing();
    init_admin_distributive_page3();
    describe("AdminDistributivePage", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [AdminDistributivePage]
        }).compileComponents();
        fixture = TestBed.createComponent(AdminDistributivePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_admin_distributive_page_spec();
//# sourceMappingURL=spec-admin-distributive-page.spec.js.map
