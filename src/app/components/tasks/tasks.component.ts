import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { NgFor } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalWindowComponent } from '../modal-window/modal-window.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor,TaskItemComponent,AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit { 

  tasks: Task[] = [];

  constructor(private taskService: TaskService, private dialog: MatDialog) {

  }

  ngOnInit(): void{
    //this.tasks =this.taskService.getTask();
    this.taskService.getTask().subscribe((tasks)=>(this.tasks = tasks))

  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  addTask(task:Task) {
    this.taskService.addTask(task).subscribe((tasks)=>(this.tasks.push(tasks)));
  }
  openTaskModal(task:Task){
    this.dialog.open(ModalWindowComponent, {
      width:"600px",
      
      data:{task}
    })
      
      
      
  }

  

}
