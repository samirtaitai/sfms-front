import {
  Component,
  __decorate,
  __esm,
  init_core,
  init_tslib_es6
} from "./chunk-QKEEE2EE.js";

// angular:jit:template:src\app\components\loader-component\loader-component.html
var loader_component_default;
var init_loader_component = __esm({
  "angular:jit:template:src\\app\\components\\loader-component\\loader-component.html"() {
    loader_component_default = "<p>loader-component works!</p>\r\n";
  }
});

// angular:jit:style:src\app\components\loader-component\loader-component.css
var loader_component_default2;
var init_loader_component2 = __esm({
  "angular:jit:style:src\\app\\components\\loader-component\\loader-component.css"() {
    loader_component_default2 = "/* src/app/components/loader-component/loader-component.css */\n/*# sourceMappingURL=loader-component.css.map */\n";
  }
});

// src/app/components/loader-component/loader-component.ts
var LoaderComponent;
var init_loader_component3 = __esm({
  "src/app/components/loader-component/loader-component.ts"() {
    "use strict";
    init_tslib_es6();
    init_loader_component();
    init_loader_component2();
    init_core();
    LoaderComponent = class LoaderComponent2 {
    };
    LoaderComponent = __decorate([
      Component({
        selector: "app-loader-component",
        imports: [],
        template: loader_component_default,
        styles: [loader_component_default2]
      })
    ], LoaderComponent);
  }
});

export {
  LoaderComponent,
  init_loader_component3 as init_loader_component
};
//# sourceMappingURL=chunk-RTH5DLGH.js.map
