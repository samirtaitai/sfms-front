import {
  NavBar,
  init_nav_bar
} from "./chunk-3BJJBAUP.js";
import "./chunk-4TNG36QQ.js";
import "./chunk-TVKKCGZO.js";
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
