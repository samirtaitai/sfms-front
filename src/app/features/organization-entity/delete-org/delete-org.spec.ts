import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOrg } from './delete-org';

describe('DeleteOrg', () => {
  let component: DeleteOrg;
  let fixture: ComponentFixture<DeleteOrg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteOrg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteOrg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
