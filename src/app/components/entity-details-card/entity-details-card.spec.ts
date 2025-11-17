import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsCard } from './entity-details-card';

describe('EntityDetailsCard', () => {
  let component: EntityDetailsCard;
  let fixture: ComponentFixture<EntityDetailsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityDetailsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityDetailsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
