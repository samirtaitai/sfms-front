import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageRegionsPage } from './storage-regions-page';

describe('StorageRegionsPage', () => {
  let component: StorageRegionsPage;
  let fixture: ComponentFixture<StorageRegionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorageRegionsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorageRegionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
