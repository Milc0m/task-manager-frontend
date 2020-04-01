import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent{

  constructor(private authService: AuthService, private router: Router) { }

  errBlock: boolean;
  errorMessage: string;

  onSignupButtonClick(email: string, password: string) {
    this.authService.signup(email, password).subscribe((res: HttpResponse<any>) => {
      this.router.navigate(['/tasks']);
    }, error => {
      this.errBlock = true;
      this.errorMessage = 'Email is already taken or password must be longer than 7 symbols.';
    });
  }



}
