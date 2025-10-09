import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEntitiesForm } from './service-entities-form';

describe('ServiceEntitiesForm', () => {
  let component: ServiceEntitiesForm;
  let fixture: ComponentFixture<ServiceEntitiesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceEntitiesForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceEntitiesForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
