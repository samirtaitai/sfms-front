import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConsumer } from './delete-consumer';

describe('DeleteConsumer', () => {
  let component: DeleteConsumer;
  let fixture: ComponentFixture<DeleteConsumer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteConsumer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteConsumer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
