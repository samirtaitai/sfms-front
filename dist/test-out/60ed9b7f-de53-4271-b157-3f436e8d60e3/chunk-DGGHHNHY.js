import {
  Injectable,
  __decorate,
  __esm,
  init_core,
  init_tslib_es6
} from "./chunk-QKEEE2EE.js";

// src/app/features/application/service/application.ts
var applications, Application;
var init_application = __esm({
  "src/app/features/application/service/application.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    applications = [
      { name: "App1", description: "Description for App1", flows: [{ code: "App1 flow", description: "this is app 1 flow" }] },
      { name: "App2", description: "Description for App2", flows: [{ code: "App2 flow", description: "this is app 2 flow" }] },
      { name: "App3", description: "Description for App3", flows: [{ code: "App3 flow", description: "this is app 3 flow" }, { code: "App3 flow 2", description: "this is app 3 flow second flow" }] }
    ];
    Application = class Application2 {
      getapplications() {
        return [...applications];
      }
      createApplication(name, description, flows) {
        applications.push({ name, description, flows });
      }
    };
    Application = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], Application);
  }
});

export {
  Application,
  init_application
};
//# sourceMappingURL=chunk-DGGHHNHY.js.map
