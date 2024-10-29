import { Component, OnInit } from '@angular/core';
import { MeasureItemComponent } from '../measure-item/measure-item.component';
import { Measure, Task } from '../../Task';
import { MeasureService } from '../../services/measure.service';
import { NgFor } from '@angular/common';
import { AddMeasureComponent } from '../add-measure/add-measure.component';
import { WindowWindowComponent } from '../window-window/window-window.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-measure-window',
  standalone: true,
  imports: [MeasureItemComponent,NgFor,AddMeasureComponent],
  templateUrl: './measure-window.component.html',
  styleUrl: './measure-window.component.css'
})
export class MeasureWindowComponent implements OnInit{
  measures: Measure[] = [];
  constructor(private measureService: MeasureService,private dialog: MatDialog) {
  }
  
  ngOnInit(): void{
    
    this.measureService.getMeasure().subscribe((measures)=>(this.measures = measures))

  }
  deleteMeasure(measure: Measure) {
    this.measureService
      .deleteMeasure(measure)
      .subscribe(
        () => (this.measures = this.measures.filter((t) => t.id !== measure.id))
      );
  }
  addMeasure(measure:Measure) {
    this.measureService.addMeasure(measure).subscribe((measures)=>(this.measures.push(measures)));
  }
  openMeasure2Modal(measure:Measure){
    this.dialog.open(WindowWindowComponent, {
      width:"600px",
      
      data:{measure}
    })
  }
}
