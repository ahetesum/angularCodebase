/**
 * Created by Ali on 4/26/2017.
 */
import {Component, OnInit} from '@angular/core'
import {AuthenticationService} from "../services/index";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  moduleId:module.id,
  templateUrl:'./login.component.html'
})

export  class LoginComponent implements OnInit
{
  parentCompany="Mitoconnect Technology";
  model: any = { loginName: "systemadmin",password: "mitoconnect"};
  loading = false;
  returnUrl: string;


  constructor(private authenticationService: AuthenticationService,private route: ActivatedRoute,private router: Router,)
  {
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {

    this.authenticationService.login(this.model.loginName, this.model.password);
    if(localStorage.getItem('currentUser'))
    {
      this.router.navigate([this.returnUrl]);
    }
  }

}
