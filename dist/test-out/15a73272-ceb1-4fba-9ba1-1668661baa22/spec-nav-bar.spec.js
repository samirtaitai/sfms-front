import {
  NavBar,
  init_nav_bar
} from "./chunk-NIMZMCZ2.js";
import "./chunk-4JPQHB6F.js";
import "./chunk-UKFYJ4AP.js";
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

// src/app/components/nav-bar/nav-bar.spec.ts
var require_nav_bar_spec = __commonJS({
  "src/app/components/nav-bar/nav-bar.spec.ts"(exports) {
    init_testing();
    init_nav_bar();
    describe("NavBar", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [NavBar]
        }).compileComponents();
        fixture = TestBed.createComponent(NavBar);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_nav_bar_spec();
//# sourceMappingURL=spec-nav-bar.spec.js.map
