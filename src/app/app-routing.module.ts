import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { LoginGuardGuard } from './guards/login-guard.guard';

const routes: Routes = [
] = [
 { path: 'login',
  component: AppComponent
 },
 { path: 'dashboard',
  component: DashboadComponent,
  canActivate: [LoginGuardGuard]
 }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
