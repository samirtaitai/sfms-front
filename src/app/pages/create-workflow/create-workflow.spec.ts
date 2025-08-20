import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkflow } from './create-workflow';

describe('CreateWorkflow', () => {
  let component: CreateWorkflow;
  let fixture: ComponentFixture<CreateWorkflow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateWorkflow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWorkflow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
