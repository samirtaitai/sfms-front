import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrgEntity } from './create-org-entity';

describe('CreateOrgEntity', () => {
  let component: CreateOrgEntity;
  let fixture: ComponentFixture<CreateOrgEntity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrgEntity]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateOrgEntity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
