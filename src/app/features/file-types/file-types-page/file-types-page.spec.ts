import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTypesPage } from './file-types-page';

describe('FileTypesPage', () => {
  let component: FileTypesPage;
  let fixture: ComponentFixture<FileTypesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileTypesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileTypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
