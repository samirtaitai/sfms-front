import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrgEntityModal } from './create-org-entity-modal';

describe('CreateOrgEntityModal', () => {
  let component: CreateOrgEntityModal;
  let fixture: ComponentFixture<CreateOrgEntityModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrgEntityModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrgEntityModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
