import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../service/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {

  constructor(private taskServise: TaskService, private router: Router) { }

  createTask(title: string) {
    this.taskServise.createTask(title).subscribe((response: Task) => {
      this.router.navigate(['/tasks']);
    });
  }

}
