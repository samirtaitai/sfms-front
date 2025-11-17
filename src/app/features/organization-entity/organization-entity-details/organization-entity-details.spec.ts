import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationEntityDetails } from './organization-entity-details';

describe('OrganizationEntityDetails', () => {
  let component: OrganizationEntityDetails;
  let fixture: ComponentFixture<OrganizationEntityDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationEntityDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationEntityDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
