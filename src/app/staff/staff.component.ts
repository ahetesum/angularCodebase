/**
 * Created by Ali on 5/1/2017.
 */
import {Component} from '@angular/core'
import {UserService} from "../services/index";
import { Router } from '@angular/router';


import {User} from "../models/user";
import {ActivatedRoute} from "@angular/router";
@Component({
  moduleId: module.id,
  templateUrl:"./staff.component.html",
})

export class StaffComponent
{
  title="Staff Index";
  currentUser: User;

  constructor(userService: UserService,private route: ActivatedRoute)
  {
    this.currentUser=new User();
    this.currentUser= JSON.parse(localStorage.getItem('currentUser'));

  }


}
