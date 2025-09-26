import {
  Stepper,
  init_stepper
} from "./chunk-KWONNRWY.js";
import "./chunk-XDP6ZBFA.js";
import "./chunk-CZ6R4KF7.js";
import "./chunk-WQSOWEIB.js";
import "./chunk-JZAMVFKW.js";
import "./chunk-DGGHHNHY.js";
import "./chunk-H4Q5FXLQ.js";
import "./chunk-B5YPRY7J.js";
import "./chunk-5BEYDXTT.js";
import "./chunk-ITGCIDAD.js";
import "./chunk-ASAJABVR.js";
import "./chunk-IMWK5FLG.js";
import "./chunk-G5Q5MP62.js";
import "./chunk-ESUJ3PT7.js";
import "./chunk-VSIGYHHC.js";
import "./chunk-BGUUV7IW.js";
import "./chunk-IZ5VFSKW.js";
import "./chunk-DNNWWJOP.js";
import "./chunk-24PN7RHC.js";
import "./chunk-YYFSG6UY.js";
import "./chunk-2O7PQ6HR.js";
import {
  TestBed,
  __async,
  __commonJS,
  init_testing
} from "./chunk-QKEEE2EE.js";

// src/app/components/stepper/stepper.spec.ts
var require_stepper_spec = __commonJS({
  "src/app/components/stepper/stepper.spec.ts"(exports) {
    init_testing();
    init_stepper();
    describe("Stepper", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Stepper]
        }).compileComponents();
        fixture = TestBed.createComponent(Stepper);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_stepper_spec();
//# sourceMappingURL=spec-stepper.spec.js.map
