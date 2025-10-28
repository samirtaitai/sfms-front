import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFileType } from './create-file-type';

describe('CreateFileType', () => {
  let component: CreateFileType;
  let fixture: ComponentFixture<CreateFileType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFileType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFileType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
