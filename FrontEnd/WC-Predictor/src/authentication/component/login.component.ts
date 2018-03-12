import { Component } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'login-box',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  loginString: string = "";
  password: string = "";

  login() {

  }

  register() {

  }
}
