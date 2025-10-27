import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsSelect } from './options-select';

describe('OptionsSelect', () => {
  let component: OptionsSelect;
  let fixture: ComponentFixture<OptionsSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
