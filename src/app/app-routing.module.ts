import { ShareComponent } from './pages/share/share.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'new-task', component: NewTaskComponent },
  { path: 'tasks/edit/:taskId', component: EditTaskComponent },
  { path: 'share/:taskId', component: ShareComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'tasks', component: TaskViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
