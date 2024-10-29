import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Measure, Task } from '../../Task';
import { MatSelectModule } from '@angular/material/select';
import { MeasureService } from '../../services/measure.service';
import { NgFor } from '@angular/common';
import { MeasureWindowComponent } from '../measure-window/measure-window.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,MatSelectModule,NgFor],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  name: string ;
  price: number;
  count: number;
  measure: Measure | null;
  onSubmit() {
    if (!this.price || !this.measure ) {
      alert('Пожалуйста добавьте информацию');
      return;
    }

    const newTask = {
      
      name: this.name,
      price: this.price,
      count: this.count,
      measure: this.measure!
    }

    this.onAddTask.emit(newTask);


    this.name = '';
    this.price = 0;
    this.count = 0;
    this.measure = null;
  }
  constructor(private measureService: MeasureService,private dialog: MatDialog) {

  }

  measureList :Measure[] = [];

  ngOnInit(): void{
    
    this.measureService.getMeasure().subscribe((measures)=>(this.measureList = measures))

  }
  openMeasureModal(){
    this.dialog.open(MeasureWindowComponent, {
      width:"600px"
      
    })
    .afterClosed()
    .subscribe(() => this.measureService.getMeasure().subscribe((measures)=>(this.measureList = measures)))
}


}
