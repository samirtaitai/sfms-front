import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStorageRegion } from './create-storage-region';

describe('CreateStorageRegion', () => {
  let component: CreateStorageRegion;
  let fixture: ComponentFixture<CreateStorageRegion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStorageRegion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStorageRegion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
