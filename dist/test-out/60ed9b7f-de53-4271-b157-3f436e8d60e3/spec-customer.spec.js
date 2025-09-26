import {
  Customer,
  init_customer
} from "./chunk-H4Q5FXLQ.js";
import {
  TestBed,
  init_testing
} from "./chunk-QKEEE2EE.js";

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
