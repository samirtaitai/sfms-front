import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDistributivePage } from './admin-distributive-page';

describe('AdminDistributivePage', () => {
  let component: AdminDistributivePage;
  let fixture: ComponentFixture<AdminDistributivePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDistributivePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDistributivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
