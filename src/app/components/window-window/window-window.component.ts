import { Component, Inject } from '@angular/core';
import { Measure } from '../../Task';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MeasureService } from '../../services/measure.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-window-window',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './window-window.component.html',
  styleUrl: './window-window.component.css'
})
export class WindowWindowComponent {
  measure:Measure;
  constructor (@Inject(MAT_DIALOG_DATA) public data: {measure: Measure},
  private dialogRef: MatDialogRef<WindowWindowComponent>,
  private measureService: MeasureService){
    this.measure = data.measure;

  }
  onSubmit(measure: Measure) {
    this.measureService.updateMeasure(measure).subscribe(() => {
      this.dialogRef.close(measure);
    });
  }
}
