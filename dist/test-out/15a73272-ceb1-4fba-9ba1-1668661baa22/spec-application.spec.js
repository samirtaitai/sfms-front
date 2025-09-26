import {
  Application,
  init_application
} from "./chunk-MN2YSSDC.js";
import {
  TestBed,
  init_testing
} from "./chunk-MN7Z2XXH.js";

// src/app/features/application/service/application.spec.ts
init_testing();
init_application();
describe("Application", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Application);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-application.spec.js.map
