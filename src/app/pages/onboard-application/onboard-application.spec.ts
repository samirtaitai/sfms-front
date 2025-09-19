import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardApplication } from './onboard-application';

describe('OnboardApplication', () => {
  let component: OnboardApplication;
  let fixture: ComponentFixture<OnboardApplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardApplication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardApplication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
