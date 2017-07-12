/**
 * Created by Ali on 5/1/2017.
 */
import {Component, Injectable} from "@angular/core"
import {StaffService} from "../../services/StaffService";
@Component(
  {
    moduleId:module.id,
    templateUrl:'./index.staff.component.html'

  }
)

export class IndexStaffComponent
{
  title:"Index";
  staffService: StaffService;
  constructor()
  {
   // this.staffService=staffService;
    this.loadStaffData();
  }
  loadStaffData()
  {
    // this.staffService.getAllStaff().subscribe(
    //   (data)=>{
    //     console.log(data)
    //   },
    //   (error) => {
    //     console.log(error)
    // })
  }
}
