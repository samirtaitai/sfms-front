import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadedElements } from './loaded-elements';

describe('LoadedElements', () => {
  let component: LoadedElements;
  let fixture: ComponentFixture<LoadedElements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadedElements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadedElements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
