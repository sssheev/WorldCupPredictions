import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from "./component/login.component";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {RegisterComponent} from "./component/register.component";
import { AuthenticationComponent } from './component/authentication.component';
import { AuthenticationService } from './service/authentication-service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

  ],
  providers: [AuthenticationService],
  exports: [
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
