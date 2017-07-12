import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StaffComponent} from "./staff/staff.component"
import {LoginComponent} from "./login/index";
import {AuthGuard} from "./guards/index";
import {AuthenticationService,UserService} from "./services/index";
import {IndexStaffComponent} from "./staff/index/index.staff.component";
import {CreateStaffComponent} from "./staff/create/create.staff.component";
import {routing} from "./app.routing";
import {LandingComponent} from "./landing/landing.component";
import {HomeComponent} from "./home/home.component";
import {StaffService} from "./services/StaffService";


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    StaffComponent,
    HomeComponent,
    IndexStaffComponent,
    CreateStaffComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    StaffService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
