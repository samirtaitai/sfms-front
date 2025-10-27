import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesConfigTable } from './roles-config-table';

describe('RolesConfigTable', () => {
  let component: RolesConfigTable;
  let fixture: ComponentFixture<RolesConfigTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesConfigTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesConfigTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
