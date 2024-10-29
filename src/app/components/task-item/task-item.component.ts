import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule,NgIf],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  onDelete( e: MouseEvent, task: Task) {
    e.stopPropagation();
    this.onDeleteTask.emit(task);
  }

}
