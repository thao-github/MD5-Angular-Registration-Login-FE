import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LoginSuccessComponent} from "./login-success/login-success.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'loginSuccess', component:LoginSuccessComponent},
  {path:'registration', component:RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
