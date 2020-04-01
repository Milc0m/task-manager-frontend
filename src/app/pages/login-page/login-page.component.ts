import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  errBlock: boolean;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) { }

  onLoginButtonClick(email: string, password: string) {
    this.authService.login(email, password).subscribe((res: HttpResponse<any>) => {

      if (res.status === 200) {
        // we logged in
        this.router.navigate(['/tasks']);
      }
    }, error => {
      this.errBlock = true;
      this.errorMessage = 'Сan\'t find email in database or password doesn\'t match the email.';
    });
  }

}
