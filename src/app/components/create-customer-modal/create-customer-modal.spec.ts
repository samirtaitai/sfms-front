import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerModal } from './create-customer-modal';

describe('CreateCustomerModal', () => {
  let component: CreateCustomerModal;
  let fixture: ComponentFixture<CreateCustomerModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCustomerModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCustomerModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
