import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationEntities } from './organization-entities';

describe('OrganizationEntities', () => {
  let component: OrganizationEntities;
  let fixture: ComponentFixture<OrganizationEntities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationEntities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationEntities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
