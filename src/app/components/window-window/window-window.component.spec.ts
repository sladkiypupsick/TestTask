import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowWindowComponent } from './window-window.component';

describe('WindowWindowComponent', () => {
  let component: WindowWindowComponent;
  let fixture: ComponentFixture<WindowWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
