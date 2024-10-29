import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureWindowComponent } from './measure-window.component';

describe('MeasureWindowComponent', () => {
  let component: MeasureWindowComponent;
  let fixture: ComponentFixture<MeasureWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasureWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasureWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
