import { Component, EventEmitter,Output } from '@angular/core';
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
  @Output()
  registerEvent:EventEmitter<any> = new EventEmitter();
  login() {

  }

}
