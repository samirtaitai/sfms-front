import {
  Stepper,
  init_stepper
} from "./chunk-RURC7CGD.js";
import "./chunk-JXNEVLCH.js";
import "./chunk-AELSV2DK.js";
import "./chunk-R2YUVFDF.js";
import "./chunk-7RMIKX75.js";
import "./chunk-MN2YSSDC.js";
import "./chunk-GV6NZENR.js";
import "./chunk-JPPIB4DL.js";
import "./chunk-MZDFVJIN.js";
import "./chunk-YMHZWFAK.js";
import "./chunk-SI744TBM.js";
import "./chunk-VJR5CB3Z.js";
import "./chunk-SQGN5GSA.js";
import "./chunk-4VD7SSGS.js";
import "./chunk-JHPUAMGW.js";
import "./chunk-SOPFOKX4.js";
import "./chunk-NNMCWHJ3.js";
import "./chunk-WKFFMUYD.js";
import "./chunk-ZKOOMT2W.js";
import "./chunk-VPQRC7O5.js";
import "./chunk-J54CSFRO.js";
import {
  TestBed,
  __async,
  __commonJS,
  init_testing
} from "./chunk-MN7Z2XXH.js";

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
