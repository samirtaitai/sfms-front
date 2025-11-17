import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguredApplications } from './configured-applications';

describe('ConfiguredApplications', () => {
  let component: ConfiguredApplications;
  let fixture: ComponentFixture<ConfiguredApplications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguredApplications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguredApplications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
