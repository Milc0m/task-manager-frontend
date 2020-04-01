import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  taskId: string;
  errBlock: boolean;
  errorMessage: string;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.taskId = params.taskId;
      }
    );
  }

  shareTask(email: any) {
    this.taskService.shareTask(this.taskId, email).subscribe(() => {
      this.router.navigate(['/tasks']);
    }, error => {
      this.errBlock = true;
      this.errorMessage = 'Сan\'t find recepient email in database.';
    });
  }
}
