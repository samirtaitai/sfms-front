import {
  init_zone_testing
} from "./chunk-54XBPM3H.js";
import {
  Auth,
  init_auth
} from "./chunk-4JPQHB6F.js";
import "./chunk-UKFYJ4AP.js";
import "./chunk-WKFFMUYD.js";
import "./chunk-ZKOOMT2W.js";
import "./chunk-VPQRC7O5.js";
import "./chunk-J54CSFRO.js";
import {
  TestBed,
  init_testing
} from "./chunk-MN7Z2XXH.js";

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
