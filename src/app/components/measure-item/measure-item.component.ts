import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Measure, Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-measure-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './measure-item.component.html',
  styleUrl: './measure-item.component.css'
})
export class MeasureItemComponent {
  @Input() measure: Measure;
  @Output() onDeleteMeasure: EventEmitter<Measure> = new EventEmitter();
  
  faTimes = faTimes;

  onDelete( e: MouseEvent, measure: Measure) {
    e.stopPropagation();
    this.onDeleteMeasure.emit(measure);
  }

}
