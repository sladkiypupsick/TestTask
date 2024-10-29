import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Measure, Task } from '../../Task';
@Component({
  selector: 'app-add-measure',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-measure.component.html',
  styleUrl: './add-measure.component.css'
})
export class AddMeasureComponent {
  @Output() onAddMeasure: EventEmitter<Measure> = new EventEmitter();
  name: string ;
  
  onSubmit() {
    if (!this.name) {
      alert('Пожалуйста добавьте информацию');
      return;
    }

    const newMeasure = {
      
      name: this.name,
    
    }

    this.onAddMeasure.emit(newMeasure);


    this.name = '';
    
    
  }
}
