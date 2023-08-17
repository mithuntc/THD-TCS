import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'dashboard',
  component: DashboadComponent,
  canActivate: [LoginGuardGuard]
},
{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
