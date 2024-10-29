import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,TasksComponent,ReactiveFormsModule,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',  
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
//app.component.ts