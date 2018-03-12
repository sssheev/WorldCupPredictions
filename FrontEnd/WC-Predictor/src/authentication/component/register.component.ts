import { Component } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'register-box',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User();

  confirmPassword: string ="";

  login() {

  }

  register() {

  }
}
