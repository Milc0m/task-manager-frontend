import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../models/task.model';
import { interval, SubscriptionLike } from 'rxjs';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit, OnDestroy {

  tasks: Task[];
  tasksForUpdate: Task[];
  subscription: SubscriptionLike;

  constructor(private taskServise: TaskService, private router: Router, private authService: AuthService) { }

  ngOnInit() {

    this.subscription = this.taskServise.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });

    this.subscription = interval(5000).subscribe(x => {
      this.taskServise.getTasks().subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
    });
  }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  // Method for complete tasks
  onTaskClick(task: Task) {
    this.taskServise.complete(task).subscribe(() => {
      task.completed = !task.completed;
    });
  }

  // Method for delete tasks
  onDeleteClick(id: string) {
    this.taskServise.deleteTask(id).subscribe(() => {
      this.taskServise.getTasks().subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
    });
  }

  onExitClick() {
    this.authService.logout();
  }
}
