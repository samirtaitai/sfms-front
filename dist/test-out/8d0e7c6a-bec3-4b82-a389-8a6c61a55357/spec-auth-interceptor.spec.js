import {
  TestBed,
  init_testing
} from "./chunk-QKEEE2EE.js";

// src/app/core/auth-interceptor.spec.ts
init_testing();

// src/app/core/auth-interceptor.ts
var authInterceptor = (req, next) => {
  return next(req);
};

// src/app/core/auth-interceptor.spec.ts
describe("authInterceptor", () => {
  const interceptor = (req, next) => TestBed.runInInjectionContext(() => authInterceptor(req, next));
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
  it("should be created", () => {
    expect(interceptor).toBeTruthy();
  });
});
//# sourceMappingURL=spec-auth-interceptor.spec.js.map
