import {
  LoaderComponent,
  init_loader_component
} from "./chunk-RTH5DLGH.js";
import {
  TestBed,
  __async,
  __commonJS,
  init_testing
} from "./chunk-QKEEE2EE.js";

// src/app/components/loader-component/loader-component.spec.ts
var require_loader_component_spec = __commonJS({
  "src/app/components/loader-component/loader-component.spec.ts"(exports) {
    init_testing();
    init_loader_component();
    describe("LoaderComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [LoaderComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(LoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_loader_component_spec();
//# sourceMappingURL=spec-loader-component.spec.js.map
