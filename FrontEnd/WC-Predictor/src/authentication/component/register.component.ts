import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user.model';
import { DataModelService } from '../../shared/datamodel/datamodel-service';
import { AuthenticationService } from '../service/authentication-service';

@Component({
  selector: 'register-box',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User();
  confirmPassword: string ="";
  @Output()
  loginEvent:EventEmitter<any> = new EventEmitter();

  constructor(private _dataModelService:DataModelService,
              private _authenticationService:AuthenticationService) {
  }

  register() {
    this._dataModelService.create(this.user).subscribe(data => {
      //Redirect to appropriate page
    this._authenticationService.currentUser = data;
    },
    err => {
      console.log("TODO come up with error handler")
    });
  }

}
