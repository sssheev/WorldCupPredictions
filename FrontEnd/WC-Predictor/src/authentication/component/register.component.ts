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
      //When a user registers we need to initialize them a empty Bracket in the DB
      //For example the user will Have a record for group a populated with The default team ordering
      //All with have a record for match 1 with no teams yet placed in it.
    this._authenticationService.currentUser = data;
    },
    err => {
      console.log("TODO come up with error handler")
    });
  }

}
