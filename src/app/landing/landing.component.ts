/**
 * Created by Ali on 4/26/2017.
 */
import {Component} from '@angular/core'
import {UserService} from "../services/index";


import {User} from "../models/user";
@Component({
  moduleId: module.id,
  templateUrl:"./landing.component.html",
})

export class LandingComponent
{
  title="Landing Screen";
  currentUser: User;

  constructor(userService: UserService)
  {
    this.currentUser=new User();
    this.currentUser= JSON.parse(localStorage.getItem('currentUser'));

  }

}
