import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureItemComponent } from './measure-item.component';

describe('MeasureItemComponent', () => {
  let component: MeasureItemComponent;
  let fixture: ComponentFixture<MeasureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasureItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
