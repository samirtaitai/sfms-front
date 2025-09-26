import {
  init_zone_testing
} from "./chunk-3RPILKDD.js";
import {
  Auth,
  init_auth
} from "./chunk-4TNG36QQ.js";
import "./chunk-TVKKCGZO.js";
import "./chunk-DNNWWJOP.js";
import "./chunk-24PN7RHC.js";
import "./chunk-YYFSG6UY.js";
import "./chunk-2O7PQ6HR.js";
import {
  TestBed,
  init_testing
} from "./chunk-QKEEE2EE.js";

// src/app/core/auth.spec.ts
init_zone_testing();
init_testing();
init_auth();
describe("Auth", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-auth.spec.js.map
