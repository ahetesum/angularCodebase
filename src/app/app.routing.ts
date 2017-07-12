import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { AuthGuard } from './guards/index';
import {StaffComponent} from "./staff/staff.component";
import {LandingComponent} from "./landing/landing.component";
import {HomeComponent} from "./home/home.component";
import {IndexStaffComponent} from "app/staff/index/index.staff.component";
import {CreateStaffComponent} from "./staff/create/create.staff.component";


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LandingComponent, canActivate: [AuthGuard],
    children:[
      {path: 'home',component:HomeComponent},
      {path: '',component:StaffComponent,children:[
        {path: '',component:IndexStaffComponent},
        {path: 'create',component:CreateStaffComponent},
      ]}
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
