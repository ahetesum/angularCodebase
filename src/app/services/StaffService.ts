/**
 * Created by Ali on 5/1/2017.
 */
import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Staff} from "../models/staff";

@Injectable()
export class StaffService
{
  private baseUrl: string = 'http://swapi.co/api/staff';
  opts: RequestOptions;
  requestJson:JSON;
  constructor(private http : Http)
  {
    let headers = new Headers();
    headers.append("content-type", "application/json; charset=utf-8");
    this.opts = new RequestOptions();
    this.requestJson=JSON.parse("{'test':'test'}");
  }

  getAllStaff()
  {
    // return this.http.post('/api/authenticate', this.requestJson)
    //   .map((response: Response) => {
    //     // login successful if there's a jwt token in the response
    //     console.log(response.json())
    //     let user = response.json();
    //     if (user && user.token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //     }
    //   });
  }

  createStaff()
  {
      var staff=JSON.stringify(
        {
          "staffNumber":"1001",
          "firstName_fa":"حامد",
          "lastName_fa":"سلامی",
          "middleName_fa":"",
          "firstName_en":"hamed",
          "lastName_en":"salami",
          "middleName_en":"",
          "phoneNumber":"0215555889",
          "mobileNumber":"0912758842",
          "department":
            {
              "Id": "2"
            },
          "position":
            {
              "Id": "40"
            }
        }
      );

      localStorage.setItem('staffList',staff);
  }

}
