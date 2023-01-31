import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public email: string = '';
  public password: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  public login() {
    if (this.auth.login(this.email, this.password)) {
      this.router.navigate(['protected-page']);
      return;
    }
    alert('Invalid Login');
    this.email = '';
    this.password = '';
  }
}
