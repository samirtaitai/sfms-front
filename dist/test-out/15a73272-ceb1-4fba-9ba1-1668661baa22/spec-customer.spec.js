import {
  Customer,
  init_customer
} from "./chunk-GV6NZENR.js";
import {
  TestBed,
  init_testing
} from "./chunk-MN7Z2XXH.js";

// src/app/features/customer/customer/customer.spec.ts
init_testing();
init_customer();
describe("Customer", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Customer);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-customer.spec.js.map
