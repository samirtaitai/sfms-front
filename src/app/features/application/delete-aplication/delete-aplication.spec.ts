import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAplication } from './delete-aplication';

describe('DeleteAplication', () => {
  let component: DeleteAplication;
  let fixture: ComponentFixture<DeleteAplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAplication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAplication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
