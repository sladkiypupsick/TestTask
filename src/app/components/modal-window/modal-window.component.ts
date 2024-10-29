import { Component, Inject } from '@angular/core';
import { Measure, Task } from '../../Task';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { MeasureService } from '../../services/measure.service';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-modal-window',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,NgFor,MatSelectModule],
  templateUrl: './modal-window.component.html',
  styleUrl: './modal-window.component.css'
})
export class ModalWindowComponent {
  task:Task;
  measure: Measure
  measureList :Measure[] = [];
  seletedMeasureId: number;
  

 
  constructor (@Inject(MAT_DIALOG_DATA) public data: {task: Task},
  private taskService: TaskService,
  private measureService: MeasureService){
    this.task = data.task;
    this.seletedMeasureId  = data.task.measure.id!;
    
    

  }
  onSubmit(task:Task) {
    
    const msr = this.measureList.find(measure => measure.id === this.seletedMeasureId);
    task.measure = msr!;

    this.taskService.updateTask(task).subscribe();
  }
  



  ngOnInit(): void{
    
    this.measureService.getMeasure().subscribe((measures)=>(this.measureList = measures))

  }
  
}

  


