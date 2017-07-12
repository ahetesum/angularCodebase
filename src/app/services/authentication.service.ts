import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {User} from "../models/user";

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(loginName: string, password: string) {

        // return this.http.post('www.mitoconnect.com/api/authenticate', JSON.stringify({ username: username, password: password }))
        //     .map((response: Response) => {
        //         // login successful if there's a jwt token in the response
        //         let user = response.json();
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //         }
        //     });

      if(loginName=="systemadmin" && password=="mitoconnect")
      {
        let user=JSON.stringify({
                                  "userId": "1001",
                                  "loginName": "systemadmin",
                                  "email": "systemadmin@mitoconnect.com",
                                  "defaultLanguage": "fa",
                                  "accessToken":
                                  {
                                    "token": "458552f803af68582635a323ad1e40ce",
                                    "expiredTime": "2017-03-25 17:50:55"
                                  },
                                  "createTime": "2017-03-25 17:50:55",
                                  "updateTime": "2017-03-25 17:50:55"
                                });

        localStorage.setItem('currentUser',user);
      }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
