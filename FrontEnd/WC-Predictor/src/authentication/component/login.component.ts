import { Component, EventEmitter,Output } from '@angular/core';
import { User } from '../model/user.model';
import { AuthenticationService } from '../service/authentication-service';



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

  constructor(private _authenticationService:AuthenticationService) {
  }
  
  login() {
    this._authenticationService.login(this.loginString,this.password).subscribe(data => {
      //TODO Redirect to proper page on success
    },
    err => {
      console.log("TODO come up with error handler")
    });

  }

}
