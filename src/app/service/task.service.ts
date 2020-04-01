import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }

  createTask(title: string) {
    return this.webRequestService.post('tasks', { title });
  }

  updateTask(id: string, title: string) {
    return this.webRequestService.patch(`tasks/edit/${id}` , { title });
  }

  shareTask(id: string, email: string) {
    return this.webRequestService.share(`${id}`, email );
  }

  getTasks() {
    return this.webRequestService.get('tasks');
  }

  complete(task: Task) {
    return this.webRequestService.patch(`tasks/edit/${task._id}`, {
      completed: !task.completed
    });
  }

  deleteTask(id: string) {
    return this.webRequestService.delete(`tasks/${id}`);
  }
}
